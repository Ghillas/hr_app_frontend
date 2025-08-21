import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../App.css'
import './Home'
import './Employees'
import Home from './Home';
import Employees from './Employees';
import Employee from './Employee';
import Projects from './Projects';
import Project from './Project';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="employees" element={<Employees />}/>
          <Route path="employee" element={<Employee />} />
          <Route path="projects" element={<Projects />}/>
          <Route path="project" element={<Project />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
