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

const JobPreferences = () => {
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <h3 style={{ marginBottom: '1rem' }}>Academic Info</h3>
            <Divider />
            <form style={{ marginTop: '2rem' }} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Preffered Post
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="prefferedPost"
                                label="Preffered Post"
                                defaultValue=""
                                {...register("prefferedPost")}
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
                    <Grid item xs={12} >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Preffered Shift
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="prefferedPost"
                                label="Preffered Shift"
                                defaultValue=""
                                {...register("prefferedShift")}
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
                            id="salaryRangeFrom"
                            label="Salary Range From"
                            variant="outlined"
                            {...register("salaryRangeFrom", {
                                required: "this field is required",
                            })}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            id="salaryRangeTo"
                            label="Salary Range to"
                            variant="outlined"
                            {...register("salaryRangeTo", {
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

export default JobPreferences
