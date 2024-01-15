import React from 'react'
import { Box } from '@mui/system';
import "../App.css";
import './Work.css';
import { Card, Paper, useTheme } from '@mui/material';
// import { blue, red } from '@mui/material/colors';

// export const FunnyPaper = (props) => {
//     const theme = useTheme();

//     const backgroundColor = theme.palette.mode === 'dark' ? 'green' : 'blue';
//     return (
//         <Paper

//             {...props}
//             sx={{
//                 backgroundColor,
//             }}
//         />
//     );
// }

// export const PurplePaper = (props) => {
//     const theme = useTheme();

//     const backgroundColor = theme.palette.mode === 'dark' ? '#53358C' : '#e2daf1';
//     return (
//         <Paper
//             sx={{
//                 backgroundColor,
//             }}
//             {...props}
//         />
//     );
// }

// export const PurplePaper = (props) => {
//     const theme = useTheme();

//     const backgroundColor = theme.palette.mode === 'dark' ? '#53358C' : '#e2daf1';
//     return (
//         <Paper
//             sx={{
//                 backgroundColor,
//                 ...props.sx, // include any additional styles passed through props
//             }}
//             {...props}
//         />
//     );
// }

export const Work = () => {
    const theme = useTheme();
    return (
        <Box className="aboutsection" sx={{ margin: 10, position: "relative" }} id="work">
            <Box className="header">
                <h1>Work Experience</h1>
            </Box>
            <Box class="page" data-uia-timeline-skin="3" data-uia-timeline-adapter-skin-3="ui-card-skin-#1">
                <Box class="uia-timeline">
                    <Box class="uia-timeline__container">
                        <Box class="uia-timeline__line"></Box>
                        <Box class="uia-timeline__annual-sections">
                            <span class="uia-timeline__year">2023</span>
                            <Box class="uia-timeline__groups">

                                <section class="uia-timeline__group">
                                    <Paper className="uia-timeline__point uia-card" data-uia-card-skin="1" data-uia-card-mod="1">
                                        <Paper className="uia-card__container">
                                            <Box className="uia-card__intro">
                                                <Paper className="uia-card__time" sx={{
                                                    backgroundColor: theme.palette.mode === 'dark' ? "#ffffff14" : "#f0f0f0"
                                                }}>
                                                    <time datetime="2023-10">October 2023</time>
                                                    <span className="uia-card__time-divider" aria-hidden="true"></span>
                                                    <time datetime="2024-01">January 2024</time>
                                                </Paper>

                                                <h3 id="timeline-demo-1-heading-2" class="ra-heading"> Course Assistant @ University of Waterloo</h3>


                                            </Box>
                                            <Box className="uia-card__body">
                                                <Box className="uia-card__description">
                                                    <p> Part-Time </p>
                                                    <p> Course: Introduction to Financial Markets and Data Analytics (CFM 101) </p>
                                                    <ul>
                                                        <li>Evaluated student papers, providing detailed and constructive feedback to enhance learning outcomes, while maintaining consistent grading standards and meeting strict deadlines </li>
                                                    </ul>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Paper>
                                </section>

                                <section class="uia-timeline__group">
                                    <Paper className="uia-timeline__point uia-card" data-uia-card-skin="1" data-uia-card-mod="1">
                                        <Paper className="uia-card__container" sx={{
                                            backgroundColor: theme.palette.mode === 'dark' ? "#9476cb" : "#e2daf1"
                                        }} >
                                            <Box class="uia-card__intro">
                                                <Paper className="uia-card__time" sx={{
                                                    backgroundColor: theme.palette.mode === 'dark' ? "#ffffff14" : "#f0f0f0"
                                                }}>
                                                    <time datetime="2023-08">August 2023</time>
                                                    <span class="uia-card__time-divider" aria-hidden="true"></span>
                                                    <time datetime="2023-12">December 2023</time>
                                                </Paper>
                                                <h3 id="timeline-demo-1-heading-2" class="ra-heading"> Software Developer @ Milliman </h3>

                                            </Box>
                                            <Box class="uia-card__body">
                                                <Box class="uia-card__description">
                                                    <p> Co-op </p>
                                                    <ul>
                                                        <li>Leveraged Visual Studio and C# to implement a Factory Pattern to enhance the efficiency of storing historical market data at the end of each trading day by 19%</li>
                                                        <li>Aggregated stock data from market sources including Bloomberg, Reuters, and Options, covering 300+ stocks with daily refreshes enabling traders to execute algorithms and analyze patterns effectively</li>
                                                        <li>Resolved bugs and crafted comprehensive unit tests along with black box and white box testing methodologies to ensure robust software functionality</li>
                                                    </ul>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Paper>
                                </section>

                                <section class="uia-timeline__group">
                                    <Paper className="uia-timeline__point uia-card" data-uia-card-skin="1" data-uia-card-mod="1">
                                        <Paper className="uia-card__container">
                                            <Box class="uia-card__intro">
                                                <Paper className="uia-card__time" sx={{
                                                    backgroundColor: theme.palette.mode === 'dark' ? "#ffffff14" : "#f0f0f0"
                                                }}>
                                                    <time datetime="2023-05">May 2023</time>
                                                    <span class="uia-card__time-divider" aria-hidden="true"></span>
                                                    <time datetime="2023-07">July 2023</time>
                                                </Paper>

                                                <h3 id="timeline-demo-1-heading-2" class="ra-heading"> Compliance Analyst @ Bitbuy </h3>

                                            </Box>
                                            <Box class="uia-card__body">
                                                <Box class="uia-card__description">
                                                    <p> Part-Time </p>
                                                    <ul>
                                                        <li> Crafted comprehensive Suspicious Transaction Reports (STR) encompassing investment scams, recovery scams, romance scams, and activities within the darknet </li>
                                                        <li> Executed in-depth investigations into suspicious transactions, employing Chainalysis for internal inquiries and scrutinizing scam websites and dubious user profiles </li>
                                                        <li> Submitted meticulously detailed STRs via FINTRAC's platform, ensuring compliance with Canadian regulatory standards</li>
                                                    </ul>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Paper>
                                </section>

                                <section class="uia-timeline__group">
                                    <Paper className="uia-timeline__point uia-card" data-uia-card-skin="1" data-uia-card-mod="1">
                                        <Paper className="uia-card__container" style={{ backgroundColor: '#e2daf1' }}>
                                            <Box class="uia-card__intro">
                                                <h3 id="timeline-demo-1-heading-2" class="ra-heading"> Data Science Analyst @ Milliman </h3>

                                                <Paper class="uia-card__time" sx={{
                                                    backgroundColor: theme.palette.mode === 'dark' ? "#ffffff14" : "#f0f0f0"
                                                }}>
                                                    <time datetime="2023-01">January 2023</time>
                                                    <span class="uia-card__time-divider" aria-hidden="true"></span>
                                                    <time datetime="2023-04">April 2023</time>
                                                </Paper>
                                            </Box>
                                            <Box class="uia-card__body">
                                                <Box class="uia-card__description">
                                                    <p> Co-op </p>
                                                    <ul>
                                                        <li> Conducted analysis of collected data to identify patterns and trends in order to select features from a pool of 64,000 and performed data cleansing to prepare the data for modelling to assess clients' inclination towards purchasing an annuity</li>
                                                        <li>Constructed flat files that were optimized for ML algorithms to facilitate model training and testing</li>
                                                        <li>Analyzed census data, built and tested 10,000+ ML models, and developed an effective solution that provided insightful analysis and predictions</li>
                                                    </ul>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Paper>
                                </section>
                            </Box>
                        </Box>


                        <Box class="uia-timeline__annual-sections">
                            <span class="uia-timeline__year">2022</span>
                            <Box class="uia-timeline__groups">

                                <section class="uia-timeline__group">
                                    <Paper className="uia-timeline__point uia-card" data-uia-card-skin="1" data-uia-card-mod="1">
                                        <Paper className="uia-card__container">
                                            <Box class="uia-card__intro">
                                                <h3 id="timeline-demo-1-heading-2" class="ra-heading"> Full Stack Developer and Compliance Analyst @ Bitbuy </h3>

                                                <Paper class="uia-card__time" sx={{
                                                    backgroundColor: theme.palette.mode === 'dark' ? "#ffffff14" : "#f0f0f0"
                                                }}>
                                                    <time datetime="2022-09"> September 2022</time>
                                                    <span class="uia-card__time-divider" aria-hidden="true"></span>
                                                    <time datetime="2022-12">December 2022</time>
                                                </Paper>
                                            </Box>
                                            <Box class="uia-card__body">
                                                <Box class="uia-card__description">
                                                    <p> Part-Time </p>
                                                    <ul>
                                                        <li>Designed, created, developed and deployed two Google Chrome extensions to automate work which improved efficiency by over 300 hours every month within the compliance team</li>
                                                        <li> Implemented a serverless robotic process automation using JavaScript through a state machine</li>
                                                    </ul>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Paper>
                                </section>

                                <section class="uia-timeline__group">
                                    <Paper className="uia-timeline__point uia-card" data-uia-card-skin="1" data-uia-card-mod="1">
                                        <Paper className="uia-card__container">
                                            <Box class="uia-card__intro">
                                                <h3 id="timeline-demo-1-heading-2" class="ra-heading"> Teaching Assistant @ University of Waterloo</h3>

                                                <Paper class="uia-card__time" sx={{
                                                    backgroundColor: theme.palette.mode === 'dark' ? "#ffffff14" : "#f0f0f0"
                                                }}>
                                                    <time datetime="2022-08"> August 2022</time>
                                                    <span class="uia-card__time-divider" aria-hidden="true"></span>
                                                    <time datetime="2023-01"> January 2023</time>
                                                </Paper>
                                            </Box>
                                            <Box class="uia-card__body">
                                                <Box class="uia-card__description">
                                                    <p> Part-Time </p>
                                                    <p> Course: Introduction to Financial Markets and Data Analytics (CFM 101) </p>
                                                    <ul>
                                                        <li>Developed and led interactive lab sessions, leveraging Python programming, and facilitated office hours for extra support</li>
                                                        <li>Coordinated with the instructor to develop course materials and assignments that aligned with learning objectives and industry standards</li>
                                                        <li>Created and maintained an online repository of resources and supplementary materials for the course, including practice problems, code examples, and links to relevant articles and tutorials</li>
                                                    </ul>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Paper>
                                </section>



                                <section class="uia-timeline__group">
                                    <Paper className="uia-timeline__point uia-card" data-uia-card-skin="1" data-uia-card-mod="1">
                                        <Paper className="uia-card__container" style={{ backgroundColor: '#e2daf1' }}>
                                            <Box class="uia-card__intro">
                                                <h3 id="timeline-demo-1-heading-2" class="ra-heading"> Compliance Analyst @ Bitbuy </h3>

                                                <Paper class="uia-card__time" sx={{
                                                    backgroundColor: theme.palette.mode === 'dark' ? "#ffffff14" : "#f0f0f0"
                                                }}>
                                                    <time datetime="2022-05">May 2022</time>
                                                    <span class="uia-card__time-divider" aria-hidden="true"></span>
                                                    <time datetime="2022-08">August 2022</time>
                                                </Paper>
                                            </Box>
                                            <Box class="uia-card__body">
                                                <Box class="uia-card__description">
                                                    <p> Co-op </p>
                                                    <ul>
                                                        <li>Devised proposals, analyzed adverse media cases, and presented business cases regarding risks and issues, related to the policies and procedures for legal compliance related programs</li>
                                                        <li>Prepared 20+ reports per month and fulfilled STR filing by analyzing and assessing information in transaction monitoring, conducting checks of PEPs and EDD checks for relations to AML/TF</li>
                                                        <li>Identified unusual activities and behaviours across multiple products and services to identify financial crimes and mitigate risk in accordance with AML and KYC regulatory standards</li>
                                                        <li>Delivered insightful presentations in weekly cryptocurrency news meetings, contributing to the collective understanding of the dynamic landscape</li>
                                                    </ul>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Paper>
                                </section>
                            </Box>
                        </Box>

                        <Box class="uia-timeline__annual-sections">
                            <span class="uia-timeline__year" aria-hidden="true">2021</span>
                            <Box class="uia-timeline__groups">
                                <section class="uia-timeline__group">
                                    <Paper className="uia-timeline__point uia-card" data-uia-card-skin="1" data-uia-card-mod="1">
                                        <Paper className="uia-card__container">
                                            <Box class="uia-card__intro">
                                                <h3 id="timeline-demo-1-heading-2" class="ra-heading"> Close Captioning @ Ai-Media </h3>

                                                <Paper class="uia-card__time" sx={{
                                                    backgroundColor: theme.palette.mode === 'dark' ? "#ffffff14" : "#f0f0f0"
                                                }}>
                                                    <time datetime="2021-08">August 2021</time>
                                                    <span class="uia-card__time-divider" aria-hidden="true"></span>
                                                    <time datetime="2022-09">September 2021</time>
                                                </Paper>
                                            </Box>
                                            <Box class="uia-card__body">
                                                <Box class="uia-card__description">
                                                    <p> Contract Full-Time </p>
                                                    <ul>
                                                        <li>Captioned subtitles by respeaking with Dragon NaturallySpeaking </li>
                                                        <li>Worked as a team to provide captions for university lectures</li>
                                                    </ul>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Paper>
                                </section>

                            </Box>
                        </Box>

                        <Box class="uia-timeline__annual-sections">
                            <span class="uia-timeline__year" aria-hidden="true">2019</span>
                            <Box class="uia-timeline__groups">
                                <section class="uia-timeline__group">
                                    <Paper className="uia-timeline__point uia-card" data-uia-card-skin="1" data-uia-card-mod="1">
                                        <Paper className="uia-card__container">
                                            <Box class="uia-card__intro">
                                                <h3 id="timeline-demo-1-heading-2" class="ra-heading"> Marketing Intern @ Acadium </h3>

                                                <Paper class="uia-card__time" sx={{
                                                    backgroundColor: theme.palette.mode === 'dark' ? "#ffffff14" : "#f0f0f0"
                                                }}>
                                                    <time datetime="2019-02">February 2021</time>
                                                    <span class="uia-card__time-divider" aria-hidden="true"></span>
                                                    <time datetime="2021-07">July 2021</time>
                                                </Paper>
                                            </Box>
                                            <Box class="uia-card__body">
                                                <Box class="uia-card__description">
                                                    <p> Apprenticeship </p>
                                                    <ul>
                                                        <li>Researched Google ads best practices and led a $4000/month Google advertising campaign</li>
                                                        <li>Proposed and developed advertisements using Buffer published on Facebook</li>
                                                        <li>Used demographics, marketing funnels, SEO, keyword selection to optimize ads</li>
                                                        <li>Designed logos, marketing pamphlets, ad extensions, and installed tracking pixels</li>
                                                    </ul>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Paper>
                                </section>

                            </Box>
                        </Box>


                    </Box>
                </Box>
            </Box >

        </Box >

    )
}
