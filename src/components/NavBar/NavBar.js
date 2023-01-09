import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Form from "../Form/Form";
import ProfileList from "../ProfileList/ProfileList";
import Home from "../Home/Home";
const NavBar = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ width: "100%" }}>
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            Athlete Profile App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/form"}>
                Form
              </Nav.Link>
              <Nav.Link as={Link} to={"/profile-list"}>
                Profile List
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/form" element={<Form />}></Route>
        <Route exact path="/profile-list" element={<ProfileList />}></Route>
      </Routes>
    </Router>
  );
};

export default NavBar;
