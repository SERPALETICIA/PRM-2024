import { Box, Button, Container, Stack, Typography } from "@mui/material";

function HightlightSection(){
    return (
        <Box>
            <Container>
                <Stack
                direction="row"
                >
                    <img src="assests/posteres/house-of-dragons-poster.jpg" />
                    <Stack
                        sx={{

                            justifyContent: 'center'
                        }}
                    >
                        <Typography
                            variant="h4"
                        >
                            A casa do Dragão
                        </Typography>
                        <Typography
                            variant="subtitle2"
                        >
                           <span
                            style={{
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                padding: '0.2rem',
                                marginRight: '0.3rem',
                            }}
                           >
                            16
                            </span>
                            Aventura, Fantasia, Ação
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            sx={{
                                paddingTop: '2rem',

                            }}
                        >
                            Sinopse
                        </Typography>
                        <Typography
                            variant="body2"
                        >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsa esse ad possimus maiores! Dolorum architecto libero, 
                        pariatur nam repellat velit dolorem placeat sequi quam esse aspernatur, laudantium, dignissimos at!
                        </Typography>
                        <Stack
                            gap={1}
                            direction="row"
                            sx={{
                                paddingY: '1rem',
                            }}
                
                        >
                            <Button
                                variant="outlined"
                            >Assistir</Button>
                            <Button
                                 variant="outlined"
                            >Detalhes</Button>

                        </Stack>
                    </Stack>               
                </Stack>
            </Container>
        </Box>
    )

}

export default HightlightSection;