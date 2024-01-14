import "./App.css";
import human from "./images/human.png";
import create from "./images/create.png";
import home from "./images/home.json";
import circle from "./images/circle.png";
import kitty from "./images/linkedin.jpg";
import Lottie from "lottie-react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import { LightDarkToggle } from "./components/LightDarkToggle";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";

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
                      <div className="icon2">
                        <Lottie animationData={home} loop={true} />
                      </div>
                      <div className="line"></div>
                      <a
                        className="linkedin"
                        href="https://www.linkedin.com/in/kitty-c-79951b19a/"
                      >
                        <img
                          className="kitty"
                          src={kitty}
                          alt="Kitty's LinkedIn Image"
                        />
                      </a>
                    </div>
                    <div className="icon1">
                      <StarBorderOutlinedIcon style={{ fontSize: "50px" }} />
                    </div>
                    <div className="icon1">
                      <TipsAndUpdatesOutlinedIcon
                        style={{ fontSize: "50px" }}
                      />
                    </div>
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
            <div className="right">
              <div className="header">
                <h1>Kitty Cai</h1>
              </div>
              <div className="power">
                <div className="power1"></div>
                <div className="wheels">
                  <img className="prettycircleflip" src={circle} />
                  <img className="prettycircleflip" src={circle} />
                  <div className="paddingmid"></div>
                  <img className="prettycircle" src={circle} />
                  <img className="prettycircle" src={circle} />
                </div>
                <img className="create" src={create} />
                <img className="human" src={human} />
              </div>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
