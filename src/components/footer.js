import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)`,
                padding: '0.8rem 2rem',
            }}
        >
            <Typography textAlign={"center"}>Made with ❤️ and code by <a href="https://blaze2004.bio.link" target={"_blank"} rel="noreferrer">Shubham Tiwari</a></Typography>
        </Box>
    )
}