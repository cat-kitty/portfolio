import logo from "./logo.svg";
import "./App.css";
import human from "./images/human.png";
import create from "./images/create.png";
import home from "./images/home.json";
import circle from "./images/circle.png";
import Lottie from "lottie-react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";

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
                    <div className="circle">
                      <div className="icon2">
                        <Lottie animationData={home} loop={true} />
                      </div>
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
                    <p>dark</p>
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
