import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { ApplicationContext } from "../../Context/AppContext"
import {useContext} from 'react'
export const Mynav:React.FC<{}>=()=>{
  let{setLoginUserInfo,loginUserInfo}=useContext(ApplicationContext)
    return<>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Button color="error">{loginUserInfo}</Button>
          </Nav>
        </Container>
      </Navbar></>
}