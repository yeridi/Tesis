import { useState } from 'react';
import {
    TextField,
    Grid,
    FormControlLabel,
    Checkbox,
    TextareaAutosize,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './stylesRegister.scss';

import { creatingProduct } from '../../../services/products';

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
    },
    warranty: {
        display: 'block',
        marginRight: '2rem'
    }
}));

const RegisterProduct = () => {
    const classes = useStyles();

    const [fields, setFields] = useState([])

    const [data, setData] = useState({
        name: '',
        brand: '',
        price: '',
        capacity: '',
        model: '',
        type: '',
        energyConsume: '',
        install: '',
        warrancy: '',
        stock: ''
    })

    const handleInputChanges = (e) => {
        const { name, type, checked, value } = e.target;
        const val = type === 'checkbox' ? checked : value;

        setData({
            ...data,
            [name]: val
        })
        console.log(data)
    }

    const handleInputChange = (e) => {
        console.log(e.target.files)
        setFields(e.target.files)
    }

    const sendInformation = async (e) => {

        e.preventDefault();

        const formData = new FormData();
        formData.append('image1', fields[0]);
        formData.append('image2', fields[1]);
        formData.append('image3', fields[2]);
        formData.append('name', data.name);
        formData.append('brand', data.brand);
        formData.append('price', data.price);
        formData.append('capacity', data.capacity);
        formData.append('model', data.model);
        formData.append('type', data.type);
        formData.append('energyConsume', data.energyConsume);
        formData.append('install', data.install);
        formData.append('warrancy', data.warrancy);
        formData.append('stock', data.stock);

        formData.append('enterpriseId', window.localStorage.getItem('idEnterprice'));

        const response = await fetch('https://termoconfort-test1.herokuapp.com/api/v1/product/store', {
            method: 'post',
            body: formData
        });

        /* const response = await creatingProduct(formData) */
        console.log(await response.json())
    }

    return (
        <div className="everyting">
            <div className={classes.containerForm}>
                <form encType="multipart/form-data" onSubmit={sendInformation}>
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
                                        value={data.name}
                                        className={classes.input}
                                        onChange={handleInputChanges}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Precio del producto"
                                        variant="outlined"
                                        price="price"
                                        value={data.price}
                                        className={classes.input}
                                        onChange={handleInputChanges}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Marca del producto"
                                        variant="outlined"
                                        name="brand"
                                        value={data.brand}
                                        className={classes.input}
                                        onChange={handleInputChanges}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Capacidad"
                                        variant="outlined"
                                        name="capacity"
                                        value={data.capacity}
                                        className={classes.input}
                                        onChange={handleInputChanges}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Modelo"
                                        variant="outlined"
                                        name="model"
                                        value={data.model}
                                        className={classes.input}
                                        onChange={handleInputChanges}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Tipo"
                                        variant="outlined"
                                        name="type"
                                        value={data.type}
                                        className={classes.input}
                                        onChange={handleInputChanges}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Consumo de energia"
                                        variant="outlined"
                                        name="energyConsume"
                                        value={data.energyConsume}
                                        className={classes.input}
                                        onChange={handleInputChanges}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Cantidad de unidades"
                                        variant="outlined"
                                        name="stock"
                                        value={data.stock}
                                        className={classes.input}
                                        type="number"
                                        onChange={handleInputChanges}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextareaAutosize
                                        className={classes.stylearea}
                                        aria-label="maximum height"
                                        placeholder="Descripcion del producto"
                                        defaultValue="Mi producto ..."
                                        name="description"
                                        value={data.description}
                                        onChange={handleInputChanges}
                                    />
                                </Grid>

                                <FormControlLabel
                                    name="warranty"
                                    className={classes.warranty}
                                    control={
                                        <Checkbox
                                            name="warranty"
                                            onChange={handleInputChanges}
                                            color="primary"
                                        />
                                    }
                                    label="Garantia"
                                />
                                <Grid item xs={12}>
                                    <h5>Seleccione 3 imagenes</h5>
                                    <input
                                        type="file"
                                        name="images"
                                        multiple
                                        id="fields"
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                            </Grid>

                            <button className="sendButton" onClick={sendInformation} type="submit">Publicar Producto</button>

                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )
}
export default RegisterProduct