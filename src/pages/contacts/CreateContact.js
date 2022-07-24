import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import

import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import axios from '../../../node_modules/axios/index';

// ============================|| FIREBASE - REGISTER ||============================ //

const CreateContact = () => {
    const [level, setLevel] = useState();
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('');
    }, []);

    const onHandleSubmit=(data)=>{
        axios.post("http://localhost:4000/createContacts",data).then((data)=>{navigate("/")})

    }

    return (
        <Grid
        spacing={3}
        container
        direction="column"
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="flex-start"
        sx={{
            p:2,
            background:"white",
            maxWidth:"50%"
        }}
    >
        <Grid item>
            <Typography variant="h4" component="h4">Add contact</Typography>
        </Grid>
        <Grid item>


            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: null,  
                    city: '',
                    street:"",
                    country:"India"
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().max(255).required('Name is required'),
                    phone: Yup.number().required('Phone number is required'),
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    onHandleSubmit(values)
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="firstname-signup">Name*</InputLabel>
                                    <OutlinedInput
                                        id="name"
                                        type="name"
                                        value={values.name}
                                        name="name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="John"
                                        fullWidth
                                        error={Boolean(touched.name && errors.name)}
                                    />
                                    {touched.name && errors.name && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.name}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="city">City</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.city && errors.city)}
                                        id="lastname-signup"
                                        type="city"
                                        value={values.city}
                                        name="city"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        inputProps={{}}
                                    />
                                    {touched.city && errors.city&& (
                                        <FormHelperText error id="helper-text-lastname-signup">
                                            {errors.city}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="street">Street</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.street && errors.street)}
                                        id="lastname-signup"
                                        type="street"
                                        value={values.street}
                                        name="street"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        inputProps={{}}
                                    />
                                    {touched.street && errors.street&& (
                                        <FormHelperText error id="helper-text-street-signup">
                                            {errors.street}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                          
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="demo@company.com"
                                        inputProps={{}}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="helper-text-email-signup">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                              
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-signup">Phone*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.phone && errors.phone)}
                                        id="Phone"
                                        type="number"
                                        value={values.phone}
                                        name="phone"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="8045127845"
                                        inputProps={{}}
                                    />
                                    {touched.phone && errors.phone && (
                                        <FormHelperText error id="helper-text-email-signup">
                                            {errors.phone}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                        
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Create Contact
                                    </Button>
                                </AnimateButton>
                            </Grid>
                         
                        </Grid>
                    </form>
                )}
            </Formik>
        </Grid>

        </Grid>
    );
};

export default CreateContact;
