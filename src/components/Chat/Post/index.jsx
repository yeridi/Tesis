import { useState, useEffect } from 'react'
import './post.scss';
import Avatar from '@material-ui/core/Avatar'
import db from '../../../firebase';
import { TextField, Button } from '@material-ui/core';
import firebase from 'firebase';

const Post = ({ username, caption, imageUrl, postId, user }) => {

    const [comments, setCommets] = useState([]);

    const [comment, setComment] = useState('');

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    setCommets(snapshot.docs.map((doc) => doc.data()))
                })
        }
        return () => {
            unsubscribe();
        };
    }, [postId]);

    const postComment = (e) => {
        e.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add({
            comment: comment,
            userName: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setComment('');
    }


    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt='nones'
                />
                <h3>{username}</h3>
            </div>
            <img className="post__image" src={imageUrl} alt="" />

            <h4 className="post__text"><strong>{username}</strong>: {caption}</h4>

            {

                comments.map((comment) => (
                    <p className="post__comments">
                        <b>{comment.userName}</b> {comment.comment}
                    </p>
                ))
            }

            <form className="post__commentContainer">
                <TextField
                    label="comenta algo ..."
                    className="post__inputComment"
                    fullWidth
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <Button
                    disabled={!comment}
                    onClick={postComment}
                >
                    Enviar
                </Button>
            </form>

        </div >
    )
}
export default Post