import React from "react";
import "../App.css";
import "./Interests.css";
import { Box } from "@mui/system";
import Killjoy from "../images/Art/2021.7.20.png";
import Lion from "../images/Art/2021.6.19.png";
import AnimeGirl from "../images/Art/2021.3.20.png";
import Tired from "../images/Art/2021.1.29.png";
import AnimeGirlCoffee from "../images/Art/2020.12.27.png";
import BalloonGirl from "../images/Art/2020.12.6.png";
import Hisoka from "../images/Art/2020.11.27.png";
import AnimeMan from "../images/Art/2020.10.11.png";
import Inktober9 from "../images/Art/2020.10.9.png";
import Inktober8 from "../images/Art/2020.10.8.png";
import Inktober7 from "../images/Art/2020.10.7.jpg";
import Inktober6 from "../images/Art/2020.10.6.png";
import Inktober5 from "../images/Art/2020.10.5.png";
import Inktober4 from "../images/Art/2020.10.4.jpg";
import Inktober3 from "../images/Art/2020.10.3.jpg";
import Inktober2 from "../images/Art/2020.10.2.png";
import Inktober1 from "../images/Art/2020.10.1.jpg";
import FatherDaughter from "../images/Art/2020.9.30.png";
import Calligraphy from "../images/Art/2020.9.22w.png";
import CalligraphyM from "../images/Art/2020.9.22r.png";
import Touch from "../images/Art/2020.9.4.png";
import AnimeBoy from "../images/Art/2020.8.28.png";
import Snorlax from "../images/Art/2020.8.26.png";
import AnimeBoy2 from "../images/Art/2020.8.20.png";
import Killua from "../images/Art/2020.8.16.png";
import AnimeBoy3 from "../images/Art/2020.8.14.png";
import AnimeBoy4 from "../images/Art/2020.8.11.png";
import HeadphoneGirl from "../images/Art/2020.7.25.png";
import CryingGirl from "../images/Art/2020.7.23.png";
import Judaru from "../images/Art/2020.7.13.jpg";
import FD4 from "../images/Art/2020.6.194.png";
import FD3 from "../images/Art/2020.6.193.png";
import FD2 from "../images/Art/2020.6.192.png";
import FD1 from "../images/Art/2020.6.191.png";
import Victini from "../images/Art/2020.6.18.jpg";
import Berukuri from "../images/Art/2020.6.11.jpg";
import Aurorus from "../images/Art/2020.6.5.jpg";
import Sandshrew from "../images/Art/2020.4.4s.jpg";
import Wooper from "../images/Art/2020.4.4.jpg";
import Inuyasha from "../images/Art/2020.3.15.png";
import SooWon from "../images/Art/2020.2.13.png";
import AnimeGirl2 from "../images/Art/2020.2.7.png";
import SooWon2 from "../images/Art/2020.1.17.png";
import Portrait from "../images/Art/2020.1.2.png";
import Bounsweet from "../images/Art/2019.10.10zb.jpg";
import Solosis from "../images/Art/2019.10.10s.jpg";
import Cottonee from "../images/Art/2019.10.10.jpg";
import Snorlax2 from "../images/Art/2019.10.5s.jpg";
import Zeraora from "../images/Art/2019.10.5.jpg";
import Vivillon from "../images/Art/2019.9.29b.jpg";
import Vulpix from "../images/Art/2019.9.29.jpg";
import Gengar from "../images/Art/2019.9.20.jpg";
import Cyndaquil from "../images/Art/2019.8.27.jpg";
import Furret from "../images/Art/2019.8.26.jpg";
import Ampharos from "../images/Art/2019.8.25.jpg";
import Lanturn from "../images/Art/2019.8.24l.jpg";
import Skitty from "../images/Art/2019.8.24.jpg";
import Togepi from "../images/Art/2019.8.22.jpg";
import Azurill from "../images/Art/2019.8.21.jpg";
import Cinccino from "../images/Art/2019.8.20r.jpg";
import MC from "../images/Art/2019.8.20d.jpg";
import Minccino from "../images/Art/2019.8.20.jpg";
import Emolga from "../images/Art/2019.8.19.jpg";
import Eevee from "../images/Art/2019.8.18.jpg";
import Piplup from "../images/Art/2019.8.16.jpg";
import Pikachu from "../images/Art/2019.8.15p.jpg";
import Misdreavus from "../images/Art/2019.8.15.jpg";
import Shaymin from "../images/Art/2019.8.14.jpg";
import Kazama from "../images/Art/2019.7.20.jpg";
import AnimeBoy5 from "../images/Art/2019.6.23.jpg";
import AnimeBoy6 from "../images/Art/2019.5.18.jpg";
import Kija from "../images/Art/2019.4.9.jpg";
import AnimeBoy7 from "../images/Art/2019.3.27.jpg";
import AnimeBoy8 from "../images/Art/2019.3.25.jpg";
import AnimeBoy9 from "../images/Art/2019.3.24.jpg";
import AnimeGirls from "../images/Art/2019.3.23.jpg";
import Asuna from "../images/Art/2019.3.11.jpg";
import Hijikata from "../images/Art/2019.1.31.jpg";
import ShinAh from "../images/Art/2019.1.28.jpg";
import AnimeBoy10 from "../images/Art/2019.1.25.jpg";
import Tiger from "../images/Art/2018.10.5.png";
import Red from "../images/Art/2017.3.30.jpg";
import Rose from "../images/Art/2017.3.24.png";
import Killua2 from "../images/Art/2017.2.17.jpg";

