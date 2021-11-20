import {
    Button,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
} from "@mui/material";
import { FaPassport, FaUserAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import DateAdapter from "@mui/lab/AdapterMoment";
import {
    BsFillCreditCard2FrontFill,
    BsFillTelephoneFill,
} from "react-icons/bs";
import {
    RiGenderlessFill,
    RiLockPasswordFill,
    RiMailFill,
} from "react-icons/ri";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { IconContext } from "react-icons";
import { styled } from "@mui/system";
import "./Register.css";
import { useState } from "react";
import moment from "moment";

const ValidationTextField = styled(TextField)({
    "& input:valid + fieldset": {
        borderColor: "white",
    },
    "& input:valid:focus + fieldset": {
        borderLeftWidth: 6,
        borderColor: "#fff", // override inline-style
    },
    "& input:valid:hover + fieldset": {
        borderColor: "white",
    },
});

const Register = () => {
    const [b_date, setB_date] = useState(moment());
    const [gender, setGender] = useState("");
    const [passwordError, setPasswordError] = useState(false)

    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const birthdate = b_date.format("YYYY-DD-MM");
        console.log({ ...data, gender, birthdate });
        fetch("https://tfhrm.herokuapp.com/api/create/", {
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ ...data, gender, birthdate }),
        })
            .then(res => res.json())
            .then(res => console.log(res));
    };
    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
            <h3>Register To Get A Career</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6} className="input">
                        <ValidationTextField
                            fullWidth
                            type="firstName"
                            id="firstName"
                            label=" First Name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconContext.Provider
                                            value={{ color: "white" }}
                                        >
                                            <FaUserAlt />
                                        </IconContext.Provider>
                                    </InputAdornment>
                                ),
                            }}
                            {...register("full_name", { required: true })}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <ValidationTextField
                            fullWidth
                            type="phone"
                            id="phone"
                            label="Phone Number"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconContext.Provider
                                            value={{ color: "white" }}
                                        >
                                            <BsFillTelephoneFill />
                                        </IconContext.Provider>
                                    </InputAdornment>
                                ),
                            }}
                            {...register("phone", { required: true })}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <LocalizationProvider dateAdapter={DateAdapter}>
                            <DatePicker
                                label="Last date to apply"
                                value={b_date}
                                onChange={(newValue) => {
                                    setB_date(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField fullWidth {...params} />
                                )}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} lg={6} className="input">
                        <ValidationTextField
                            fullWidth
                            id="nationality"
                            label="Nationality"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconContext.Provider
                                            value={{ color: "white" }}
                                        >
                                            <FaPassport />
                                        </IconContext.Provider>
                                    </InputAdornment>
                                ),
                            }}
                            {...register("nationality", { required: true })}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6} className="input">
                        <ValidationTextField
                            fullWidth
                            id="nid"
                            label="NID"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconContext.Provider
                                            value={{ color: "white" }}
                                        >
                                            <BsFillCreditCard2FrontFill />
                                        </IconContext.Provider>
                                    </InputAdornment>
                                ),
                            }}
                            {...register("nid", { required: true })}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormControl fullWidth>
                            <InputLabel shrink id="demo-simple-select-label">
                                Gender
                            </InputLabel>
                            <IconContext.Provider
                                value={{
                                    color: "white",
                                    size: "32px",
                                    className: "gender-icon",
                                }}
                            >
                                <Select
                                    input={
                                        <OutlinedInput
                                            notched
                                            label="Gender"
                                            sx={{
                                                flexDirection: "row-reverse",
                                            }}
                                        />
                                    }
                                    labelId="gender"
                                    id="gender"
                                    value={gender}
                                    onChange={handleChange}
                                    label="Gender"
                                    IconComponent={() => <RiGenderlessFill />}
                                >
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                    <MenuItem value="Other">Others</MenuItem>
                                </Select>
                            </IconContext.Provider>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <ValidationTextField
                            fullWidth
                            type="email"
                            id="email"
                            label="Email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconContext.Provider
                                            value={{ color: "white" }}
                                        >
                                            <RiMailFill />
                                        </IconContext.Provider>
                                    </InputAdornment>
                                ),
                            }}
                            {...register("email", { required: true })}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <ValidationTextField
                            fullWidth
                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            type="password"
                            id="password"
                            label="Password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconContext.Provider
                                            value={{ color: "white" }}
                                        >
                                            <RiLockPasswordFill />
                                        </IconContext.Provider>
                                    </InputAdornment>
                                ),
                            }}
                            {...register("password", { required: true })}
                        />
                        <div className="invalid-feedback">{errors.password?.message}</div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <ValidationTextField
                            fullWidth
                            type="password"
                            error={passwordError}
                            id={`confirmPassword ${passwordError && "outlined-error"}`}
                            label="Confirm Password"
                            onChange={(e)=> {
                                e.target.value !== watch().password ? setPasswordError(true) : setPasswordError(false)
                            }}
                            helperText={passwordError ? 'paswword dont match' : ' '}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconContext.Provider
                                            value={{ color: "white" }}
                                            >
                                            <RiLockPasswordFill />
                                        </IconContext.Provider>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        
                    </Grid>
                </Grid>
                <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button type="submit" sx={{ mt: 3 }} variant="contained">
                        Sign UP
                    </Button>
                </Grid>
            </form>
        </LocalizationProvider>
    );
};

export default Register;
