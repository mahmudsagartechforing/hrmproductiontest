import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import {
    Button,
    Divider,
    TextField,
} from "@mui/material";

const Trainings = () => {
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <h3>Training</h3>
            <Divider />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ my: 3 }}>
                    <TextField
                        fullWidth
                        id="topic"
                        label="Subject/ Topic Name"
                        variant="outlined"
                        {...register("topic", {
                            required: "this field is required",
                        })}
                    />
                </Box>
                <Box sx={{ my: 3 }}>
                    <TextField
                        fullWidth
                        id="vendorName"
                        label="Vendor Name"
                        variant="outlined"
                        {...register("vendorName", {
                            required: "this field is required",
                        })}
                    />
                </Box>
                <Box sx={{ my: 3 }}>
                    <TextField
                        fullWidth
                        id="duration"
                        label="Duration"
                        variant="outlined"
                        {...register("duration", {
                            required: "this field is required",
                        })}
                    />
                </Box>
                <Button type="submit" sx={{ mt: 3 }} variant="outlined">
                    Save
                </Button>
            </form>
        </div>
    )
}

export default Trainings
