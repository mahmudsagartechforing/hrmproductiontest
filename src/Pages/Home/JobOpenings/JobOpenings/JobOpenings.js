import React, { useState } from "react";
import {
    Grid,
    Box,
    Typography,
} from "@mui/material";
import Positions from "../Positions/Positions";
import { Main } from "./../../../hooks/Main";
import JobFilters from "./../JobFilters/JobFilters";
import Navigation from "../../../Shared/Navigation/Navigation";
import Sidebar from "../../../Shared/Sidebar/Sidebar";
import { NavLink } from "react-router-dom";

const JobOpenings = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Navigation open={open} />
            <Sidebar open={open} setOpen={setOpen} />
            <Main>
                <Typography
                    component="div"
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <h2>Our Job Opening</h2>
                    <NavLink to="/create_opening">Create New job Post</NavLink>
                </Typography>
                <JobFilters />
                <Box sx={{ flexGrow: 1, mt: 3 }}>
                    <Grid container spacing={3}>
                        <Positions />
                    </Grid>
                </Box>
            </Main>
        </>
    );
};

export default JobOpenings;
