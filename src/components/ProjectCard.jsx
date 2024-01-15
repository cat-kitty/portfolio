import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

export const ProjectCard = ({ image, skills, title, description, link }) => {
    return (
        <Card sx={{ maxHeight: 600, boxShadow: '10px 10px 10px 10px #387eff6b', zIndex: 10000000, display: "flex", flexDirection: "column" }}>
            <CardActionArea component="a" href={link} target="_blank" sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                {/* <a href="https://pocket-sage.com/"></a> */}
                <CardMedia sx={{ height: 250, display: "flex", flexDirection: "column" }}>
                    <img src={image} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                </CardMedia>
                <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{ wordWrap: "break-word" }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "flex-end", flexGrow: 1 }}>{skills.map((skill) => (<Box>{skill}</Box>))}</Box>
                </CardContent>
            </CardActionArea>
        </Card >
    )
}
