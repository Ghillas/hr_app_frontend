import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import ProjectItem from "./ProjectItem";

function Employee() {
    const location = useLocation()
    const employee = location.state?.employee ?? null
    const [firstName, setFirstName] = useState(employee ? employee.firstName : "");
    const [lastName, setLastName] = useState(employee ? employee.lastName : "");
    const [mail, setMail] = useState(employee ? employee.mail : "");
    const [password, setPassword] = useState(employee ? employee.password : "");
    const navigate = useNavigate()
    const [projects, updateProjects] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (firstName.length > 0 && 
                lastName.length > 0 && 
                mail.length > 0 && 
                password.length > 0
            ) {
                if (employee == null || (
                    employee != null && ( 
                    employee?.firstName !== firstName ||
                    employee?.lastName !== lastName ||
                    employee?.mail !== mail ||
                    employee?.password !== password)) // TODO : extract all these if in a function
                ) { 
                    const response = employee ?
                    axios.put("http://localhost:9000/employee/" + employee.id, {
                        firstName : firstName,
                        lastName : lastName,
                        mail : mail, 
                        password : password
                    })
                    : axios.post("http://localhost:9000/employee", {
                        firstName : firstName,
                        lastName : lastName,
                        mail : mail,
                        password : password 
                    })
                    console.log((await response).data)
                    navigate("/employees")
                }
            }
        } catch(error) {
            console.log(error)
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        try {
            axios.delete("http://localhost:9000/employee/" + employee.id)
            navigate("/employees")
        } catch(error) {
            console.log(error)
        }
    }

    function checkMailAddress() {
        if(!mail.includes('@')) {
            alert("L'adresse email n'est pas valide")
        }
    }

    useEffect(() => {
        if (employee != null) {
            axios.get('http://localhost:9000/employee/' + employee.id + '/project')
                .then(response => updateProjects(response.data))
                .catch(error => console.log(error))
        }
    }, [])

    return (
        <div>
        <form>
        <input
            placeholder="Prenom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />
         <input
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />
        <input
            placeholder="Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            onBlur={checkMailAddress}
        />
         <input
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>{employee ? "Modifier" : "Ajouter"}</button>
        {
            employee && <button onClick={handleDelete}>Supprimer</button>
        }
        </form>
        {
            projects.map((data) => 
                <ProjectItem key={data.id} project={data} />
            )
        }
        </div>
    );
}

export default Employee