import "./Profile.css";
import Navigation from "./../Shared/Navigation/Navigation";
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import ProfileEdit from "./ProfileEdit/ProfileEdit";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileCv from "./ProfileCv/ProfileCv";
import { Helmet } from "react-helmet";
import { NavLink, useLocation } from "react-router-dom";
import Sidebar from "./../Shared/Sidebar/Sidebar";
import { useState } from "react";
import { Main } from "./../hooks/Main";
const Profile = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    return (
        <>
            <Navigation open={open}/>
            <Sidebar open={open} setOpen={setOpen}/>
            <Main>
                <Helmet>
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                        crossorigin="anonymous"
                    />
                </Helmet>
                <div className="container">
                    <div className="row">
                        <ProfileBanner />
                        <div className="col-lg-8">
                            <div className="card z-depth-3">
                                <div className="card-body">
                                    <ul className="nav nav-pills nav-pills-primary nav-justified">
                                        <li className="nav-item">
                                            <NavLink
                                                to="/profile"
                                                className="nav-link"
                                            >
                                                <i className="icon-user"></i>{" "}
                                                <span className="hidden-xs">
                                                    Profile
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/profileCv"
                                                className="nav-link"
                                            >
                                                <i className="icon-envelope-open"></i>{" "}
                                                <span className="hidden-xs">
                                                    View CV
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/my_jobs"
                                                className="nav-link"
                                            >
                                                <i className="icon-note"></i>{" "}
                                                <span className="hidden-xs">
                                                    My applied jobs
                                                </span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                    <div className="tab-content p-3">
                                        {location.pathname === "/profile" ? (
                                            <ProfileInfo />
                                        ) : location.pathname ===
                                          "/profileCv" ? (
                                            <ProfileCv />
                                        ) : (
                                            <ProfileEdit />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </>
    );
};

export default Profile;
