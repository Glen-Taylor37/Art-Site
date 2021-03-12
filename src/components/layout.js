import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
	return (
		<Container>
			<Header />
			{children}
			<Footer />
		</Container>
	);
};

export default Layout;
