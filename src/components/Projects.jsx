import React from 'react'
import { ProjectCard } from './ProjectCard'
import { Box } from '@mui/material'

import vpsa from '../images/project-vpsa.png'
import cfm from '../images/project-cfm.png'
import bot from '../images/project-bot.png'
import agario from '../images/project-agario.png'
import blog from '../images/project-blog.png'
import project from '../images/project-project.png'


export const Projects = () => {
    return (
        <Box sx={{ margin: 10 }}>
            <div className="header">
                <h1>Projects</h1>
            </div>
            <Box
                sx={{
                    display: "grid",
                    gap: "3rem",
                    width: "100%",
                    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                }}
            >
                <ProjectCard image={vpsa} title="VPSA" skills={["React", "TypeScript", "Express", "GraphQL", "Apollo", "Docker"]}
                    link="https://pocket-sage.com/" description={<> A platform where Valorant players can showcase and certify their gaming skills. By leveraging Riot Sign On (SSO) for secure user authentication and integration with in-game profiles, VPSA allows players to receive personalized PDF certificates upon successful skill validation. It hosts a community of around 50 members. Click here to learn more: <a href="https://pocket-sage.com/" target="_blank" rel="noopener noreferrer">
                        https://pocket-sage.com/
                    </a> </>
                    } />

                <ProjectCard image={cfm} title="Stock Portfolio Generator" skills={["Python", "Jupyter", "numpy", "pandas", "matplotlib"]} link="https://github.com/AndreSlavescu/CFM-Group-Assignment" description="A risk-minimized portfolio was carefuly curated through considerations including smallest standard deviation, expected returns, lowest beta coefficients and correlation. The goal was to prioritize stability and maintaing a cap of no more than 35% of any stock and strategically invest $100,000 USD. The resulting portfolio was intricately indexed with Ticker, Price, Shares, Value, and Weight, embodying a balanced and diversified investment approach." />

                <ProjectCard image={bot} title="Trading Bot" skills={["Python", "Flask", "Figma", "NLP", "API"]} link="https://devpost.com/software/profiters-trading-bot" description="A Trading Bot focused around the sentimental analysis (natural language processing) of the top stocks from the S&P 500 from Twitter. The stocks that gain positive attention on Twitter are then analyzed through comparing the 9-days and 21-days moving average in order to determine whether the stock should be recommended to be purchased. The higher the 9-day moving averaged compared to the 21-day corresponds to a greater upward trend in price." />

                <ProjectCard image={agario} title="Agar.io" skills={["Java", "AI", "OOP"]} description="A Java-based game crafted utilizing object-oriented programming, where players manipulate circles with the objective of growing in size by devouring smaller circles. The design intricacies extended to the implementation of artificial intelligence for the game's bots. In this system, larger circles were programmed to chase the nearest smaller circles, while the smaller circles were endowed with the ability to actively dodge and evade their larger counterparts. Their movements were also provided with 'vision' to detect the nearest circle in their vicinity." />

                <ProjectCard image={blog} title="Blog" skills={["React", "Figma", "MongoDB"]} description="A dynamic blog designed with Figma, implemented through React and powered by MongoDB. React's component-based architecture ensures a responsive and interactive user experience, while Figma's collaborative design tools bring the blog's visual identity to life. MongoDB serves as the robust backend, handling data management seamlessly." />

                <ProjectCard image={project} title="Old Portfolio" skills={["React", "MongoDB", "PHP", "SQL"]} link="https://zcai-tech-r3jfi.ondigitalocean.app/" description="A prior portfolio created in React exploying it's component-based structure. I implemented interative features to enhance user experience and foster engagement while allowing for seamless navigation. To imbue the website with dynamism and efficiency, I strategically leveraged MongoDB for flexible data storage, PHP for server-side scripting, and SQL for optimized database management. Additionally, I incorporated responsive design principles, ensuring that the portfolio maintained its visual appeal and functionality across a diverse range of devices, from desktops to tablets and smartphones." />
            </Box>
        </Box>
    )
}
