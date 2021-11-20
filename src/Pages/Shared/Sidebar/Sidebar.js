import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import logo from "../../../images/Main-logo-white.png";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { IconContext } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCalculate } from "react-icons/md";
import { VscRocket } from "react-icons/vsc";
import { BiBriefcase } from "react-icons/bi";
import "./Sidebar.css";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
const Sidebar = ({ open, setOpen }) => {
    const handleAppBar = (e) => {
        open ? setOpen(false) : setOpen(true);
    };
    return (
        <IconContext.Provider value={{ color: "black" }}>
            <SideNav
                style={{
                    zIndex: 9999,
                    backgroundColor: "white",
                    boxShadow: "1px 1px 6px #182a59",
                }}
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle
                    onClick={handleAppBar}
                    style={{ backgroundColor: "#182a59" }}
                />
                <Box sx={{ backgroundColor: "#182a59" }}>
                    <NavLink to="/">
                        {open && (
                            <img
                                src={logo}
                                height="51"
                                style={{ marginTop: "10px" }}
                                width="110"
                                alt=""
                            />
                        )}
                    </NavLink>
                </Box>
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <NavLink to="/">
                                <AiOutlineHome />
                            </NavLink>
                        </NavIcon>
                        <NavText>
                            <NavLink to="/">Home</NavLink>
                        </NavText>
                    </NavItem>
                    <Divider />
                    <NavItem eventKey="hrm">
                        <NavIcon>
                            <VscRocket />
                        </NavIcon>
                        <NavText>HRMS</NavText>
                        <NavItem eventKey="hrm/linechart">
                            <NavText>Dashboard</NavText>
                        </NavItem>
                        <NavItem eventKey="hrm/barchart">
                            <NavText>Department</NavText>
                        </NavItem>
                        <NavItem eventKey="hrm/barchart">
                            <NavText>Employee</NavText>
                        </NavItem>
                        <NavItem eventKey="hrm/barchart">
                            <NavText>Activities</NavText>
                        </NavItem>
                        <NavItem eventKey="hrm/barchart">
                            <NavText>Holidays</NavText>
                        </NavItem>
                        <NavItem eventKey="hrm/barchart">
                            <NavText>Events</NavText>
                        </NavItem>
                    </NavItem>
                    <Divider />
                    <NavItem eventKey="accounts">
                        <NavIcon>
                            <MdOutlineCalculate />
                        </NavIcon>
                        <NavText>Accounts</NavText>
                        <NavItem eventKey="accounts/account">
                            <NavText>Accounts</NavText>
                        </NavItem>
                        <NavItem eventKey="accounts/payroll">
                            <NavText>Payroll</NavText>
                        </NavItem>
                        <NavItem eventKey="accounts/report">
                            <NavText>Report</NavText>
                        </NavItem>
                    </NavItem>
                    <Divider />
                    <NavItem eventKey="recrutment">
                        <NavIcon>
                            <BiBriefcase />
                        </NavIcon>
                        <NavText>Job Portal</NavText>
                        <NavItem eventKey="recrutment/account">
                            <NavText>Job Dashboard</NavText>
                        </NavItem>
                        <NavItem eventKey="recrutment/openings">
                            <NavText>
                                <NavLink to="/openings">Openings</NavLink>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="recrutment/payroll">
                            <NavText>Positions</NavText>
                        </NavItem>
                        <NavItem eventKey="recrutment/report">
                            <NavText>Applicants</NavText>
                        </NavItem>
                        <NavItem eventKey="recrutment/report">
                            <NavText>Resumes</NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </IconContext.Provider>
    );
};

export default Sidebar;
