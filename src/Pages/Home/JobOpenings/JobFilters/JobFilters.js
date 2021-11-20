
import {
    Grid,
    TextField,
} from "@mui/material";
const JobFilters = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item  md={6} sm={12}>
                    <TextField
                        fullWidth
                        id="filled-basic"
                        type="search"
                        label="Search"
                        variant="outlined"
                        placeholder="search by position/level/type/department"
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default JobFilters;
