
import { useForm } from "react-hook-form";
import {
    Button,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import moment from "moment";
import DateAdapter from "@mui/lab/AdapterMoment";
import { useEffect, useState } from "react";
import DataTable from "../DataTable/DataTable";


const Educations = () => {

    const [gradYear, setGradYear] = useState(moment());
    const [rows, setRows] = useState([]);
    const theads = ['Education Level', 'Degree', 'Institute', 'Subject', 'Graduation Year', 'Duration', 'GPA/CGPA'];
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();


    const onSubmit = (data) => {
        setRows([...rows, data])
        reset();
    };
    useEffect(() => {
        console.log(rows)
    }, [rows])
    return (
        <div>
            <h3 style={{ marginBottom: '1rem' }}>Academic Info</h3>
            <Divider />
            <DataTable theads={theads} rows={rows} />
            <h3 style={{ marginTop: '1.5rem' }}>Provide Your Academic Info</h3>
            <Divider />
            <form style={{ marginTop: '2rem' }} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Education Level
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Education Level"
                                defaultValue=""
                                {...register("educationLevel")}
                            >
                                <MenuItem value={"Secondary"}>Secondary</MenuItem>
                                <MenuItem value={"Higher Secondary"}>
                                    Higher Secondary
                                </MenuItem>
                                <MenuItem value={"Diploma"}>Diploma</MenuItem>
                                <MenuItem value={"Bachelors / Honors"}>
                                    Bachelors / Honors
                                </MenuItem>
                                <MenuItem value={"Masters"}>Masters</MenuItem>
                                <MenuItem value={"Phd (doctor of philosophy)"}>
                                    Phd (doctor of philosophy)
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            id="degree"
                            label="Degree title"
                            variant="outlined"
                            {...register("degree", {
                                required: "this field is required",
                            })}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            id="institute"
                            label="Institute Name"
                            variant="outlined"
                            {...register("institute", {
                                required: "this field is required",
                            })}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            id="subject"
                            label="Subject/Group/Major"
                            variant="outlined"
                            {...register("subject", {
                                required: "this field is required",
                            })}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <LocalizationProvider dateAdapter={DateAdapter}>
                            <DatePicker
                                views={["year"]}
                                label="Graduation Year"
                                value={gradYear}
                                onChange={(newValue) => {
                                    setGradYear(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField fullWidth {...params} {...register("gradYear", { required: "this field is required" })} />
                                )}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            id="duration"
                            label="Duration"
                            variant="outlined"
                            {...register("duration", {
                                required: "this field is required",
                            })}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            id="result"
                            label="Score/GPA/CGPA/"
                            variant="outlined"
                            {...register("result", {
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
    );
};

export default Educations;
