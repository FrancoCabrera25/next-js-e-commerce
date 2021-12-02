import React from 'react';
import  { Container } from 'semantic-ui-react';

const Layout = (props) => {
    const { children } = props;
    return (
        <Container fuild className="layout">
            <Container className="content">
                <h1>Layouts</h1>
                {children}
            </Container>
        </Container>
    );
};

export default Layout;
