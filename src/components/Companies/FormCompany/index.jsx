import { useState } from 'react'
import { Container, TextField, Grid, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { creatingCompany } from '../../../services/companies';
import { useSelector } from 'react-redux'
import { selectGoogleId } from '../../../features/user/userSlice';


const useStyles = makeStyles((theme) => ({
    containerForm: {
        margin: '8rem auto 10px !important',
    },
    title: {
        marginBottom: "2rem"
    },
    stylearea: {
        width: '100%',
        padding: '15px',
        height: 'calc(10vh + 5rem) !important',
        border: 'solid 1px #c5c5c5'
    },
}));


const FormCompany = () => {

    const classes = useStyles();
    const userId = localStorage.getItem('id')

    const [fields, setFields] = useState({
        userId: userId,
        name: '',
        description: '',
        image: '',
        link: '',
        workers: '',
        social: [
            'https:/facebook.com',
            'https:/twitter.com',
            'https:/youtube.com'
        ]
    })

    //const [social, setSocial] = useState([])


    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFields({
            ...fields,
            [name]: value,
        })
    }

    const handleSubmit = async () => {
        const response = await creatingCompany(fields);
        console.log(response)
        window.localStorage.setItem('idEnterprice', response._id)
        //history.push('/')
    }

    return (
        <Container maxWidth="lg" className={classes.containerForm}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
            >
                <Grid item xs={12}>
                    <h3 className={classes.title}>Ingrese Informacion de su empresa</h3>
                    <TextField
                        label="Nombre de la empresa"
                        variant="outlined"
                        fullWidth
                        value={fields.name}
                        name="name"
                        onChange={handleInputChange}
                    />
                </Grid>
                <h3 className={classes.title}>Redes sociales</h3>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item sm={6} xs={12}>
                        <TextField
                            label="Link de facebook"
                            variant="outlined"
                            fullWidth
                            name="social"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            label="Link de linkedin"
                            variant="outlined"
                            fullWidth
                            name="social"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            label="Link de Instagram"
                            variant="outlined"
                            fullWidth
                            onChange={handleInputChange}
                            name="social"
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            label="Cantidad de trabajadores"
                            type="number"
                            variant="outlined"
                            fullWidth
                            name="workers"
                            value={fields.workers}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Link de la empresa (su pagina web)"
                            variant="outlined"
                            fullWidth
                            name="link"
                            value={fields.link}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextareaAutosize
                            className={classes.stylearea}
                            aria-label="maximum height"
                            placeholder="Descripcion del producto"
                            defaultValue="Descripcion de la empresa"
                            name="description"
                            value={fields.description}
                            name="description"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <h3 className={classes.title}>Seleccione imagen de la empresa</h3>
                        <input
                            type="file"
                            name="image"
                            value={fields.image}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <button className="sendButton" onClick={handleSubmit}>Crear mi empresa</button>
                </Grid>
            </Grid>
        </Container>
    )
}
export default FormCompany