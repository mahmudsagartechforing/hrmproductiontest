import { Typography } from "@mui/material";
import React, { useState } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import JobFilters from "../JobOpenings/JobFilters/JobFilters";
import Positions from "../JobOpenings/Positions/Positions";
import { Main } from './../../hooks/Main';
import { Box } from '@mui/system';

const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Navigation open={open} />
            <Sidebar open={open} setOpen={setOpen} />
            <Main>
                <Typography component="h2" sx={{fontWeight: "700"}}>
                    Our Job Opening
                </Typography>
                <JobFilters />
                <Box sx={{my:2}}/>
                <Positions />
            </Main>
        </>
    );
};

export default Home;
