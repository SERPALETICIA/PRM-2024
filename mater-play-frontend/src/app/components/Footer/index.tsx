import { Container, IconButton, Stack, Typography } from "@mui/material"
import {Instagram, Facebook, YouTube } from '@mui/icons-material';

function Footer() {
    return (
        <footer>
            <Container
                sx={{
                    padding: '3rem'
                }}
            >
                <Typography 

                variant="overline" 
                component="p"
                textAlign="center"
                
                >

                    Mater Play 2024
                </Typography>
                <Stack
                    direction="row"
                    justifyContent="center"
                >
                    <IconButton>
                        <Instagram />
                    </IconButton>
                    <IconButton>
                        <Facebook />
                    </IconButton>
                    <IconButton>
                        <YouTube />
                    </IconButton>
                </Stack>
            </Container>
        </footer>
    )
}

export default Footer