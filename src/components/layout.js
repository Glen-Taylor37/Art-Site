import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './header';
import Navbar from './navbar';
import Footer from './footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = ({ children }) => {
	return (
		<Container fluid className="px-0 main">
			<Row>
				<Col>
					<Header />
				</Col>
			</Row>

			<Row>
				<Col>
					<Navbar />
				</Col>
			</Row>
			<Row>
				<Col>{children}</Col>
			</Row>
			<Footer />
		</Container>
	);
};

export default Layout;
