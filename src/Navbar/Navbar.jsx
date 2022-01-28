import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button'
import QuantbaseLogo from '../resources/quantbase_logo.svg'

export const Nav = () => {
    return ( <Navbar bg="light" fixed="top" >
            <Navbar.Brand>
            <img src={QuantbaseLogo} width="75%" alt="quantbase-logo"/>
        </Navbar.Brand>
        <Container>
          <Button variant="outline-warning" size="lg">
                Buy & Sell
            </Button>
        </Container>
    </Navbar>
    )

}
