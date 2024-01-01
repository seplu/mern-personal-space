import { useAppContext } from "../context/appContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  const { menuData } = useAppContext();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">Personal Space</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse />
        <Navbar.Collapse id="navbar-nav" style={{ justifyContent: "flex-end" }}>
          <Nav className="align-self-end" variant="underline">
            {menuData.map((item) => {
              const { index, title, url } = item;
              return (
                <Nav.Link eventKey={index} href={url} key={index}>
                  {title}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
