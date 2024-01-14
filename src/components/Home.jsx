import human from "../images/human1.png";
import create from "../images/create.png";
import circle from "../images/circle.png";
import stars1 from "../images/stars1.png";
import stars2 from "../images/stars2.png";
import { Box } from "@mui/material";

export function Home() {
    return (
        <Box className="right" sx={{ backgroundColor: "transparent" }}>
            <div className="header">
                <h1>Kitty Cai</h1>
            </div>
            <Box className="power">
                <div className="power1"></div>
                <div className="flicker">
                    <img className="stars1" src={stars1} />
                    <img className="stars2" src={stars2} />
                </div>
                <div className="wheels">
                    <img className="prettycircleflip" src={circle} />
                    <img className="prettycircleflip" src={circle} />
                    <div className="paddingmid"></div>
                    <img className="prettycircle" src={circle} />
                    <img className="prettycircle" src={circle} />
                </div>
                <img className="create" src={create} />
                <img className="human" src={human} />

            </Box>
        </Box>
    )
}
