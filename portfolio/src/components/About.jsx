import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import kitty from '../images/kitty.JPG'

export const About = () => {
    return (
        <Box className="aboutsection" sx={{ margin: 10, height: "100vh" }} id="about">
            <div className="header">
                <h1>About Me</h1>
            </div>
            <Paper sx={{ position: "relative", height: "65%", zIndex: "1000000", boxShadow: "0 0 2rem gray", display: "flex", alignItems: "center", justifyContent: "space-evenly", padding: "2rem" }}>
                <img className="rectangle" src={kitty} />
                <Typography sx={{ paddingLeft: "2rem" }}> I'm Kitty, a third-year student pursuing a dual degree in Computer Science and Financial Management. <br />
                    <br />
                    My skill set spans a wide spectrum, encompassing machine learning and data modelling, alongside a robust foundation in software development. I've delved into concepts like regression analysis and natural language processing. While in software development, I'm proficient in testing methodologies, and ensure the creation of clean and maintainable code through the implementation of programming principles. Moreover, I am able to develop streamlined software solutions from web frameworks and back-end development to financial modelling.
                    <br /><br />
                    The goal is to consistently deliver meaningful and impactful contributions to every team I am on; a journey marked by a relentless pursuit of knowledge, combined with hands-on experience in diverse roles within rapid and diverse environments. I am open to various opportunities and new adventures.</Typography>
            </Paper>
        </Box >
    )
}
