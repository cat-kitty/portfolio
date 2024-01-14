import React from 'react'
import { ProjectCard } from './ProjectCard'
import linkedin from '../images/linkedin.jpg'
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
                    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
                }}
            >
                <ProjectCard image={vpsa} title="VPSA" skills={["React", "MongoDB", "TypeScript", "Express", "GraphQL", "Apollo", "Docker"]} description="IpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloreloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmonIpsloredmon" />
                <ProjectCard image={cfm} title="Stock Portfolio Generator" skills={["Python", "Jupyter", "numpy", "pandas", "matplotlib"]} />
                <ProjectCard image={bot} title="Trading Bot" skills={["Python", "Flask", "Figma", "NLP", "API"]} />
                <ProjectCard image={agario} title="Agar.io" skills={["Java", "AI", "OOP"]} description="    Used Java with object-oriented programming to create a game where players control circles and eat smaller circles to become the biggest circle
    Designed and implemented AI for the bots so that bigger circles would chase the closest smaller circles while smaller circles will try to actively dodge" />
                <ProjectCard image={blog} title="Blog" skills={["React", "MongoDB"]} />
                <ProjectCard image={project} title="Old Portfolio" skills={["React", "MongoDB"]} />
            </Box>
        </Box>
    )
}
