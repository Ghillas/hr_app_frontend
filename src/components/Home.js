import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/employees');
    }
    const handleProjectClick = () => {
        navigate('/projects');
    }
    return (
        <div>
            <button onClick={handleClick}>Employer</button>
            <button onClick={handleProjectClick}>Projets</button>
        </div>
    );
}

export default Home