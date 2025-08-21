import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ProjectItem from './ProjectItem';

function Projects () {
    const [projects, updateProjects] = useState([])
    const navigate = useNavigate()
    const handleNewProjectClick = () => {
        navigate("/project") // TODO : new project
    }

    useEffect(() => {
        axios.get('http://localhost:9000/projects')
            .then(response => updateProjects(response.data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            {
                projects.map((data) => 
                    <ProjectItem key={data.id} project={data} />
                )
            }
            <button onClick={handleNewProjectClick}>Ajouter un projet</button>
        </div>
    )
}

export default Projects