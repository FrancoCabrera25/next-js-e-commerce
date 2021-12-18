import React, {useState, useEffect} from 'react';
import {Container, Menu, Grid, Icon, Label, GridColumn} from 'semantic-ui-react';
import Link from 'next/link';
import BasicModal from "../../Modal/BasicModal";
import Auth from "../../Auth";
import useAuth from "../../../hooks/useAuth";
import {getMeApi} from '../../../api/user';

const MenuWeb = () => {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("Iniciar Sesiòn");
    const [user, setUser] = useState(undefined);
    const {logout, auth} = useAuth();

    useEffect(() => {
        (async () => {
            const response = await getMeApi(logout);
            setUser(response);
        })()
    }, [auth]);

    const onShowModal = () => {
        setShowModal(true);
    }

    const onCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu__left" width={6}>
                        <MenuPlatforms/>
                    </Grid.Column>
                    <Grid.Column className="menu__right" width={10}>
                        {user !== undefined && (
                            <MenuOptions onShowModal={onShowModal} user={user} logout={logout}/>
                        )}
                    </Grid.Column>
                </Grid>
            </Container>
            <BasicModal
                show={showModal}
                setShow={setShowModal}
                title={titleModal}
                size="small"
            >
                <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal}/>
            </BasicModal>

        </div>
    );
}

export default MenuWeb;


function MenuPlatforms() {
    return (
        <Menu>
            <Link href="/play-station">
                <Menu.Item as="a">
                    PlayStation
                </Menu.Item>
            </Link>
            <Link href="/Xbox">
                <Menu.Item as="a">
                    Xbox
                </Menu.Item>
            </Link>
            <Link href="/pc">
                <Menu.Item as="a">
                    PC
                </Menu.Item>
            </Link>
        </Menu>
    )
}

function MenuOptions({onShowModal, user, logout}) {
    return (
        <Menu>
            {user ? (
                <>
                    <Link href="/orders" >
                        <Menu.Item as="a">
                            <Icon name="game"/>
                            Mis pedidos
                        </Menu.Item>
                    </Link>
                    <Link href="/wishlist" >
                        <Menu.Item as="a">
                            <Icon name="heart outline"/>
                            Favoritos
                        </Menu.Item>
                    </Link>
                    <Link href="/account" >
                        <Menu.Item as="a">
                            <Icon name="user outline"/>
                            {user.username}
                        </Menu.Item>
                    </Link>
                    <Link href="/cart" >
                        <Menu.Item as="a" className="m-0">
                            <Icon name="cart"/>
                        </Menu.Item>
                    </Link>
                    <Menu.Item onClick={logout} className="m-0">
                        <Icon name="power off"/>
                    </Menu.Item>
                </>

            ) : (
                <Menu.Item onClick={onShowModal}>
                    <Icon name="user outline"/>
                    Mi cuenta
                </Menu.Item>
            )}

        </Menu>

    )
}
