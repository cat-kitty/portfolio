import React from "react";
import { Box, Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    <Box>
      <div className="footer-container">
        <small className="website-rights">Kitty Cai © 2024</small>
        <div className="social-icons">
          <Button
            href="https://www.facebook.com/kitty.cai.zhirong/"
            target="_blank"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </Button>
          <Button
            href="https://www.instagram.com/kitty8197/"
            target="_blank"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </Button>
          <Button
            className="social-icon-Button youtube"
            href="https://www.youtube.com/channel/UCTtk542dl8URUg_CffP70bQ"
            target="_blank"
            aria-label="YouTube"
          >
            <YouTubeIcon />
          </Button>
          <Button
            className="social-icon-Button LinkedIn"
            href="https://www.linkedin.com/in/kitty-cai/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </Button>
          <Button
            className="social-icon-Button github"
            href="https://github.com/cat-kitty"
            target="_blank"
            aria-label="GitHub"
          >
            < GitHubIcon />
          </Button>
        </div>
      </div>
    </Box>
  );
};

