import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';


const MyNavbar = () => {
  const [textColor, setTextColor] = useState('white');
  const [backgroundColor, setBackgroundColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('header');
      if (heroElement) {
        // Consider the navbar height as well, though fixed navbars are tricky with offsetTop
        // For simplicity, let's say if the top of the viewport is past the hero's visible part.
        // Hero's effective height is its offsetHeight minus its paddingTop (for the navbar itself).
        const heroBottom = heroElement.offsetTop + heroElement.offsetHeight - (heroElement.style.paddingTop ? parseInt(heroElement.style.paddingTop) : 0);
        if (window.scrollY > heroBottom) {
          setTextColor('black');
          setBackgroundColor('white');
        } else {
          setTextColor('white');
          setBackgroundColor('transparent');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Navbar fixed="top" expand="lg" id="navbar" style={{ backgroundColor: backgroundColor }}>
      <Container className="mx-4">
        <Navbar.Brand>
          <Nav.Link 
            id='title' 
            as={Link} 
            to="header" 
            smooth={true} 
            duration={300} 
            style={{cursor: 'pointer', color: textColor, fontSize: '2.5rem', fontWeight: 'bold' }}
          >
            Chameleon Dataset
          </Nav.Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
