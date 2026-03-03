import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import api from '../api';
import { API_ROUTES } from '../utils/constant';

function Projects () {
    const [projects, updateProjects] = useState([])
    const navigate = useNavigate()
    const handleNewProjectClick = () => {
        navigate("/project") // TODO : new project
    }

    useEffect(() => {
        api.get(API_ROUTES.PROJECTS)
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