import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Authentication from "./Pages/Authentication/Authentication";
import { createTheme, ThemeProvider } from "@mui/material";
import CV from './Pages/CV/Cv';
import Apply from './Pages/Apply/Apply';
import JobOpenings from './Pages/Home/JobOpenings/JobOpenings/JobOpenings';
import Candidates from './Pages/Candidates/Canddates'
import CreateJobOpenings from './Pages/Home/JobOpenings/CreateJobOpenings/CreateJobOpenings';
const theme = createTheme({
    typography: {
        fontFamily: [
          'Poppins',
          'sans-serif',
        ].join(','),
      },
  });
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/openings" element={<JobOpenings />} />
                    <Route path="/create_opening" element={<CreateJobOpenings />} />
                    <Route path="/apply" element={<Apply />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/cadidates" element={<Candidates />} />
                    <Route path="/profile/edit" element={<CV />} />
                    <Route path="/profileCv" element={<Profile />} />
                    <Route path="/my_jobs" element={<Profile />} />
                    <Route path="/login" element={<Authentication />} />
                    <Route path="/register" element={<Authentication />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
