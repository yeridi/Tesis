import { useState } from 'react';
import {
    TextField,
    Grid,
    TextareaAutosize,
    Select,
    FormControl,
    MenuItem,
    InputLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './stylesRegister.scss';

const useStyles = makeStyles((theme) => ({
    containerForm: {
        width: '80%',
        margin: '8rem auto 10px !important',
    },
    stylearea: {
        width: '100%',
        padding: '15px',
        height: 'calc(10vh + 5rem) !important',
        border: 'solid 1px #c5c5c5'
    },
    subtitle: {
        marginBottom: '1rem'
    },
    infoExtra: {
        color: '#5d60ff',
        marginBottom: '20px'
    }
}));

const RegisterProduct = () => {
    const classes = useStyles();

    const [fields, setFields] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        facebook: '',
        phone_number: '',
        direction: '',
        email: '',
        instagram: ''
    })


    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFields({
            ...fields,
            [name]: value
        })
    }

    const sendInformation = () => {
        console.log(fields)
    }

    return (
        <div className="everyting">
            <div className={classes.containerForm}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item sm={6} xs={12}>
                        <h2 className={classes.subtitle}>Informacion del producto</h2>
                        <Grid container spacing={3}>
                            <Grid item sm={6} xs={12}>
                                <TextField
                                    fullWidth
                                    label="Nombre del producto"
                                    variant="outlined"
                                    name="name"
                                    value={fields.name}
                                    className={classes.input}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField
                                    fullWidth
                                    label="Precio del producto"
                                    variant="outlined"
                                    name="price"
                                    value={fields.price}
                                    className={classes.input}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    className={classes.stylearea}
                                    aria-label="maximum height"
                                    placeholder="Descripcion del producto"
                                    defaultValue="Mi producto ..."
                                    name="description"
                                    value={fields.description}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                    <InputLabel id="demo-simple-select-outlined-label">Categoria</InputLabel>
                                    <Select
                                        name="category"
                                        value={fields.category}
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        label="Categoria"
                                        onChange={handleInputChange}
                                    >
                                        <MenuItem value="">
                                            <em>Categoria</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <input type="file" />
                            </Grid>
                            <Grid item xs={12}>
                                <input type="file" />
                            </Grid>
                            <Grid item xs={12}>
                                <input type="file" />
                            </Grid>

                        </Grid>

                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <h2>Informacion de Contacto</h2>
                        <h5 className={classes.infoExtra}>(Esta informacion no es necesaria *)</h5>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Link de facebook"
                                    variant="outlined"
                                    name="facebook"
                                    value={fields.facebook}
                                    className={classes.input}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Numero de celular"
                                    variant="outlined"
                                    name="phone_number"
                                    value={fields.phone_number}
                                    className={classes.input}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Dirección"
                                    variant="outlined"
                                    name="direction"
                                    value={fields.direction}
                                    className={classes.input}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    name="email"
                                    className={classes.input}
                                    value={fields.email}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Instagram"
                                    variant="outlined"
                                    name="instagram"
                                    className={classes.input}
                                    value={fields.instagram}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <button className="sendButton" onClick={sendInformation}>Publicar Producto</button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default RegisterProduct