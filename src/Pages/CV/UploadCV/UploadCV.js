import { ErrorMessage } from "@hookform/error-message";
import { Button, Divider,  TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";

const Input = styled("input")({
    display: "none",
});

const UploadCV = () => {
    const [file, setFile] = useState("");
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    useEffect(() => {
        // eslint-disable-next-line eqeqeq
        if (watch("CV") && watch("CV").length != 0)
            setFile(watch("CV")[0].name);
        else setFile("Please enter your cv");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch("CV")]);
    return (
        <>
            <h3 style={{ textTransform: "uppercase" }}>Upload CV</h3>
            <Divider />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{my: 3}}>
                    <TextField
                        fullWidth
                        id="title"
                        label="Title"
                        variant="outlined"
                        {...register("title", {
                            required: "This field is required",
                        })}
                    />
                    <ErrorMessage errors={errors} name="title" />
                </Box>
                <Box>
                    <label htmlFor="contained-button-file">
                        <Input
                            id="contained-button-file"
                            type="file"
                            {...register("CV", {
                                required: "This field is required",
                            })}
                        />
                        <Button
                            variant="contained"
                            component="span"
                            sx={{ backgroundColor: "#182a59" }}
                        >
                            choose file
                        </Button>
                        <span
                            style={{
                                color: "#ddd",
                                marginLeft: "1rem",
                                textTransform: "uppercase",
                            }}
                        >
                            {file}
                        </span>
                    </label>
                    <ErrorMessage errors={errors} name="CV" />
                </Box>
                <Button type="submit" sx={{ mt: 3 }} variant="outlined">
                    Upload CV
                </Button>
            </form>
        </>
    );
};

export default UploadCV;
