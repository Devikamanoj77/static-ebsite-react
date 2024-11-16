import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import menImage1 from "./assets/men-01.jpg";
import menImage2 from "./assets/men-02.jpg";
import menImage3 from "./assets/men-03.jpg";
import womenImage1 from "./assets/women-01.jpg";
import womenImage2 from "./assets/women-02.jpg";
import womenImage3 from "./assets/women-03.jpg";
import kidImage1 from "./assets/kid-01.jpg";
import kidImage2 from "./assets/kid-02.jpg";
import kidImage3 from "./assets/kid-03.jpg";
import exoloreImage1 from "./assets/explore-image-01.jpg";
import exoloreImage2 from "./assets/explore-image-02.jpg";
import socialMediaImage2 from "./assets/instagram-02.jpg"
import socialMediaImage1 from "./assets/instagram-01.jpg"
import socialMediaImage3 from "./assets/instagram-03.jpg"
import socialMediaImage4 from "./assets/instagram-04.jpg"
import socialMediaImage5 from "./assets/instagram-05.jpg"
import socialMediaImage6 from "./assets/instagram-06.jpg"
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar
        expand="lg"
        fixed="top"
        className="navbar bg-body-tertiary fw-bold"
      >
        <Container>
          <Navbar.Brand href="#home">HEXA SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "500px" }}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link className="ms-4" href="#link">
                Men's
              </Nav.Link>
              <Nav.Link className="ms-4" href="#link">
                Women's
              </Nav.Link>
              <Nav.Link className="ms-4" href="#link">
                Kid's
              </Nav.Link>
              <NavDropdown
                className="ms-4"
                title="Pages"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown
                className="ms-4"
                title="Features"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Pages</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="ms-4" href="#link">
                Explore
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Body */}
      <div className="row mt-5">
        <div className="boxleft col-lg-6 d-flex flex-column">
          <h1 className="fw-bolder">WE ARE HEXA SHOP</h1>
          <div>
            <h4>Awesome, clean & Elegant</h4>
          </div>
          <Button className="text-light" variant="outline-secondary">
            PURCHASE NOW!!!
          </Button>
        </div>
        <div className="grid-container col-lg-6">
          <div className="boxright boxright1">
            <h4 className="fw-bolder">Women's Clothes</h4>
            <div>
              <h5>Best Clothes for Women</h5>
            </div>
          </div>
          <div className="boxright boxright2">
            <h4 className="fw-bolder">Men's Clothes</h4>
            <div>
              <h5 className="head">Stylish Outfits for Men</h5>
            </div>
          </div>
          <div className="boxright boxright3">
            <h4 className="fw-bolder">Kid's Clothes</h4>
            <div>
              <h5>Cute & Comfy for Kids</h5>
            </div>
          </div>
          <div className="boxright boxright4">
            <h4 className="fw-bolder">Accessories</h4>
            <div>
              <h5>Trendy Add-Ons</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Men's Latest */}
      <div style={{ marginTop: "100px" }} className="ms-5">
        <h2>Men's Latest</h2>
        <h6 className="text-secondary">
          Details to Details is what make hexashop different from other shops
        </h6>

        <div className="d-flex ms-3 mt-5">
          <div className="image-container ms-5">
            <div className="img-wrapper">
              <img src={menImage1} alt="" className="men-image" />
              <div className="overlay">
                <div className="overlay-box">Details</div>
                <div className="overlay-box">Price</div>
                <div className="overlay-box">Buy Now</div>
              </div>
            </div>
            <h4 className="mt-3  d-inline ">Classic Spring</h4>
            <div className="stars d-inline ms-5">
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
            </div>
            <h4 style={{ color: "grey" }}>$120.00</h4>
          </div>
          <div className="image-container ms-5">
            <div className="img-wrapper">
              <img src={menImage2} alt="" className="men-image" />
              <div className="overlay">
                <div className="overlay-box">Details</div>
                <div className="overlay-box">Price</div>
                <div className="overlay-box">Buy Now</div>
              </div>
            </div>
            <h4 className="mt-3  d-inline ">AirForce 1X</h4>
            <div className="stars d-inline ms-5">
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
            </div>
            <h4 style={{ color: "grey" }}>$90.00</h4>
          </div>
          <div className="image-container ms-5">
            <div className="img-wrapper">
              <img src={menImage3} alt="" className="men-image" />
              <div className="overlay">
                <div className="overlay-box">Details</div>
                <div className="overlay-box">Price</div>
                <div className="overlay-box">Buy Now</div>
              </div>
            </div>
            <h4 className="mt-3  d-inline ">Love Nana'20</h4>
            <div className="stars d-inline ms-5">
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
            </div>
            <h4 style={{ color: "grey" }}>$150.00</h4>
          </div>
        </div>
      </div>

      {/* Women's Latest */}
      <div style={{ marginTop: "100px" }} className="ms-5">
        <h2>Women's Latest</h2>
        <h6 className="text-secondary">
          Details to Details is what make hexashop different from other shops
        </h6>

        <div className="d-flex ms-3 mt-5">
          <div className="image-container ms-5">
            <div className="img-wrapper">
              <img src={womenImage1} alt="" className="men-image" />
              <div className="overlay">
                <div className="overlay-box">Details</div>
                <div className="overlay-box">Price</div>
                <div className="overlay-box">Buy Now</div>
              </div>
            </div>
            <h3 className="mt-3  d-inline ">New Green Jacket</h3>
            <div className="stars d-inline ms-5">
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
            </div>
            <h4 style={{ color: "grey" }}>$75.00</h4>
          </div>
          <div className="image-container ms-5">
            <div className="img-wrapper">
              <img src={womenImage2} alt="" className="men-image" />
              <div className="overlay">
                <div className="overlay-box">Details</div>
                <div className="overlay-box">Price</div>
                <div className="overlay-box">Buy Now</div>
              </div>
            </div>
            <h3 className="mt-3  d-inline ">Classic Dress</h3>
            <div className="stars d-inline ms-5">
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
            </div>
            <h4 style={{ color: "grey" }}>$45.00</h4>
          </div>
          <div className="image-container ms-5">
            <div className="img-wrapper">
              <img src={womenImage3} alt="" className="men-image" />
              <div className="overlay">
                <div className="overlay-box">Details</div>
                <div className="overlay-box">Price</div>
                <div className="overlay-box">Buy Now</div>
              </div>
            </div>
            <h3 className="mt-3  d-inline "> Spring Collection</h3>
            <div className="stars d-inline ms-5">
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
            </div>
            <h4 style={{ color: "grey" }}>$130.00</h4>
          </div>
        </div>
      </div>

      {/* Women's Latest */}
      <div style={{ marginTop: "100px" }} className="ms-5">
        <h2>Women's Latest</h2>
        <h6 className="text-secondary">
          Details to Details is what make hexashop different from other shops
        </h6>

        <div className="d-flex ms-3 mt-5">
          <div className="image-container ms-5">
            <div className="img-wrapper">
              <img src={kidImage1} alt="" className="men-image" />
              <div className="overlay">
                <div className="overlay-box">Details</div>
                <div className="overlay-box">Price</div>
                <div className="overlay-box">Buy Now</div>
              </div>
            </div>
            <h3 className="mt-3  d-inline ">School Collection</h3>
            <div className="stars d-inline ms-5">
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
              <i className="fa-solid fa-star text-dark"></i>
            </div>
            <h4 style={{ color: "grey" }}>$280.00</h4>
          </div>
          <div className="image-container ms-5">
            <div className="img-wrapper">
              <img src={kidImage2} alt="" className="men-image" />
              <div className="overlay">
                <div className="overlay-box">Details</div>
                <div className="overlay-box">Price</div>
                <div className="overlay-box">Buy Now</div>
              </div>
            </div>
            <h3 className="mt-3  d-inline ">Summer Caps</h3>
            <div className="stars d-inline ms-5">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h4 style={{ color: "grey" }}>$12.00</h4>
          </div>
          <div className="image-container ms-5">
            <div className="img-wrapper">
              <img src={kidImage3} alt="" className="men-image" />
              <div className="overlay">
                <div className="overlay-box">Details</div>
                <div className="overlay-box">Price</div>
                <div className="overlay-box">Buy Now</div>
              </div>
            </div>
            <h3 className="mt-3  d-inline ">Classic Kid</h3>
            <div className="stars d-inline ms-5">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h4 style={{ color: "grey" }}>$80.00</h4>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div className="container-fluid row mt-5">
        <div className="col-lg-6  mt-5">
          <h1 className="text-center"><b>Explore Our Products</b></h1>
          <p style={{ textAlign: "justify" }} className=" ms-5 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta
            quia, assumenda, adipisci molestias, molestiae facilis at id
            similique quisquam rem! Amet exercitationem grey nihil quibusdam
            veniam, nobis iusto architecto obcaecati.
          </p> <br /> <br />
          <p style={{ textAlign: "justify" }} className=" ms-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            aperiam officia molestiae nobis deleniti beatae! Sit doloremque
            ipsum pariatur sed natus dolorem qui accusamus et ratione tempore,
            magnam optio? Voluptas. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Qui, aperiam praesentium! Repellendus, natus
            officia alias dolores doloribus unde in porro, error a, repudiandae
            veniam blanditiis nobis maiores dolore incidunt! Repellendus.
          </p>
          <h5 style={{fontFamily:'"Edu AU VIC WA NT Pre",cursive',marginTop:'100px'}} ><b>Your most unhappy customers are your most important source of learning. <br /> <br />
         <span style={{marginLeft:'100px',fontFamily:'"Edu AU VIC WA NT Pre",cursive'}}> -Bill Gates, Microsoft Founder.</span></b></h5>

         <div>
          <button style={{marginTop:'100px',marginLeft:'300px'}} className=" discover btn border-dark p-3">Discover More</button>
         </div>
        </div>
        <div style={{marginTop:'100px'}} className="col-lg-6 ">
          <div className="container">
            {/* Row 1 */}
            <div
              className="row mb-3 bg-light"
              style={{ padding: "10px", borderRadius: "8px" }}
            >
              <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-center">Leather Bags</h2>
              </div>
              <div className="col-md-6">
                <img
                  src={exoloreImage1}
                  alt="Leather Bags"
                  className="img-fluid"
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div
              className="row bg-light"
              style={{ padding: "10px", borderRadius: "8px" }}
            >
              <div className="col-md-6">
                <img
                  src={exoloreImage2}
                  alt="Different Types"
                  className="img-fluid"
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-center">Different Types</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}

      <div style={{ marginTop: "100px" }} className="social-media">
          <h1 style={{ marginLeft: "100px" }}>Social Media</h1>
          <h6 style={{ marginLeft: "100px" }} className="text-secondary">
            Details to details is what makes Hexa Shop different from others.
          </h6>

          <div className="d-flex justify-content-center flex-wrap m-5">
            <img src={socialMediaImage1} alt="Image 1"   />
            <img src={socialMediaImage2} alt="Image 2"/>
            <img src={socialMediaImage3} alt="Image 3"/>
            <img src={socialMediaImage4} alt="Image 4" />
            <img src={socialMediaImage5} alt="Image 5" />
            <img src={socialMediaImage6} alt="Image 6" />
          
          </div>
      </div>



      <div className="row mt-5">
  <div className="col-lg-8">
    <h1 style={{ marginLeft: '250px', marginTop: '100px', fontSize: '40px', lineHeight: '1.5' }}>
      <b>By Subscribing to Our Newsletter You can get 30% Off</b>
    </h1>
    <h6 style={{ marginLeft: "250px", color: '#6c757d' }}>
      Details to details is what makes Hexa Shop different from others.
    </h6>
    <div style={{ marginLeft: "250px" }} className="d-flex align-items-center">
      <input
        className="m-3"
        type="text"
        placeholder="Enter your name"
        style={{ height: "40px", width: "300px", padding: '0 10px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
      <input
        className="m-3"
        type="email"
        placeholder="Enter your email"
        style={{ height: "40px", width: "300px", padding: '0 10px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
      <button
        style={{
          height: '40px',
          width: '50px',
          border: 'none',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <i style={{ fontSize: '20px' }} className="fa-brands fa-telegram"></i>
      </button>
    </div>
  </div>
  <div style={{ marginTop: '120px'}} className="row col-lg-4">
    {/* Add optional content here */}
        <div className="col-lg-6">
          <div>
          <h5>State Location</h5>
          <p className="text-secondary">16501 Collin Ave, <br />Sunny Islos Beach,
          FL 3310, United States</p>
          </div>
          <div>
            <h5>Phone:</h5>
            <p className="text-secondary">010-020-0340</p>
          </div>
          <div>
            <h5>Office Location</h5>
            <p className="text-secondary">North Miami Beach </p>
          </div>
          
        </div>
        <div className="col-lg-6">
        <div>
          <h5>Work Hours</h5>
          <p className="text-secondary">07:30am - 9:30pm <br />Daily</p>
          </div>
          <div>
            <h5>E-mail:</h5>
            <p className="text-secondary">infocompany@gmail.com</p>
          </div>
          <div>
            <h5>Social Media</h5>
            <p className="text-secondary">Facebook, Instagram <br />Whatsapp, Twitter</p>
          </div>
        </div>

  </div>
</div>


        {/* footer */}
        <div className="bg-dark">
        <div style={{marginTop:'100px'}} className="row ">
            <div className="col-lg-2"></div>
            <div className="col-lg-2">
              <h3 style={{marginTop:'80px'}} className="text-light">HEXASHOP</h3>
              <h6 className="text-secondary">ONLINE SHOPPING</h6>
              <br /><br />
              <h6 style={{fontSize:'13px'}} className="text-light">16501 Collin Ave, Sunny Islos Beach,<br />
              FL 3310, United States <br />
              <br />heaxashop@gmail.com <br /> <br />
              010-020-0340</h6>
            </div>
            <div className="col-lg-2 text-light">
              <h5 style={{marginTop:'80px'}} className="text-light">Shopping & Categories</h5> <br /> 
              <h6 className="mt-3">Men's Shopping</h6>  
              <h6 className="mt-3">Women's Shopping</h6> 
              <h6 className="mt-3">Kid's Shopping</h6>
            </div>
            <div className="col-lg-2 text-light">
            <h5 style={{marginTop:'80px'}} className="text-light">Useful Links</h5> <br /> 
              <h6 className="mt-3">Home page</h6>  
              <h6 className="mt-3">About Us</h6> 
              <h6 className="mt-3">Help</h6>
              <h6 className="mt-3">Contact Us</h6>
            </div>
            <div className="col-lg-2 text-light">
            <h5 style={{marginTop:'80px'}} className="text-light">Help & Informaation</h5> <br /> 
              <h6 className="mt-3">Help</h6>  
              <h6 className="mt-3">FAQs</h6> 
              <h6 className="mt-3">Shipping</h6>
              <h6 className="mt-3">Tracking ID</h6>
            </div>
            <div className="col-lg-2"></div>
        </div>

        <br />
        <hr />
        <br />
        <div className="text-light text-center">
          <h6>Copyright &copy; 2024 Hexashop Co,Ltd. All Rights Reserved</h6> 
          <div style={{fontSize:'25px'}} className="flex">
          <i class="fa-brands fa-facebook ms-3"></i>
          <i class="fa-brands fa-instagram ms-3"></i>
          <i class="fa-brands fa-whatsapp ms-3"></i>
          <i class="fa-brands fa-twitter ms-3"></i>
          </div>
        </div>
        </div>
        

    </>
  );
}

export default App;
