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
                    link="https://pocket-sage.com/" description="A platform where Valorant players can showcase and certify their gaming skills. By leveraging Riot Sign On (SSO) for secure user authentication and integration with in-game profiles, VPSA allows players to receive personalized PDF certificates upon successful skill validation." />

                <ProjectCard image={cfm} title="Stock Portfolio Generator" skills={["Python", "Jupyter", "numpy", "pandas", "matplotlib"]} link="https://github.com/AndreSlavescu/CFM-Group-Assignment" description="A risk-minimized portfolio was carefuly curated through considerations including smallest standard deviation, expected returns, lowest beta coefficients and correlation. The goal was to prioritize stability and maintaing a cap of no more than 35% of any stock and strategically invest $100,000 USD. The resulting portfolio was intricately indexed with Ticker, Price, Shares, Value, and Weight, embodying a balanced and diversified investment approach" />

                <ProjectCard image={bot} title="Trading Bot" skills={["Python", "Flask", "Figma", "NLP", "API"]} link="https://devpost.com/software/profiters-trading-bot" description="A Trading Bot focused around the sentimental analysis (natural language processing) of the top stocks from the S&P 500 from Twitter. The stocks that gain positive attention on Twitter are then analyzed through comparing the 9-days and 21-days moving average in order to determine whether the stock should be recommended to be purchased. The higher the 9-day moving averaged compared to the 21-day corresponds to a greater upward trend in price." />

                <ProjectCard image={agario} title="Agar.io" skills={["Java", "AI", "OOP"]} description="Used Java with object-oriented programming to create a game where players control circles and eat smaller circles to become the biggest circle
    Designed and implemented AI for the bots so that bigger circles would chase the closest smaller circles while smaller circles will try to actively dodge" />
                <ProjectCard image={blog} title="Blog" skills={["React", "Figma", "MongoDB"]} />
                <ProjectCard image={project} title="Old Portfolio" skills={["React", "MongoDB"]} />
            </Box>
        </Box>
    )
}
