import { Container, Navbar, Form, Button,Nav } from "react-bootstrap";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
export default function NavHead(props) {  
    return (
    <>
      <Navbar  bg={`${props.mode}`} variant={`${props.mode}`}>
        <Container fluid>
          <Navbar.Brand ><Link to ="/" style={{color:`${props.textclr}`,textDecoration:"none"}}>{props.title}</Link></Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}navbarScroll>
              <Link to="/about" style={{color:`${props.textclr}`,textDecoration:"none"}}>About</Link>
            </Nav>
            <Form className="d-flex">
             
              <Button variant="info" onClick={props.toggleMode}>{props.btn}</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

NavHead.propTypes={title:PropTypes.string}