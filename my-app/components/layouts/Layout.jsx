import React from 'react';
import  { Container } from 'semantic-ui-react';
import  Header from '../Header';

const Layout = (props) => {
    const { children } = props;
    return (
        <Container fluid className="layout">
            <Header/>
            <Container className="content">
                <h1>Layouts</h1>
                {children}
            </Container>
        </Container>
    );
};

export default Layout;
