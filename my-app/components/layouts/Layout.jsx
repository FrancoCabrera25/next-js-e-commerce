import React from 'react';
import  { Container } from 'semantic-ui-react';
import classNames from 'classnames';
import  Header from '../Header';


// className="layout"

const Layout = (props) => {
    const { children, className } = props;
    return (
        <Container fluid  className={classNames("layout",{
            [className]: className
        })}>
            <Header/>
            <Container className="content">
                <h1>Layouts</h1>
                {children}
            </Container>
        </Container>
    );
};

export default Layout;
