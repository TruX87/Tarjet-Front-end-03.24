import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NavigationBar() {
  const { t, i18n } = useTranslation();
    
  const changeLangEt = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("lang", "et");
  }

  const changeLangEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("lang", "en");
  }

  const changeLangGr = () => {
    i18n.changeLanguage("gr");
    localStorage.setItem("lang", "gr");
  }

  const changeLangFi = () => {
    i18n.changeLanguage("fi");
    localStorage.setItem("lang", "fi");
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">WebShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t('nav.admin')}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t('nav.contact')}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t('nav.shops')}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t('nav.cart')}</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">{t('nav.login')}</Nav.Link>
            <Nav.Link as={Link} to="/signup">{t('nav.signup')}</Nav.Link>
            <img className='lang' onClick={changeLangEn} src="/english.png" alt="Language" />
            <img className='lang' onClick={changeLangEt} src="/estonian.png" alt="Language" />
            <img className='lang' onClick={changeLangGr} src="/german.png" alt="Language" />
            <img className='lang' onClick={changeLangFi} src="/finnish.png" alt="Language" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;