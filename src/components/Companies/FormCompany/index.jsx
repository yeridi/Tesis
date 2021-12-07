import { useState } from 'react'
import { Container, TextField, Grid, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

    const [fields, setFields] = useState({
        name: '',
        facebook: '',
        linkedin: '',
        instagram: '',
        whatssap: '',
        description: '',
    })

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFields({
            ...fields,
            [name]: value
        })
    }

    const handleSubmit = () => {
        console.log(fields)
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
                            name="facebook"
                            value={fields.facebook}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            label="Link de linkedin"
                            variant="outlined"
                            fullWidth
                            value={fields.linkedin}
                            name="linkedin"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            label="Link de Instagram"
                            variant="outlined"
                            fullWidth
                            value={fields.instagram}
                            onChange={handleInputChange}
                            name="instagram"
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            label="Numero de whatssap"
                            variant="outlined"
                            fullWidth
                            name="whatssap"
                            value={fields.whatssap}
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
                        <input type="file" />
                    </Grid>
                    <button className="sendButton" onClick={handleSubmit}>Crear mi empresa</button>
                </Grid>
            </Grid>
        </Container>
    )
}
export default FormCompany