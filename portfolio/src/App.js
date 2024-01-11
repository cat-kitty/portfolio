import logo from "./logo.svg";
import "./App.css";
import human from "./images/human.png";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <main style={{ margin: "0px" }}>
          <div className="whole">
            {/* <div className="miniwhole"> */}
            <div className="left">
              <div className="leftbar">
                <div className="leftbarinner">
                  <ul>
                    <li>
                      <a img="..\images\home.json" href="#">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
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
