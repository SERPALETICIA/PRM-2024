
import { AppBar, Box, Button, Container, styled, Toolbar, Typography } from "@mui/material";

const MenuButton = styled(Button)({
    color:'white',
    
})

function Header(){
    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <Typography variant="h6"
                    >
                        Mater Play 
                    </Typography>
                    <Box
                    sx={{
                        paddingLeft: '1rem'
                    }}
                    >
                        <MenuButton variant="text" disabled>Todos</MenuButton>
                        <MenuButton variant="text">Series</MenuButton>
                        <MenuButton variant="text">Todos</MenuButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;