import { useNavigate } from "react-router-dom"

function ProjectItem({project}) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/project", {state: {project}})
    }
    return (
        <div 
            onClick={handleClick}
        >
            <h1>{project.name}</h1>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectItem