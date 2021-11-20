import { TextField } from "@mui/material";

const FilterQuestions = () => {
    return (
        <div>
            <TextField
                multiline={true}
                minRows={3}
                maxRows={12}
                variant="outlined"
            />
        </div>
    );
};

export default FilterQuestions;
