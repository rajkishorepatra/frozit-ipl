import './App.css';
import { Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useRef } from 'react';

function App() {

  const [num, setNum] = useState('');
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzcPETc87OkAXgtSBFsJwTFhFqYh6I2zsQ6jQfEznmxuA_Wr1Nzg222cTWPdvvEO9Af/exec"
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for Participating!😄');
    fetch(scriptUrl, {
      method: 'POST',
      'mode': 'no-cors',
      body: new FormData(formRef.current),

    }).then(res => {
      console.log("SUCCESSFULLY SUBMITTED")
    })
      .catch(err => console.log(err));
    setNum('');
  }

  return (
    <>
      <div className='main' id='main'>
        <Carousel controls={false} indicators={false} fade>
          <Carousel.Item>
            <img
              className="d-block w-100 imgSize"
              src="https://ik.imagekit.io/0juyrwsxf/Frozit/Website-slide-1__1_-min.jpg?updatedAt=1680526029585"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgSize"
              src="https://ik.imagekit.io/0juyrwsxf/Frozit/Website-slide-2__1_-min.jpg?updatedAt=1680526030212"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgSize"
              src="https://ik.imagekit.io/0juyrwsxf/Frozit/Website-slide-3__1_-min.jpg?updatedAt=1680526030275"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div style={{ backgroundColor: "#0053a0" }}>
        <section className="home-newsletter" id="testimonials">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="single">
                  <h2>Participate in our Contest</h2>
                  <Form onSubmit={handleSubmit} method='post' ref={formRef} name="google-sheet">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your Whatsapp number"
                        name='Whatsapp-Number'
                        onChange={(e) => setNum(e.target.value)}
                        value={num}
                        required />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-theme"
                          onClick={(e) => {
                            if (e.target.value !== null) {
                              e.target.style.backgroundColor = "#00963f"
                            }
                          }
                          }
                          type="submit"
                        >
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

        <div className='about text-white pb-1' id='about'>
          <h1 className=' text-center text-uppercase'>How to play along ?</h1>
          <div className='aboutIns align-items-left'>
            <p>•&nbsp;&nbsp;Register with your phone number. </p>
            <p>•&nbsp;&nbsp;Receive notification from our end.</p>
            <p>•&nbsp;&nbsp;Play along and win everyday !</p>
          </div>
        </div>

        <div className='logoImg m-4'>
          <img src='https://ik.imagekit.io/0juyrwsxf/Frozit/logo-3-min.png?updatedAt=1680526028607' alt='logo' width={70} />
          <img src='https://ik.imagekit.io/0juyrwsxf/Frozit/logo-2-min.png?updatedAt=1680526028647' alt='logo' width={70} />
        </div>

        <div className='footer text-center'>
          <p className='py-2'>In Partnership with <span>Fusion</span> (a unit of IAMPIX TECHNOLOGY PVT LTD).</p>
        </div>

      </div>
    </>
  );
}

export default App;
