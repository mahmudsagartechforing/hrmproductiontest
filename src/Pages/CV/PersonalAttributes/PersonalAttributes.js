import { DatePicker, LocalizationProvider } from "@mui/lab";
import { Button, Divider, FormControl, Grid, IconButton,  InputLabel, MenuItem, Select, TextField } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DateAdapter from "@mui/lab/AdapterMoment";
import { ErrorMessage } from "@hookform/error-message";
import { MdCameraAlt } from "react-icons/md";
import {  styled } from "@mui/system";
const PersonalAttributes = () => {
    const [birthdate, setBirthdate] = useState(moment());
    // eslint-disable-next-line no-unused-vars
    const [rows, setRows] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const theads = ['Education Level', 'Degree', 'Institute', 'Subject', 'Graduation Year', 'Duration', 'GPA/CGPA'];
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const Input = styled('input')({
        display: 'none',
    });
    useEffect(() => {
        console.log(rows)
    }, [rows]);

    const [file, setFile] = useState("");

    const onSubmit = (data) => console.log(data);

    useEffect(() => {
        if (watch("CV") && watch("CV").length !== 0)
            setFile(watch("CV")[0].name);
        else setFile("Please enter your cv");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch("CV")]);

    return (
        <div>
            <h3 style={{ marginBottom: '.5rem' }}>Provide Your Personal Info</h3>
            <Divider />
            <form style={{ marginTop: '2rem' }} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            id="fullname"
                            label="Full Name"
                            variant="outlined"
                            {...register("fullname", {
                                required: "this field is required",
                            })}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <LocalizationProvider dateAdapter={DateAdapter}>
                            <DatePicker
                                label="Birthdate"
                                value={birthdate}
                                onChange={(newValue) => {
                                    setBirthdate(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField fullWidth {...params} helperText={null}  {...register("birthdate", { required: "this field is required" })} />
                                )}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            id="email"
                            label="Email Address"
                            variant="outlined"
                            {...register("email", {
                                required: "this field is required",
                            })}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            id="phone"
                            label="Phone Number"
                            variant="outlined"
                            {...register("phone", {
                                required: "this field is required",
                            })}
                        />
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            id="nationality"
                            label="Nationality"
                            variant="outlined"
                            {...register("nationality", {
                                required: "this field is required",
                            })}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            id="nid"
                            label="NID"
                            variant="outlined"
                            {...register("nid", {
                                required: "this field is required",
                            })}
                        />
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <label htmlFor="contained-button-file">
                            <Input

                                id="contained-button-file"
                                type="file"
                                {...register("CV", {
                                    required: "This field is required",
                                })}
                            />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <MdCameraAlt />
                            </IconButton>
                            <span
                                style={{
                                    color: "#ddd",
                                    marginLeft: "1rem",
                                    textTransform: "uppercase",
                                    paddingBottom: '10px',
                                    borderBottom: '1px solid'
                                }}
                            >
                                {file}
                            </span>
                        </label>
                        <ErrorMessage errors={errors} name="CV" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Gender
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Gender"
                                defaultValue=""
                                {...register("gender")}
                            >
                                <MenuItem value={"Male"}>Male</MenuItem>
                                <MenuItem value={"Female"}>
                                    Female
                                </MenuItem>
                                <MenuItem value={"Others"}>Others</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            id="country"
                            label="Country"
                            variant="outlined"
                            {...register("country", {
                                required: "this field is required",
                            })}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            id="address"
                            label="Address"
                            variant="outlined"
                            {...register("address", {
                                required: "this field is required",
                            })}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" sx={{ mt: 3 }} variant="outlined">
                    Save
                </Button>
            </form>
        </div>
    )
}

export default PersonalAttributes
