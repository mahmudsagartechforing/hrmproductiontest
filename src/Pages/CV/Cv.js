import { useEffect,  useState } from "react";
import Navigation from "./../Shared/Navigation/Navigation";
import {
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { IconContext } from "react-icons";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiCertification } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { VscReplaceAll } from "react-icons/vsc";
import { GiGears, GiGraduateCap } from "react-icons/gi";
import { HiOutlineCloudUpload } from "react-icons/hi";
import Experience from "./Experience/Experience";

import "./cv.css";
import Certificates from "./Certificates/Certificates";
import JobPreferences from "./JobPreferences/JobPreferences";
import Trainings from "./Trainings/Trainings";
import UploadCV from "./UploadCV/UploadCV";
import Educations from "./Education/Educations";
import Skills from './Skills/Skills';
import PersonalAttributes from "./PersonalAttributes/PersonalAttributes";

const CV = () => {
    const [cvForm, setCvForm] = useState("");
    useEffect(() => {
        const cvSection = document.querySelectorAll(".cvSection")
        cvSection.forEach(item => {
            item.addEventListener("click", () => {
                cvSection.forEach(item => item.classList.remove("active"))
                item.classList.add("active")
            })
        })
    }, [])
    return (
        <IconContext.Provider value={{ color: "#182a59" }}>
            <Navigation />
            <Grid container spacing={3} sx={{ p: 3, mt: 8 }}>
                <Grid item lg={3} md={3} xs={12}>
                    <Box sx={{ bgcolor: "#cfe8fc", mb: 5 }}>
                        <List>
                            <ListItem
                                disablePadding
                                sx={{ color: "#182a59" }}
                                onClick={() => setCvForm("personalInfo")}
                                className="active cvSection"
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AiOutlineInfoCircle />
                                    </ListItemIcon>
                                    <ListItemText primary="Presonal Information" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                sx={{ color: "#182a59" }}
                                onClick={() => setCvForm("education")}
                                className="cvSection"
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <GiGraduateCap />
                                    </ListItemIcon>
                                    <ListItemText primary="Educations" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                className="cvSection"
                                onClick={() => setCvForm("workExperience")}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <MdWorkOutline />
                                    </ListItemIcon>
                                    <ListItemText primary="Work Experience" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                className="cvSection"
                                onClick={() => setCvForm("certificate")}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <BiCertification />
                                    </ListItemIcon>
                                    <ListItemText primary="Certificates" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                onClick={() => setCvForm("training")}
                                className="cvSection"
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FaChalkboardTeacher />
                                    </ListItemIcon>
                                    <ListItemText primary="Training" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                className="cvSection"
                                onClick={() => setCvForm("jobPreference")}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <VscReplaceAll />
                                    </ListItemIcon>
                                    <ListItemText primary="Job Preferences" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                className="cvSection"
                                onClick={() => setCvForm("skills")}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <GiGears />
                                    </ListItemIcon>
                                    <ListItemText primary="Skills" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                className="cvSection"
                                onClick={() => setCvForm("upLoadCv")}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HiOutlineCloudUpload />
                                    </ListItemIcon>
                                    <ListItemText primary="Upload CV" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Grid>

                <Grid item lg={9} md={9} xs={12}>
                    {cvForm === "education" ? (
                        <Educations />
                    ) : cvForm === "workExperience" ? (
                        <Experience />
                    ) : cvForm === "skills" ? (
                        <Skills />
                    ) : cvForm === "certificate" ? (
                        <Certificates />
                    ) : cvForm === "training" ? (
                        <Trainings />
                    ) : cvForm === "jobPreference" ? (
                        <JobPreferences />
                    ) : cvForm === "upLoadCv" ? (
                        <UploadCV />
                    ) : (
                        <PersonalAttributes />
                    )}
                </Grid>
            </Grid>

        </IconContext.Provider>
    );
};

export default CV;
