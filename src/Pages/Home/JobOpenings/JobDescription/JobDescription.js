import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import '@fontsource/roboto/400.css';
import { Button } from "@mui/material";

const Position = ({ jobDescription }) => {
    return (
        <Box sx={{ flexGrow: 1, boxShadow: 3, mb: 3, p: 5 }}>
            <Box>
                <Typography variant="h6" sx={{ borderRight: '1px solid black', display: 'inline-block', pr: 3 }}>
                    {jobDescription? jobDescription.position : "hello"}
                </Typography>
                <Typography variant="subtitle" sx={{ display: 'inline-block', pl: 3, userSelect: 'none' }}>
                    TechForing Ltd.
                </Typography>
            </Box>
            <Box style={{ marginTop: '2rem' }}>
                {/* {jobDescription.description} */}
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

                BUTTON TEXT
                caption text
                OVERLINE TEXT
            </Box>

            <Grid container style={{ marginTop: '2rem' }}>
                <Box sx={{ width: '100%' }}>
                    <Typography variant="subtitle" sx={{ textAlign: 'left', mt: 5 }}>
                        {/* Type: {jobDescription.type} <br />
                        Location: {jobDescription.location} <br />
                        Level: {jobDescription.level} <br />
                        Shift: {jobDescription.shift} */}
                    </Typography>
                </Box>
                <br />
                <NavLink to="/apply" style={{ margin: '2rem auto' }}>
                    <Button variant="contained" color="success">
                        Apply
                    </Button>
                </NavLink>
            </Grid>
        </Box>
    );
};

export default Position;
