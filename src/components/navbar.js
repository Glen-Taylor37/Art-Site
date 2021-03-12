import React from 'react';
import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Nav, NavbarBrand } from 'react-bootstrap';

const CustomNavbar = () => {
	return (
		<Navbar sticky="top" variant="dark" bg="dark">
			<Container>
				<NavbarBrand>
					<h1>Glen Taylor</h1>
					<h6>Programmer, Artist</h6>
				</NavbarBrand>
				<Nav className="mr-auto">
					<Nav.Item>
						<Link to="/">
							<Nav.Link as="span" eventKey="home">
								<Navbar.Text>Home</Navbar.Text>
							</Nav.Link>
						</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/art">
							<Nav.Link as="span" eventKey="art">
								<Navbar.Text>Art</Navbar.Text>
							</Nav.Link>
						</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/projects">
							<Nav.Link as="span" eventKey="home">
								<Navbar.Text>Projects</Navbar.Text>
							</Nav.Link>
						</Link>
					</Nav.Item>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default CustomNavbar;
