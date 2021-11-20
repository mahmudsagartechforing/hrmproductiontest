import {
    Paper,
    TextField,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
} from "@mui/material";
import { useRef, useState } from "react";
import Navigation from "./../../../Shared/Navigation/Navigation";
import Sidebar from "./../../../Shared/Sidebar/Sidebar";
import { Main } from "./../../../hooks/Main";
import { LocalizationProvider, TimePicker } from "@mui/lab";
import DatePicker from "@mui/lab/DatePicker";
import moment from "moment";
import DateAdapter from "@mui/lab/AdapterMoment";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
const CreateJobOpenings = () => {
    const [lastDate, setLastDate] = useState(moment());
    const [shiftStart, setShiftStart] = useState(moment());
    const [shiftEnd, setShiftEnd] = useState(moment());
    const [open, setOpen] = useState(false);
    const [level, setLevel] = useState("");
    const [shift, setShift] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const [description, setDescription] = useState("");
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const editorRef = useRef(null);
    const onSubmit = (data) => { 
        const validTill= lastDate.format('YYYY-DD-MM')
        const startTime= shiftStart.format('hh-mm')
        const endTime= shiftEnd.format('hh-mm')
        console.log({ ...data, description, validTill,startTime,endTime,level, department, shift, location });
        reset()
    };
    return (
        <>
            <Navigation open={open} />
            <Sidebar open={open} setOpen={setOpen} />
            <Main>
                <h1>Create Job</h1>
                <Paper elevation={3} sx={{ py: 3, px: 2 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    fullWidth
                                    id="postTitle"
                                    label="Post Title"
                                    variant="outlined"
                                    {...register("postTitle")}
                                />
                            </Grid>
                            <LocalizationProvider dateAdapter={DateAdapter}>
                                <Grid item md={3} xs={12}>
                                    <DatePicker
                                        label="Last date to apply"
                                        value={lastDate}
                                        onChange={(newValue) => {
                                            setLastDate(newValue)
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                fullWidth
                                                {...params}
                                                helperText={null}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <TimePicker
                                        label="Duty Start time"
                                        value={shiftStart}
                                        onChange={(newValue) => {
                                            setShiftStart(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                fullWidth
                                                {...params}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <TimePicker
                                        label="End Time"
                                        value={shiftEnd}
                                        onChange={(newValue) => {
                                            setShiftEnd(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                fullWidth
                                                {...params}
                                            />
                                        )}
                                    />
                                </Grid>
                            </LocalizationProvider>
                            <Grid item md={3} xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Level
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={level}
                                        label="Age"
                                        onChange={(e)=>setLevel(e.target.value)}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Shift
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={shift}
                                        label="Shift"
                                        onChange={(e)=> setShift(e.target.value)}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Location
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={location}
                                        label="Age"
                                        onChange={(e)=> setLocation(e.target.value)}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Department
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={department}
                                        label="Age"
                                        onChange={(e)=> setDepartment(e.target.value)}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <TextField
                                    fullWidth
                                    id="vacancies"
                                    label="Vacancies"
                                    variant="outlined"
                                    type="number"
                                    {...register("vacancies", {required: "this field is required"})}
                                />
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <InputLabel>Job description</InputLabel>
                                <Editor
                                    onInit={(evt, editor) =>
                                        (editorRef.current = editor)
                                    }
                                    init={{
                                        height: 500,
                                        menubar: false,
                                        plugins: [
                                            "advlist autolink lists link image charmap print preview anchor",
                                            "searchreplace visualblocks code fullscreen",
                                            "insertdatetime media table paste code help wordcount",
                                        ],
                                        toolbar:
                                            "undo redo | formatselect | " +
                                            "bold italic backcolor | alignleft aligncenter " +
                                            "alignright alignjustify | bullist numlist outdent indent | " +
                                            "removeformat | help",
                                        content_style:
                                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                                    }}
                                    onEditorChange={(newText) =>
                                        setDescription(newText)
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" sx={{ mt: 3 }} variant="outlined">
                            Upload CV
                        </Button>
                    </form>
                </Paper>
            </Main>
        </>
    );
};

export default CreateJobOpenings;
