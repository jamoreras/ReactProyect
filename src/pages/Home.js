import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import imagen1 from '../imagenes/imagen1.jpg'
import imagen2 from '../imagenes/imagen2.jpg'
import imagen3 from '../imagenes/imagen3.jpg'
import imagen4 from '../imagenes/imagen4.jpg'
import imagen5 from '../imagenes/imagen5.jpg'
import articulos from '../imagenes/articulos.jpg'
import mascotas from '../imagenes/mascotas.jpg'
import ofertas from '../imagenes/ofertas.jpg'
import '../styles/Home.css'
import NavbarUser from '../components/Navbar';


const Home = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return(
        <>
            <NavbarUser/>
            <div >
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={imagen1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={imagen2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={imagen3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={imagen4}
                        alt="Four slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={imagen5}
                        alt="Five slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            
            <div className='categoria'>
                <CardGroup className='row row-cols-1 row-cols-md-3 g-4'>
                    <Card className='col'>
                        <Card.Img variant="top" src={articulos} />
                        <Card.Body>
                        <Card.Title>Variedad de Articulos</Card.Title>
                        <Card.Text>
                            Más de 1000 productos para escoger
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='col'>
                        <Card.Img variant="top" src={mascotas}/>
                        <Card.Body>
                        <Card.Title>Mascotas</Card.Title>
                        <Card.Text>
                            Compra productos para tus mascotas aqui.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='col'>
                        <Card.Img variant="top" src={ofertas} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Ofertas y promociones durante todo el año.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            
            </div>
        </>
        
    
    )
}

export default Home;
