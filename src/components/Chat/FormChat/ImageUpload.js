import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './imageUpload.scss'
import { storage } from '../../../firebase';
import db from '../../../firebase';
import firebase from 'firebase';

import { useSelector } from 'react-redux'
import { selectUserPhoto, selectUserName } from '../../../features/user/userSlice'

const ImageUpload = () => {

    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert('algo salio mal, vuelve a intentarlo')
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: userName
                        });

                        setProgress(0);
                        setCaption('');
                        setImage(null)
                    })
            }
        )
    }

    return (
        <div className="form__chatForm">
            <div className="form__chatForm__inputs">
                <progress value={progress} max="100" className="from__progress" />
                <TextField
                    label="Escribe algo ..."
                    fullWidth
                    value={caption}
                    onChange={e => setCaption(e.target.value)}
                />
                <input type="file" onChange={handleChange} />
            </div>
            <Button color="pimary" onClick={handleUpload}>Enviar</Button>
        </div>
    )
}
export default ImageUpload