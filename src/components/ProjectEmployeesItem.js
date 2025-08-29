import { useNavigate } from "react-router-dom"
import axios from 'axios'
import {API_URL} from "../globals"

function ProjectEmployeesItem({employee,project, onDelete}) {
    /*const navigate = useNavigate()
    const handleModifyClick = () => {
        navigate("/employee", {state: {employee}})
    }

    const handleDeleteEmployee = (employeeId) => {
        axios.delete(API_URL + 'employee/' + employeeId + "/project/" + project.id)
    }*/

    return <div>
        <p>{employee.firstName + " " + employee.lastName + " : " + employee.mail}</p>
        <button onClick={() => onDelete(employee.id)}>Supprimer</button>
    </div>
}

export default ProjectEmployeesItem