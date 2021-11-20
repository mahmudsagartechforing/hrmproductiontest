import React, { useState } from "react";
import { Button, Drawer, Paper, Typography, Grid, Box } from "@mui/material";
import { MdLocationOn, MdOutlineCategory } from "react-icons/md";
import { RiBuilding2Fill } from "react-icons/ri";
import { GoBriefcase } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { SiRedhatopenshift } from "react-icons/si";
import JobDescription from "../JobDescription/JobDescription";
import "./positions.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";

const Positions = () => {
    const [state, setState] = useState({ right: false });
    const [hover, setHover] = useState(false);
    const location = useLocation();

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    return (
        <>
            <Grid item lg={12} md={12} xs={12}>
                <Paper
                    elevation={8}
                    variant="outlined"
                    sx={{
                        paddingInline: "1rem",
                        paddingBlock: ".8rem",
                        backgroundColor:
                            location.pathname !== "/openings"
                                ? "#11882238"
                                : hover
                                    ? "#ededed"
                                    : "#fff",
                    }}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "2fr 3fr 1fr",
                            alignItems: "center",
                        }}
                        className={"openingContainer"}
                    >
                        <Typography
                            sx={{
                                fontWeight: 600,
                                textAlign: "start",
                                textTransform: "uppercase",
                            }}
                        >
                            Front end web developer
                        </Typography>
                        {location.pathname !== "/openings" ?
                            <Box
                                className="details"
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(6, 1fr)",
                                }}
                            >
                                <Typography
                                    component="div"
                                    className="openingInfos"
                                    sx={{ display: "grid" }}
                                >
                                    <Typography
                                        component="small"
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "5px",
                                        }}
                                    >
                                        <MdOutlineCategory />
                                        Type
                                    </Typography>
                                    <Typography component="p">
                                        Full Time
                                    </Typography>
                                </Typography>
                                <Typography
                                    component="div"
                                    className="openingInfos"
                                    sx={{ display: "grid" }}
                                >
                                    <Typography
                                        component="small"
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "5px",
                                        }}
                                    >
                                        <MdLocationOn />
                                        Location
                                    </Typography>
                                    <Typography component="p">
                                        Remote
                                    </Typography>
                                </Typography>
                                <Typography
                                    component="div"
                                    className="openingInfos"
                                    sx={{ display: "grid" }}
                                >
                                    <Typography
                                        component="small"
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "5px",
                                        }}
                                    >
                                        <RiBuilding2Fill />
                                        Level
                                    </Typography>
                                    <Typography component="p">
                                        Senior
                                    </Typography>
                                </Typography>
                                <Typography
                                    component="div"
                                    className="openingInfos"
                                    sx={{ display: "grid" }}
                                >
                                    <Typography
                                        component="small"
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "5px",
                                        }}
                                    >
                                        <GoBriefcase />
                                        Department
                                    </Typography>
                                    <Typography component="p">
                                        Development
                                    </Typography>
                                </Typography>
                                <Typography
                                    component="div"
                                    className="openingInfos"
                                    sx={{ display: "grid" }}
                                >
                                    <Typography
                                        component="small"
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "5px",
                                        }}
                                    >
                                        <SiRedhatopenshift />
                                        Shift
                                    </Typography>
                                    <Typography component="p">Night</Typography>
                                </Typography>
                                <Typography
                                    component="div"
                                    className="openingInfos"
                                    sx={{ display: "grid" }}
                                >
                                    <Typography
                                        component="small"
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "5px",
                                        }}
                                    >
                                        <IoIosPeople />
                                        Vacancies
                                    </Typography>
                                    <Typography component="p">2</Typography>
                                </Typography>
                            </Box>

                            :
                            <Box
                                className="details"
                                sx={{
                                    justifySelf: "center",
                                    display: "flex",
                                    justifyContent: "space-around",
                                    width: "100%",
                                }}
                            >
                                <Typography
                                    component="div"
                                    className="openingInfos"
                                    sx={{
                                        background: "#cedd7a",
                                        px: 2,
                                        borderRadius: "1rem",
                                        color: "#fff",
                                    }}
                                >
                                    <Typography component="p">Full Time</Typography>
                                </Typography>
                                <Typography
                                    component="div"
                                    className="openingInfos"
                                    sx={{
                                        display: "flex",
                                        gap: ".5rem",
                                        alignContent: "center",
                                    }}
                                >
                                    Applicant:
                                    <Typography
                                        component="strong"
                                        sx={{ fontWeight: 800 }}
                                    >
                                        0
                                    </Typography>
                                </Typography>
                                <Typography component="div" className="openingInfo">
                                    Department
                                </Typography>
                            </Box>
                        }

                        <Typography
                            className="openingInfos"
                            sx={{
                                display: "flex",
                                textAlign: "center",
                                alignItems: "center",
                            }}
                        >
                            <Button onClick={toggleDrawer("right", true)}>
                                View
                            </Button>
                            <NavLink to="/edit">
                                <Button>Edit</Button>
                            </NavLink>
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
            <Drawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                sx={{ top: "64px" }}
                className="jobDrawer"
            >
                {
                    // @ts-ignore
                    <JobDescription />
                }
            </Drawer>
        </>
    );
};

export default Positions;
