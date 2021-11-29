import { Container } from 'react-bootstrap';
import './App.css';
import Signup from './components/Signup';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';


function App() {
  console.log(process.env)
  return (
    <AuthProvider>
      <Container className="mt-4 d-flex align-item-center justify-content-center "
        style={{ minHeight: "100vh" }} >
        <div className="w-100" style={{ maxWidth: "400px" }}>

          <Signup />
          <Login />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;

