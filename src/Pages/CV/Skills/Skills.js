import {
    Autocomplete,
    Button,
    Divider,
    Stack,
    TextField,
} from "@mui/material";
import {useForm } from "react-hook-form";
const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];
const Skills = () => {
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <h3>Academic Info</h3>
            <Divider />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack sx={{ my: 3 }}>
                    {/* <Controller
                        control={control}
                         defaultValue={[]}
                         name="skills"
                         render={({ field }) => {
                           const { onChange, value, name, ref } = field
                           return (
                             <Creatable
                               name={name}
                               inputRef={ref}
                               options={options}
                               value={options.find((c) => c.id === value)}
                               onChange={(val) => {
                                 onChange(val)
                               }}
                               isMulti
                             />
                        )}}
                    /> */}
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={options}
                        getOptionLabel={(option) => option.label}
                        defaultValue={[]}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                            {...register("skills")}
                                {...params}
                                label="Skills"
                                placeholder="Skills"
                            />
                        )}
                    />
                </Stack>
                <Button type="submit" sx={{ mt: 3 }} variant="outlined">
                    Save
                </Button>
            </form>
        </div>
    );
};

export default Skills;
