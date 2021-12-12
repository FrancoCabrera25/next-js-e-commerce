import React, {useState} from 'react';
import {Container, Menu, Grid, Icon, Label, GridColumn} from 'semantic-ui-react';
import  Link from 'next/link';
import BasicModal from "../../Modal/BasicModal";

const MenuWeb = () =>  {
    const [showModal, setShowModal] = useState(false);

    const onShowModal = () => {
        setShowModal(true);
    }

        return (
            <div className="menu">
                <Container>
                     <Grid>
                         <Grid.Column className="menu__left"  width={6}>
                         <MenuPlatforms/>
                         </Grid.Column>
                         <Grid.Column className="menu__right" width={10}>
                            <MenuOptions onShowModal={onShowModal} />
                         </Grid.Column>
                     </Grid>
                </Container>
                <BasicModal
                show={showModal}
                setShow={setShowModal}
                title="Crea tu cuenta"
                size="small"
                >
                esto es el modal basico
                </BasicModal>

            </div>
        );
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

function  MenuOptions({onShowModal}) {
    return (
        <Menu>
            <Menu.Item onClick={onShowModal}>
                <Icon name="user outline" />
                Mi cuenta
            </Menu.Item>
        </Menu>

    )
}
