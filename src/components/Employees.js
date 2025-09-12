import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeItem from './EmployeeItem';
import '../styles/Employees.css'

function Employees() {
    const [employees, updateEmployees] = useState([])
    const navigate = useNavigate()
    const handleNewEmployeeClick = () => {
        navigate("/employee")
    }

    useEffect(() => {
        axios.get('http://localhost:9000/employees')
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
            <button onClick={handleNewEmployeeClick}>Ajouter un employer</button>       
        </div>
    )
}

export default Employees