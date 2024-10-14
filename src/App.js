import "./App.css";
import home from "./images/home.json";
import kitty from "./images/linkedin.jpg";
import Lottie from "lottie-react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import PaletteIcon from "@mui/icons-material/Palette";
import { LightDarkToggle } from "./components/LightDarkToggle";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Work } from "./components/Work";
import { Interests } from "./components/Interests";
import { Footer } from "./components/Footer";
import { Review } from "./components/Review";
import { Box, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { CssBaseline } from "@mui/material/";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleTheme = () => {
    setdarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Router>
          <Box className="App">
            <header className="App-header"></header>
            <main style={{ margin: "0px" }}>
              <Box className="whole">
                <Box className="left">
                  <Box className="leftbar">
                    <Box className="leftbarinner">
                      <Box className="leftbarinnerinner">
                        <Box
                          className="oval"
                          sx={{ borderStyle: "solid", borderWidth: 2 }}
                        >
                          <Button className="icon2" href="#home">
                            <Lottie animationData={home} loop={true} />
                          </Button>
                          <Box className="line"></Box>
                          <a
                            className="linkedin"
                            href="https://www.linkedin.com/in/kitty-c-79951b19a/"
                          >
                            <img
                              className="kitty"
                              src={kitty}
                              alt="Kitty's LinkedIn"
                            />
                          </a>
                        </Box>
                        <Button className="icon1" href="/#about">
                          <StarBorderOutlinedIcon
                            style={{ fontSize: "50px" }}
                          />
                        </Button>
                        <Button className="icon1" href="/#projects">
                          <TipsAndUpdatesOutlinedIcon
                            style={{ fontSize: "50px" }}
                          />
                        </Button>
                        <Button className="icon1" href="/#work">
                          <WorkHistoryOutlinedIcon
                            style={{ fontSize: "50px" }}
                          />
                        </Button>
                        <Button className="icon1" href="/#interests">
                          <PaletteIcon style={{ fontSize: "50px" }} />
                        </Button>
                        <Link to="/review">
                          <Button variant="contained">Go to Reviews</Button>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="lefttoggle">
                    <Box className="lefttoggle2">
                      <Box className="lefttoggle3">
                        <LightDarkToggle onClick={toggleTheme} />
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box
                  className="SussyBaka"
                  sx={{
                    flex: "1 1 auto",
                    overflowY: " auto",
                  }}
                >
                  <Routes>
                    <Route path="/" element={<><Home /><About /><Projects /><Work /><Interests /><Footer /></>} />
                    <Route path="/review" element={<Review />} />
                  </Routes>
                </Box>
              </Box>
            </main>
          </Box>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
