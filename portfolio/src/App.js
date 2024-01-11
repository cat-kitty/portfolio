import logo from "./logo.svg";
import "./App.css";
import human from "./images/human.png";
import create from "./images/create.png";
import home from "./images/home.json";
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
                    <div className="icon1">
                      <Lottie animationData={home} loop={true} />
                    </div>
                    <div className="icon1">
                      {/* <i class="fa-regular fa-star"></i> */}
                      <StarBorderOutlinedIcon fontSize="large" />
                    </div>
                    <div className="icon1">
                      {/* <i className="fa-regular fa-folder-open"></i> */}
                      <TipsAndUpdatesOutlinedIcon fontSize="large" />
                    </div>
                    <div className="icon1">
                      {/* <i className="fa-regular fa-briefcase"></i> */}
                      <WorkHistoryOutlinedIcon fontSize="large" />
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
              {/* <p>"hi"</p> */}
              <div className="header">
                <h1>Kitty Cai</h1>
              </div>
              <p>hi</p>
              <div className="power">
                <div className="power1"></div>
                <img className="create" src={create} />
                <img className="human" src={human} />
              </div>
            </div>
            {/* </div> */}
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
