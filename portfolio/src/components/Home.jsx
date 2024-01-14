import human from "../images/human1.png";
import create from "../images/create.png";
import circle from "../images/circle.png";

export function Home() {
    return (
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
    )
}
