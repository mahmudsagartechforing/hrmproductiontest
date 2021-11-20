import { Button, Grid, InputAdornment, LinearProgress, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import "./Login.css";
import { styled } from "@mui/material/styles";
import { IconContext } from "react-icons";
import { RiMailFill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { resolvePath } from "react-router";
import { useState } from "react";
import { Box } from "@mui/system";
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

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const [accessToken, setAccessToken] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => {
        console.log(data)
        setIsLoading(true)
        fetch("https://tfhrm.herokuapp.com/api/login/", {
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setIsLoading(false)
            });
        reset();
    };
    return (
        <>
            <h3>Sign in</h3>
            {isLoading && <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item xs={12} lg={12} sx={{ marginBlock: "1.8rem" }}>
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
                <Grid item xs={12} lg={12}>
                    <ValidationTextField
                        fullWidth
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
                </Grid>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ marginBlockStart: "1.8rem" }}
                >
                    Sign In
                </Button>
            </form>
        </>
    );
};

export default Login;
