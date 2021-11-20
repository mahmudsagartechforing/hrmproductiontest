import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import {
    Button,
    TextareaAutosize,
    TextField,
} from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import moment from "moment";
import DateAdapter from "@mui/lab/AdapterMoment";
import { useState } from "react";

const Experience = () => {
    const [startDate, setStartDate] = useState(moment());
    const [endDate, setEndDate] = useState(moment());
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <h3>Work Experience / Assignment Experience</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ my: 3 }}>
                    <TextField
                        fullWidth
                        id="organization"
                        label="Organization Name"
                        variant="outlined"
                        {...register("organization", {
                            required: "this field is required",
                        })}
                    />
                </Box>
                <Box sx={{ my: 3 }}>
                    <TextField
                        fullWidth
                        id="department"
                        label="Department Name"
                        variant="outlined"
                        {...register("department", {
                            required: "this field is required",
                        })}
                    />
                </Box>
                <Box sx={{ my: 3 }}>
                    <TextField
                        fullWidth
                        id="position"
                        label="Position held"
                        variant="outlined"
                        {...register("position", {
                            required: "this field is required",
                        })}
                    />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <LocalizationProvider dateAdapter={DateAdapter}>
                        <DatePicker
                            label="From"
                            value={startDate}
                            onChange={(newValue) => {
                                setStartDate(newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    helperText={null}
                                    {...register("startDate", {
                                        required: "this field is required",
                                    })}
                                />
                            )}
                        />
                        <DatePicker
                            label="to"
                            value={endDate}
                            onChange={(newValue) => {
                                setEndDate(newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    helperText={null}
                                    {...register("endDate", {
                                        required: "this field is required",
                                    })}
                                />
                            )}
                        />
                    </LocalizationProvider>
                    <TextField
                        id="totalDuration"
                        label="Tota Duration"
                        variant="outlined"
                    />
                </Box>
                <Box sx={{ my: 3 }}>
                    <TextareaAutosize
                        aria-label="Major Responsibilities"
                        minRows={5}
                        placeholder="Major Responsibilities"
                        style={{ width: "100%" }}
                        {...register("responsibility", {
                            required: "this field is required",
                        })}
                    />
                </Box>
                <Button type="submit" variant="outlined">
                    Save
                </Button>
            </form>
        </div>
    );
};

export default Experience;
