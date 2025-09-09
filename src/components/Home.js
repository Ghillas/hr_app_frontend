import {useNavigate} from 'react-router-dom';
import '../styles/Home.css'

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/employees');
    }
    const handleProjectClick = () => {
        navigate('/projects');
    }
    return (
        <div className='home_buttons_div'>
            <button 
                className='home_button'
                onClick={handleClick}
            >
                Employer
            </button>
            <button 
                className='home_button'
                onClick={handleProjectClick}
            >
                Projets
            </button>
        </div>
    );
}

export default Home