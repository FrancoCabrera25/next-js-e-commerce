import React, {Component} from 'react';
import {Container, Menu, Grid, Icon, Label, GridColumn} from 'semantic-ui-react';
import  Link from 'next/link';


class MenuWeb extends Component {
    render() {
        return (
            <div className="menu">
                <Container>
                     <Grid>
                         <Grid.Column className="menu__left"  width={6}>
                         <MenuPlatforms/>
                         </Grid.Column>
                         <Grid.Column className="menu__right" width={10}>
                            <MenuOptions/>
                         </Grid.Column>
                     </Grid>
                </Container>
            </div>
        );
    }
}

export default MenuWeb;


function  MenuPlatforms() {
        return(
            <Menu>
                <Link href="/play-station" >
                        <Menu.Item as="a">
                            PlayStation
                        </Menu.Item>
                </Link>
                <Link href="/Xbox" >
                    <Menu.Item as="a">
                        Xbox
                    </Menu.Item>
                </Link>
                <Link href="/pc" >
                    <Menu.Item as="a">
                        PC
                    </Menu.Item>
                </Link>
            </Menu>
        )
}

function  MenuOptions() {
    return (
        <Menu>
            <Menu.Item>
                <Icon name="user outline" />
                Mi cuenta
            </Menu.Item>
        </Menu>

    )
}
