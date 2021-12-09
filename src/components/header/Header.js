import React from 'react'
/* styles */
import './header.scss'
import Avatar from '@material-ui/core/Avatar'
/* router */
import { Link, useHistory } from 'react-router-dom'
/* firebase */
import { auth } from '../../firebase'
/* redux */
import { useSelector, useDispatch } from 'react-redux'
import { selectUserPhoto, setSignOutState, selectUserType } from '../../features/user/userSlice'


const Header = () => {

    const history = new useHistory();
    const dispatch = new useDispatch();

    const user = useSelector(selectUserPhoto);
    const type = useSelector(selectUserType);

    const handleAuth = () => {
        if (user) {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                history.push('/');
            }).catch(err => {
                alert(err.message)
            })
        }

        window.localStorage.removeItem('id');
        window.localStorage.removeItem('idEnterprice')
    }

    return (
        <>
            <nav>
                <div className="wrapper">
                    <div className="logo"><Link to="/">Go | Application</Link></div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />

                    <ul className="nav-links">
                        <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Productos</Link></li>
                        {/* <li>
                            <a href="#" className="desktop-item">Dropdown Menu</a>
                            <input type="checkbox" id="showDrop" />
                            <label for="showDrop" className="mobile-item">Dropdown Menu</label>
                            <ul className="drop-menu">
                                <li><a href="#">Drop menu 1</a></li>
                                <li><a href="#">Drop menu 2</a></li>
                                <li><a href="#">Drop menu 3</a></li>
                                <li><a href="#">Drop menu 4</a></li>
                            </ul>
                        </li> */}
                        <li><Link to="/business">Empresas</Link></li>
                        <li><Link to="/application">Movil</Link></li>
                        {
                            !user ? (
                                <>
                                    <li><Link to="/login" className="login__button">Login</Link></li>
                                    <li><Link to="/registrarse" className="login__button">Registrarse</Link></li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <a href="#" className="desktop-item">Opciones</a>
                                        <input type="checkbox" id="showMega" />
                                        <label for="showMega" className="mobile-item">Optiones</label>
                                        <div className="mega-box">
                                            <div className="content">
                                                <div className="row">
                                                    <img src="img.jpg" alt="" />
                                                </div>
                                                <div className="row">
                                                    <header>Productos</header>
                                                    <ul className="mega-links">
                                                        <li><a href="#">Mis productos</a></li>
                                                        <li><a href="/producto/nuevo">Subir producto</a></li>
                                                        <li><a href="#">Business cards</a></li>
                                                        <li><a href="#">Custom logo</a></li>
                                                    </ul>
                                                </div>

                                                <div className="row">
                                                    <header>Empresa</header>
                                                    <ul className="mega-links">
                                                        <li><a href="/datos/empresa">Crear empresa</a></li>
                                                        <li><a href="#">Mis productos</a></li>
                                                    </ul>
                                                </div>

                                                <div className="row">
                                                    <header>Comunidad</header>
                                                    <ul className="mega-links">
                                                        <li><a href="/chat">Chat</a></li>
                                                        <li><a href="/posts">Post</a></li>
                                                        <li><a href="/mis/posts">Mis Posts</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <Avatar src={user} className="user__header" onClick={handleAuth} />
                                </>
                            )
                        }
                    </ul>
                    <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
                </div>
            </nav>
        </>
    )
}
export default Header;