import axios from 'axios'
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import ProjectEmployeesItem from "./ProjectEmployeesItem"
import ProjectItem from './ProjectItem'
import {API_URL} from '../globals'

function Project() {
    const location = useLocation()
    const project = location.state?.project ?? null
    const [employees, updateEmployees] = useState([])
    const [addingEmployees, updateAddingEmployees] = useState([])
    const [elementChecked, updateElementChecked] = useState([])
    const [requireAdding,updateRequireAdding] = useState(false) // if we want to add employees
    useEffect(() => {
        if(elementChecked.length === 0 && project) {
            axios.get(API_URL + 'project/' + project.id + "/employees") // getting all employees of this project
                .then(response => updateEmployees(response.data))
                .catch(error => console.log(error))
        }
    }, [])

    useEffect(() => {
        if(requireAdding) {
            axios.get(API_URL + "employees") // getting all employees
                .then(response => updateAddingEmployees(response.data))
                .catch(error => console.log(error))
        }
    }, [requireAdding])

    const handleAddEmployee = () => {
        updateRequireAdding(prevState => !prevState)
    }

    const handleCheckboxChange = (id) => {
        updateElementChecked((prev) => {
            if(prev.includes(id)) {
                return prev.filter((item) => item === id)
            } else {
                return [...prev, id]
            }
        })
    }

    const handleAddingClick = () => {
        updateRequireAdding(prevState => !prevState)
        if(project) {
            elementChecked.forEach((key) => {
                axios.post(API_URL + "employee/" + key + "/project/" + project.id)
                .then(response => {
                    console.log(response.data)
                    if(response.status === 200) {
                        updateEmployees((prev) => {
                            return [...prev, addingEmployees.find((item) => item.id == key)]
                        }
                        )
                    }
                
                })
                .catch(error => console.log(error))
            })
        }
        updateElementChecked([])
    }

    const handleDeleteEmployee = (employeeId) => {
        if(project) {
            axios.delete(API_URL + 'employee/' + employeeId + "/project/" + project.id)
            .then((res) => {
                if(res.status === 200) {
                    updateEmployees((prev) => 
                        prev.filter((item) =>
                            item.id !== employeeId
                        )
                )
                }
            })
        }
    }

    function isPresent(id) {
        let isEqual = false
        employees.forEach((item) => {
            if(item.id === id) {
                isEqual = true
            }
        })
        return isEqual
    }

    return (
        <div>
            <ProjectItem project={project}/>
            <button onClick={handleAddEmployee}>{requireAdding ? "Fermer" : "Ajouter un membre"}</button>
            {
                requireAdding &&
                    addingEmployees
                    .filter((data) => 
                        !isPresent(data.id)
                    )
                    .map((data) =>
                        <label key={data.id} style={{ display: "block" }}>
                        <input
                            type="checkbox"
                            checked={elementChecked.includes(data.id)}
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
                    <ProjectEmployeesItem key={data.id} employee={data} project={project} onDelete={handleDeleteEmployee}/>
                )
            }
        </div>

        //TODO : update project
    )
}

export default Project