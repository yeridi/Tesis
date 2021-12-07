import { useEffect, useState } from 'react'
import Post from '../components/Chat/Post'
import db from '../firebase'
import Header from '../components/header/Header'
import ImageUpload from '../components/Chat/FormChat/ImageUpload'

import { useSelector } from 'react-redux'
import { selectUserName } from '../features/user/userSlice'

/* styles */
import './styles/chat.scss'

const Chat = () => {

    const [posts, setPosts] = useState([]);

    const user = useSelector(selectUserName)

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })));
        })
    }, [])


    return (
        <>
            <Header />
            <ImageUpload />
            <div className="chat">
                <div className="chat__body">
                    {posts.map(({ id, post }) => (
                        <Post
                            key={id}
                            postId={id}
                            imageUrl={post.imageUrl}
                            username={post.username}
                            caption={post.caption}
                            user={user}
                        />
                    ))}

                </div>
                <div className="chat__option">
                    <h3>¿Cómo lo puedo utilizar?</h3>
                    <h5>Reglas</h5>
                    <ul className="chat__rules">
                        <li>Solo realizar consultas serias</li>
                        <li>Respetar los comentarios de los demas</li>
                        <li>Realizar comentarios respetuosos</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Chat
