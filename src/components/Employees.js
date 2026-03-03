import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeItem from './EmployeeItem';
import '../styles/Employees.css'
import api from '../api'
import { API_ROUTES } from '../utils/constant';

function Employees() {
    const [employees, updateEmployees] = useState([])
    const navigate = useNavigate()
    const handleNewEmployeeClick = () => {
        navigate("/employee")
    }

    useEffect(() => {
        api.get(API_ROUTES.EMPLOYEES)
            .then(response => updateEmployees(response.data))
            .catch(error => console.log(error))
    }, []);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Prenom</th>
                        <th>Nom</th>
                        <th>Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        employees.map((data) => 
                            <EmployeeItem key={data.id} employee={data} />
                        )
                    }
                </tbody>
            </table>
            <button className="addEmployeeButton" onClick={handleNewEmployeeClick}>Ajouter un employer</button>       
        </div>
    )
}

export default Employees