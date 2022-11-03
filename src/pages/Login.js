import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { allUsers, allCarts } from '../components/Functions'
import '../styles/Login.css'
 
function Login(props) {
  
    props.funcNav(false);
    const [carts, setCarts] = useState([]);
    const [users, setUsers]=useState(null);
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const navigate = useNavigate();
    const userLogIn = {
         //crea un objeto usuario con los valores de las cajas de texto del form 
        name: '',
        email: email,
        password: pwd,
        id:'',
        cartId: ''
    }
    const userLoggedIn = [];

    useEffect(()=>{
        allCarts(setCarts);
            allUsers(setUsers);
        },[] );

    
    
    const handlesubmit = (e) => {
       
        e.preventDefault();
            var flag = false
            var cartId;
            
            users.find((person) => {
                if (person.email == email && person.password == pwd) {
                    carts.map((item) => {
      
                        if (item.userId == person.id)
                        {
                          cartId = item.id;
                        }
                      })
                    flag = true;
                    //agrego email y password del usuario logueado
                    userLogIn.name = person.firstName;
                    userLogIn.email = email; 
                    userLogIn.password = pwd;
                    userLogIn.id = person.id;                   
                    userLogIn.cartId = cartId;
                    userLoggedIn.push(userLogIn); //json stringify pasa de objeto a string
                    localStorage.setItem('userLoggedIn', JSON.stringify(userLoggedIn));// agrega el obj usuario al loggearse
                    return (
                        navigate("/dashboard")
                      )
                }
              })
              
            if (!flag) {
                alert("Datos incorrectos");
            }
        
      }



  return (
    <>
        
        <Form className='container col-lg-6 col-md-8 col-sm-12 p-5' onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)}/>
            </Form.Group>
            <Container className='d-grid gap-4 d-md-flex justify-content-md-center'>
                <Button className='col-md-4' variant="primary" size="lg" type='submit'>
                    Ingresar
                </Button>
                <Button  className='col-md-4' href="#" variant="secondary" size="lg">
                    Registrarse
                </Button>
                <Button  className='col-md-4' variant="secondary" size="lg">
                    Cancelar
                </Button>
            </Container>    
        </Form>
    </>   
  )
}

export default Login
