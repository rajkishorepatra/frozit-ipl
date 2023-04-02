import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import bgimg from './img/bg.jpg';
import { Form, Nav } from 'react-bootstrap';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark" style={{ width: '95%', borderRadius: '10px', top: '5px', zIndex: "100" }} className='m-auto'>
        <Container>
          <Navbar.Brand href="#home">Frozit.</Navbar.Brand>
          <Nav style={{ color: 'white' }}>
            <Nav.Link href="#campaigns" className='mx-2 text-white'>Campaigns</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <div className='main' id='main'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bgimg}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bgimg}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bgimg}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <ParallaxProvider>
        <Parallax speed={-5}>
          <section className="home-newsletter" id="testimonials">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="single">
                    <h2>Participate in our Contest</h2>
                    <Form>
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter your Whatsapp number" />
                        <span className="input-group-btn">
                          <button
                            className="btn btn-theme"
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault();
                              alert('Thanks for Participating!😄');
                            }}>
                            Submit
                          </button>
                        </span>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <div className='about text-white pb-3' id='about'>
            <h1 className=' text-center'>Terms & Condition</h1>
            <div className='aboutIns'>
              <p>•&nbsp;&nbsp;Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <p>•&nbsp;&nbsp;Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <p>•&nbsp;&nbsp;Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <p>•&nbsp;&nbsp;Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <p>•&nbsp;&nbsp;Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <p>•&nbsp;&nbsp;Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <p>•&nbsp;&nbsp;Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </Parallax>
      </ParallaxProvider>

      <div className='footer text-center'>
        {/* <p className='mx-2'>Copyright © 2022 <span>Raahgiri Foundation</span>. All Rights Reserved</p> */}
        <p className='py-2'>In Partnership with <span>Fusion</span> (a unit of IAMPIX TECHNOLOGY PVT LTD).</p>
      </div>
    </>
  );
}

export default App;
