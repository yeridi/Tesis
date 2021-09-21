import { useState } from 'react'

import user from '../../setting/images/user.svg'
import company from '../../setting/images/company.svg'

import './userType.scss'

import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLoginDetails, selectUserName, selectUserEmail, selectUserPhoto, selectUserType } from '../../features/user/userSlice'

const UserType = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);
    const type = useSelector(selectUserType);

    console.log(type)

    const roles = [
        {
            "name": "Usuario Normal",
            "type": "user",
            "image": user
        },
        {
            "name": "Empresa",
            "type": "company",
            "image": company
        }
    ]

    const [rol, setRol] = useState('Selecciona a un usuario');

    const selectRole = () => {
        dispatch(setUserLoginDetails({
            name: userName,
            email: userEmail,
            photo: userPhoto,
            type: rol
        }))
        history.push('/')
    }

    if (!userName) {
        return (
            <h1>Working</h1>
        )
    }
    if (userName) {
        return (
            <div className="user__all">
                <h2 className="title__user">Hola, antes de comenzar porfavor aloja el tipo de usuario que sera.</h2>
                <div className="container__user">
                    <div className="option__user">

                        {roles.map((i) => (
                            <div className="alone" key={i.name}>
                                <img src={i.image} alt="" />
                                <h4>{i.name}</h4>
                                <button className="user__selectButton" onClick={() => setRol(i.type)}>Mostrar Info</button>
                            </div>
                        ))}
                    </div>
                    <div className="select__user">
                        {rol == "user" ? (
                            <>
                                <h3>Soy un usuario?</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam aut hic nihil dolorum a vero quod minus accusantium esse!</p>
                                <img src={user} alt="" className="rol__image__detail" />
                            </>
                        ) : (
                            <>
                                <h3>Soy una empresa?</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam aut hic nihil dolorum a vero quod minus accusantium esse!</p>
                                <img src={company} alt="" className="rol__image__detail" />
                            </>
                        )}
                        {/* {rol == "user" && 'Dale mano'}
                            {rol == "company" && 'no le des Dale mano'} */}
                        <button onClick={selectRole} className="user__sendButton">Seleccionar</button>
                    </div>
                </div>
                <div />
            </div>
        )
    }
}

export default UserType