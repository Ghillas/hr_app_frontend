import axios from 'axios'
import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import ProjectEmployeesItem from "./ProjectEmployeesItem"
import ProjectItem from './ProjectItem'
import {API_URL} from '../globals'

function Project() {
    const location = useLocation()
    const project = location.state?.project ?? null
    const [employees, updateEmployees] = useState([])
    const [addingEmployees, updateAddingEmployees] = useState([])
    const [isCheck, updateIsCheck] = useState({})
    const [requireAdding,updateRequireAdding] = useState(false)
    useEffect(() => {
        if(Object.keys(isCheck).length === 0) {
            axios.get(API_URL + 'project/' + project.id + "/employees") // getting all employees of this project
                .then(response => updateEmployees(response.data))
                .catch(error => console.log(error))
        }
    }, [isCheck])

    useEffect(() => {
        if(requireAdding) {
            axios.get(API_URL + "employees") // getting all employees
                .then(response => updateAddingEmployees(response.data))
                .catch(error => console.log(error))
            const initialState = {}
            addingEmployees.forEach((item) => {
                if(!employees.includes(item)) {
                    initialState[item.id] = false;
                }
            })
            updateIsCheck(initialState)
        }
    }, [requireAdding])

    const handleAddEmployee = () => {
        updateRequireAdding(prevState => !prevState)
    }

    const handleCheckboxChange = (id) => {
        updateIsCheck((prevState) => ({
        ...prevState,
        [id]: !prevState[id]
        }));
    }

    const handleAddingClick = () => {
        Object.keys(isCheck).forEach((key) => {
            axios.post(API_URL + "employee/" + key + "/project/" + project.id)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        })
        updateIsCheck({})
    }

    return (
        <div>
            {console.log("bonjour initial : " + requireAdding)}
            <ProjectItem project={project}/>
            <button onClick={handleAddEmployee}>{requireAdding ? "Fermer" : "Ajouter un membre"}</button>
            {
                requireAdding &&
                    addingEmployees
                    .filter((data) => 
                        !employees.includes(data)
                    )
                    .map((data) =>
                        <label key={data.id} style={{ display: "block" }}>
                        <input
                            type="checkbox"
                            checked={isCheck[data.id] || false}
                            onChange={() => handleCheckboxChange(data.id)}
                        />
                        <p>{data.firstName + " " + data.lastName}</p>
                        </label>
                    )
            }
            {
                requireAdding && <button onClick={handleAddingClick}>Ajouter</button>
            }
            {
                employees.map((data) => 
                    <ProjectEmployeesItem key={data.id} employee={data} project={project}/> // peut etre modifié handleClick dans EmployeeItem
                )
            }
        </div>

        //TODO : update project
    )
}

export default Project