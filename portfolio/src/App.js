import "./App.css";
// import human from "./images/human.png";
// import create from "./images/create.png";
import home from "./images/home.json";
// import circle from "./images/circle.png";
import kitty from "./images/linkedin.jpg";
import Lottie from "lottie-react";
import stars from "./images/stars.png";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import { LightDarkToggle } from "./components/LightDarkToggle";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Box, Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <main style={{ margin: "0px" }}>
          <div className="whole">
            <div className="left">
              <div className="leftbar">
                <div className="leftbarinner">
                  <div className="leftbarinnerinner">
                    <div className="oval border">
                      <Button className="icon2" href="#home">
                        <Lottie animationData={home} loop={true} />
                        {/* <Button
                          sx={{
                            position: "absolute",
                            left: "0",
                            top: "0",
                          }}
                          href="#home"
                        /> */}
                      </Button>
                      <div className="line"></div>
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
                    </div>
                    <div className="icon1">
                      <StarBorderOutlinedIcon style={{ fontSize: "50px" }} />
                    </div>
                    <Button className="icon1" href="#projects">
                      <TipsAndUpdatesOutlinedIcon
                        style={{ fontSize: "50px" }}
                      />
                    </Button>
                    <div className="icon1">
                      <WorkHistoryOutlinedIcon style={{ fontSize: "50px" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lefttoggle">
                <div className="lefttoggle2">
                  <div className="lefttoggle3">
                    <div className="lighttoggle">
                      <LightDarkToggle />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Box sx={{ flex: "1 1 auto", overflowY: " auto" }}>
              <div id="home" />
              <Home />
              <div id="projects" />
              <Projects />
            </Box>
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
