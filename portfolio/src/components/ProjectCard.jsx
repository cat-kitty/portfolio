import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

export const ProjectCard = ({ image, skills, title, description }) => {
    return (
        <Card sx={{ maxHeight: 600, boxShadow: '10px 10px 10px #387eff6b' }}>
            <CardActionArea>
                <CardMedia sx={{ height: 400, display: "flex", flexDirection: "column" }}>
                    <img src={image} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{ wordWrap: "break-word" }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>{skills.map((skill) => (<Box>{skill}</Box>))}</Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