export const Interests = () => {
    return (
        <Box sx={{ margin: 10 }} id="interests">
            <div className="header">
                <h1>Interests</h1>
            </div>
            <div className="gallery-container">

                {/* Images are sorted based on year so search Y20XX */}
                <ul id="categories" class="clr">
                    {/* Y2021 */}
                    <li>
                        <div>
                            <img id="myModal" src={Killjoy} alt="Killjoy" />
                            <h1>Killjoy (Valorant)</h1>
                            <p>2021.7.20 Pencil Sketch</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={Lion}
                                alt="Father Lion and Daughter Hugging"
                            />
                            <h1>Father's Day</h1>
                            <p>2021.6.19 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={AnimeGirl}
                                alt="Anime Girl in School Uniform"
                            />
                            <h1>Anime Girl in Uniform</h1>
                            <p>2021.3.20 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Tired} alt="Girl Head Down on Desk" />
                            <h1>Tired</h1>
                            <p>2021.1.29 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li></li>
                    <li class="pusher"></li>
                    {/* Y2020 */}
                    <li>
                        <div>
                            <img
                                src={AnimeGirlCoffee}
                                alt="Anime Girl with Coffee"
                            />
                            <h1>Softly Waiting</h1>
                            <p>2020.12.27 Ink Drawing (Red)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={BalloonGirl} alt="Girl with Balloons" />
                            <h1>Balloon Girl</h1>
                            <p>2020.12.6 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Hisoka} alt="Hisoka Morow" />
                            <h1>Hisoka (Hunter X Hunter)</h1>
                            <p>2020.11.27 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={AnimeMan}
                                alt="Anime Man with Finger to Lips"
                            />
                            <h1>Day 11 - Inktober (Disgusting)</h1>
                            <p>2020.10.11 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Inktober9} alt="Killua Zoldyck" />
                            <h1>Day 9 - Inktober (Throw) (Killua - Hunter X Hunter)</h1>
                            <p>2020.10.9 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Inktober8} alt="Rin Matsuoka" />
                            <h1>Day 8 - Inktober (Teeth) (Rin - Free!)</h1>
                            <p>2020.10.8 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Inktober7} alt="Dresses" />
                            <h1>Day 7 - Inktober (Fancy)</h1>
                            <p>2020.10.7 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Inktober6} alt="Pikachu" />
                            <h1>Day 6 - Inktober (Rodent) (Pikachu - Pokémon)</h1>
                            <p>2020.10.6 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Inktober5} alt="Knives" />
                            <h1>Day 5 - Inktober (Blade)</h1>
                            <p>2020.10.5 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Inktober4} alt="Man Singing" />
                            <h1>Day 4 - Inktober (Radio)</h1>
                            <p>2020.10.4 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Inktober3} alt="Levi Ackerman" />
                            <h1>Day 3 - Inktober (Bulky) (Levi - Attack on Titan)</h1>
                            <p>2020.10.3 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Inktober2} alt="Wisp" />
                            <h1>Day 2 - Inktober (Wisp)</h1>
                            <p>2020.10.2 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Inktober1} alt="Fish" />
                            <h1>Day 1 - Inktober (Fish)</h1>
                            <p>2020.10.1 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={FatherDaughter}
                                alt="Father and Daughter Hugging"
                            />
                            <h1>Dad's Birthday</h1>
                            <p>2020.9.30 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Calligraphy} alt="Happy Anniversary" />
                            <h1>Calligraphy Card</h1>
                            <p>2020.9.22 Ink Printing (Color)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={CalligraphyM} alt="Mom and Dad" />
                            <h1>Calligraphy Card</h1>
                            <p>2020.9.22 Ink Printing (Color)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Touch} alt="Fingers Touching" />
                            <h1>Hold Me</h1>
                            <p>2020.9.4 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={AnimeBoy}
                                alt="Anime Boy in Leather Jacket"
                            />
                            <h1>Leather Chip</h1>
                            <p>2020.8.28 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Snorlax} alt="Pikachu Eating Apple" />
                            <h1>Pikachu in Snorlax Hoodie (Pokémon)</h1>
                            <p>2020.8.26 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={AnimeBoy2} alt="Anime Boy Smoking" />
                            <h1>Raining Smoke</h1>
                            <p>2020.8.20 Ink Drawing (Blue)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Killua} alt="Killua Zoldyck Sketch" />
                            <h1>Killua (Hunter X Hunter)</h1>
                            <p>2020.8.16 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={AnimeBoy3} alt="Anime Boy" />
                            <h1>Anime Boy</h1>
                            <p>2020.8.14 Pencil Sketch</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={AnimeBoy4}
                                alt="Thinking Anime Boy (Katsuki Bakugo)"
                            />
                            <h1>Bakugo (My Hero Academia)</h1>
                            <p>2020.8.11 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={HeadphoneGirl} alt="Headphone Girl" />
                            <h1>Headphone Girl</h1>
                            <p>2020.7.25 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={CryingGirl} alt="Crying Girl" />
                            <h1>Crying Girl</h1>
                            <p>2020.7.23 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={Judaru}
                                alt="Chibi Anime Boy (Judaru)"
                            />
                            <h1>Judar (Hepburn: Magi)</h1>
                            <p>2020.7.13 Pencil Sketch</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={FD4}
                                alt="Father and Daughter Series 4"
                            />
                            <h1>Happy Father's Day - 4</h1>
                            <p>2020.6.19 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={FD3}
                                alt="Father and Daughter Series 3"
                            />
                            <h1>Happy Father's Day - 3</h1>
                            <p>2020.6.19 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={FD2}
                                alt="Father and Daughter Series 2"
                            />
                            <h1>Happy Father's Day - 2</h1>
                            <p>2020.6.19 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={FD1}
                                alt="Father and Daughter Series 1"
                            />
                            <h1>Happy Father's Day - 1</h1>
                            <p>2020.6.19 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Victini} alt="Victini Pokémon" />
                            <h1>Victini (Pokémon)</h1>
                            <p>2020.6.18 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={Berukuri}
                                alt="Anime Man (Berukūri Shinseshisu Wan)"
                            />
                            <h1>Bercouli (Sōdo Āto Onrain)</h1>
                            <p>2020.6.11 Pencil Sketch</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Aurorus} alt="Aurorus Pokémon" />
                            <h1>Aurorus (Pokémon)</h1>
                            <p>2020.6.5 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Sandshrew} alt="Sandshrew Pokémon" />
                            <h1>Sandshrew (Pokémon)</h1>
                            <p>2020.4.4 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Wooper} alt="Wooper Pokémon" />
                            <h1>Wooper (Pokémon)</h1>
                            <p>2020.4.4 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Inuyasha} alt="Inuyasha" />
                            <h1>Inuyasha (InuYasha)</h1>
                            <p>2020.3.15 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={SooWon}
                                alt="King Soo-Won with Eagle"
                            />
                            <h1>Soo-Won (Akatsuki No Yona)</h1>
                            <p>2020.2.13 Ink Drawing (Blue)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={AnimeGirl2} alt="Portrait of Anime Girl" />
                            <h1>Anime Girl Portrait</h1>
                            <p>2020.2.7 Ink Drawing (Blue)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={SooWon2} alt="Anime Boy (Soo-Won)" />
                            <h1>Soo-Won (Akatsuki No Yona)</h1>
                            <p>2020.1.17 Pencil Sketch</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Portrait} alt="Self-Portrait" />
                            <h1>Self Portrait</h1>
                            <p>2020.1.2 Pencil Sketch</p>
                        </div>
                    </li>
                    <li></li>
                    <li class="pusher"></li>
                    {/* Y2019 */}
                    <li>
                        <div>
                            <img src={Bounsweet} alt="Bounsweet Pokémon" />
                            <h1>Bounsweet (Pokémon)</h1>
                            <p>2019.10.10 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Solosis} alt="Solosis Pokémon" />
                            <h1>Solosis (Pokémon)</h1>
                            <p>2019.10.10 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Cottonee} alt="Cottonee Pokémon" />
                            <h1>Cottonee (Pokémon)</h1>
                            <p>2019.10.10 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Snorlax2} alt="Snorlax Pokémon" />
                            <h1>Snorlax (Pokémon)</h1>
                            <p>2019.10.5 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Zeraora} alt="Zeraora Pokémon" />
                            <h1>Zeraora (Pokémon)</h1>
                            <p>2019.10.5 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Vivillon} alt="Vivillon Pokémon" />
                            <h1>Vivillon (Pokémon)</h1>
                            <p>2019.9.29 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Vulpix} alt="Vulpix Pokémon" />
                            <h1>Vulpix (Pokémon)</h1>
                            <p>2019.9.29 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Gengar} alt="Gengar Pokémon" />
                            <h1>Gengar (Pokémon)</h1>
                            <p>2019.9.20 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Cyndaquil} alt="Cyndaquil Pokémon" />
                            <h1>Cyndaquil (Pokémon)</h1>
                            <p>2019.8.27 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Furret} alt="Furret Pokémon" />
                            <h1>Furret (Pokémon)</h1>
                            <p>2019.8.26 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Ampharos} alt="Ampharos Pokémon" />
                            <h1>Ampharos (Pokémon)</h1>
                            <p>2019.8.25 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Lanturn} alt="Lanturn Pokémon" />
                            <h1>Lanturn (Pokémon)</h1>
                            <p>2019.8.24 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Skitty} alt="Skitty Pokémon" />
                            <h1>Skitty (Pokémon)</h1>
                            <p>2019.8.24 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Togepi} alt="Togepi Pokémon" />
                            <h1>Togepi (Pokémon)</h1>
                            <p>2019.8.22 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Azurill} alt="Azurill Pokémon" />
                            <h1>Azurill (Pokémon)</h1>
                            <p>2019.8.21 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Cinccino} alt="Cinccino Pokémon" />
                            <h1>Cinccino (Pokémon)</h1>
                            <p>2019.8.20 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={MC}
                                alt="Minccino and Cinccino Pokémon"
                            />
                            <h1>Minccino and Cinccino (Pokémon)</h1>
                            <p>2019.8.20 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Minccino} alt="Minccino Pokémon" />
                            <h1>Minccino (Pokémon)</h1>
                            <p>2019.8.20 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Emolga} alt="Emolga Pokémon" />
                            <h1>Emolga (Pokémon)</h1>
                            <p>2019.8.19 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Eevee} alt="Eevee Pokémon" />
                            <h1>Eevee (Pokémon)</h1>
                            <p>2019.8.18 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Piplup} alt="Piplup Pokémon" />
                            <h1>Piplup (Pokémon)</h1>
                            <p>2019.8.16 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Pikachu} alt="Pikachu Pokémon" />
                            <h1>Pikachu (Pokémon)</h1>
                            <p>2019.8.15 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Misdreavus} alt="Misdreavus Pokémon" />
                            <h1>Misdreavus (Pokémon)</h1>
                            <p>2019.8.15 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Shaymin} alt="Shaymin Pokémon" />
                            <h1>Shaymin (Pokémon)</h1>
                            <p>2019.8.14 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={Kazama}
                                alt="Gold Hair Anime Boy (Chikage Kazama)"
                            />
                            <h1>Kazama (Hakuouki)</h1>
                            <p>2019.7.20 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={AnimeBoy5} alt="Man in Leather Jacket" />
                            <h1>Anime Boy</h1>
                            <p>2019.6.23 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={AnimeBoy6}
                                alt="Anime Boy with Headphones"
                            />
                            <h1>Headphone Anime Boy V2</h1>
                            <p>2019.5.18 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={Kija}
                                alt="Baby Kija (Kija Hakuryuu)"
                            />
                            <h1>Kija (Akatsuki No Yona)</h1>
                            <p>2019.4.9 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={AnimeBoy7}
                                alt="Anime Boy with Headphones"
                            />
                            <h1>Headphone Anime Boy</h1>
                            <p>2019.3.27 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={AnimeBoy8} alt="Casual Anime Boy " />
                            <h1>Anime Boy</h1>
                            <p>2019.3.25 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={AnimeBoy9} alt="Anime Boy Smoking" />
                            <h1>Smoking Anime Boy</h1>
                            <p>2019.3.24 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={AnimeGirls} alt="Two Anime Girls" />
                            <h1>Pair of Anime Girls Zen</h1>
                            <p>2019.3.23 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Asuna} alt="Yuuki Asuna" />
                            <h1>Asuna (Sword Art Online)</h1>
                            <p>2019.3.11 Ink Drawing (Black)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={Hijikata}
                                alt="Anime Boy (Toshizō Hijikata)"
                            />
                            <h1>Hijikata (Hakuouki)</h1>
                            <p>2019.1.31 Pencil Sketch</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={ShinAh}
                                alt="Anime Boy (Shin-Ah Seiryuu)"
                            />
                            <h1>Shin-Ah (Akatsuki No Yona)</h1>
                            <p>2019.1.28 Pencil Sketch</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={AnimeBoy10}
                                alt="Anime Boy Holding Puppy"
                            />
                            <h1>~ Happy Birthday Conner ~</h1>
                            <p>2019.1.25 Pencil Sketch</p>
                        </div>
                    </li>
                    <li></li>
                    <li class="pusher"></li>
                    {/* Y2018 */}
                    <li>
                        <div>
                            <img src={Tiger} alt="Tiger Eyes" />
                            <h1>Tiger Eyes</h1>
                            <p>2018.10.5 Pencil Sketch</p>
                        </div>
                    </li>
                    <li></li>
                    <li class="pusher"></li>
                    {/* <li></li>
        <li class="pusher"></li> */}
                    {/* Y2017 */}
                    <li>
                        <div>
                            <img src={Red} alt="Red Hair Anime Boy" />
                            <h1>Red Hair Anime Boy</h1>
                            <p>2017.3.30 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Rose} alt="Red Rose" />
                            <h1>Red Rose</h1>
                            <p>2017.3.24 Pencil Crayon Art</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={Killua2}
                                alt="Killua Zoldyck Cover 17"
                            />
                            <h1>Killua (Hunter X Hunter)</h1>
                            <p>2017.2.17 Pencil Crayon Art</p>
                        </div>
                    </li>
                </ul>
            </div>
        </Box>
    );
}
