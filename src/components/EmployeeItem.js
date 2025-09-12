import { useNavigate } from "react-router-dom"
import '../styles/EmployeeItem.css'

function EmployeeItem({employee}) {
    const navigate = useNavigate()
    const handleModifyClick = () => {
        navigate("/employee", {state: {employee}})
    }

    return <tr onClick={handleModifyClick}>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.mail}</td>
    </tr>
}

export default EmployeeItem