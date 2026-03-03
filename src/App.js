import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './components/Home'
import './components/Employees'
import Home from './components/Home';
import Employees from './components/Employees';
import Employee from './components/Employee';
import Projects from './components/Projects';
import Project from './components/Project';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './Protected';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>
          <Route path="employees" element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }/>
          <Route path="employee" element={
            <ProtectedRoute>
              <Employee />
            </ProtectedRoute>
          } />
          <Route path="projects" element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }/>
          <Route path="project" element={
            <ProtectedRoute>
            <Project />
            </ProtectedRoute>
          }/>
          <Route path="login" element={<Login/>} />
        </Routes>
      </AuthProvider>
      </Router>
    </div>
  );
}


export default App;
