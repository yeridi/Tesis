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
import error from '../../../images/error.svg'

import { creatingProduct } from '../../../services/products';

import Alert from '@material-ui/lab/Alert';

import { isEnterprise } from '../../../services/companies'
import { useEffect } from 'react';

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

    const idEnterprise = window.localStorage.getItem('idEnterprice');

    const id = window.localStorage.getItem('id')

    const [enterprise, setEnterprise] = useState()

    const [message, setMessage] = useState(null)

    const [data, setData] = useState({
        name: '',
        brand: '',
        price: '',
        capacity: '',
        model: '',
        type: '',
        energyConsume: '',
        install: false,
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
    }

    const handleInputChange = (e) => {
        setFields(e.target.files)
    }

    const sendInformation = async (e) => {

        e.preventDefault();

        const formData = new FormData();
        formData.append('images', fields[0]);
        formData.append('images', fields[1]);
        formData.append('images', fields[2]);
        formData.append('name', data.name);
        formData.append('brand', data.brand);
        formData.append('price', data.price);
        formData.append('capacity', data.capacity);
        formData.append('description', data.description);
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
        const information = await response.json();
        console.log(information)
        if (information.ok == true) {
            setMessage(true)
            setData('')
        }
    }

    const loadEnterprise = async () => {
        const response = await isEnterprise(id)
        setEnterprise(response.data.hasEnterprise)
    }

    useEffect(() => {
        loadEnterprise()
    }, [])
    if (enterprise == false) {
        return (
            <>
                <div className="container__denied">
                    <h2>Upssss..., esta opción solo esta habilitada para las empresas</h2>
                    <img src={error} alt="" />
                    <h4>Si quieres ingresar un producto registra tu empresa</h4>
                    <a href="/datos/empresa">Registrar Mi Empresa</a>
                </div>
            </>
        )
    }

    return (


        <div className="everyting">
            <div className={classes.containerForm}>
                {
                    message &&
                    <Alert severity="success" color="info" onClose={() => setMessage(null)} className="success">
                        Tu producto ha sido ingresado <a href="/product">Ver productos</a>
                    </Alert>

                }
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
                                        name="price"
                                        value={data.price}
                                        className={classes.input}
                                        onChange={handleInputChanges}
                                        type="number"
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
                                        required
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