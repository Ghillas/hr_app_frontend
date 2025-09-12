import "../styles/ProjectEmployeesItem.css"
import { FaTrash } from "react-icons/fa";

function ProjectEmployeesItem({employee, onDelete}) {

    return <div className="projectEmployeeItem">
        <p className="projectEmployeeItem_description">{employee.firstName + " " + employee.lastName + " : " + employee.mail}</p>
        <button className="projectEmployeeItem_delete_button" onClick={() => onDelete(employee.id)}>
            <FaTrash /> 
        </button>
    </div>
}

export default ProjectEmployeesItem