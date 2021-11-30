import { Container } from 'react-bootstrap';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';



function App() {
 
  return (
    <AuthProvider>
      <Container className="mt-4 d-flex align-item-center justify-content-center "
        style={{ minHeight: "100vh" }} >
        <div className="w-100" style={{ maxWidth: "400px" }}>

          <Signup />
      
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;

