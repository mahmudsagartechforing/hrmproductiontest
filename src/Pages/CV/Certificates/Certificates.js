import "./cetificates.css"
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import {
    Button,
    Divider,
    TextField,
} from "@mui/material";
const Certificates = () => {
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <h3>Certifications</h3>
            <Divider />
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        id="topic"
                        label="Subject/ Topic/ Exam"
                        variant="outlined"
                        {...register("topic", {
                            required: "this field is required",
                        })}
                    />
                </Box>
                <Box sx={{ my: 3 }}>
                    <TextField
                        fullWidth
                        id="subject"
                        label="Subject/Group/Major"
                        variant="outlined"
                        {...register("subject", {
                            required: "this field is required",
                        })}
                    />
                </Box>
                <Box sx={{ my: 3 }}>
                    <TextField
                        fullWidth
                        id="score"
                        label="Pass/ Fail/ Score "
                        variant="outlined"
                        {...register("score", {
                            required: "this field is required",
                        })}
                    />
                </Box>
                <Box sx={{ my: 3 }}>
                    <TextField
                        fullWidth
                        id="certificationId"
                        label="Certificate ID No."
                        variant="outlined"
                        {...register("certificationId", {
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

export default Certificates
