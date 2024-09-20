import { Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../MovieCard";

const movies = [
    {poster: 'house-of-dragons-poster.jpg'},
    {poster: 'xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg'},
    {poster: '9h2KgGXSmWigNTn3kQdEFFngj9i.jpg'},
    {poster: 'house-of-dragons-poster.jpg'},
    {poster: 'xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg'},
    {poster: '9h2KgGXSmWigNTn3kQdEFFngj9i.jpg'},
    {poster: 'house-of-dragons-poster.jpg'},
    {poster: 'xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg'},
    {poster: '9h2KgGXSmWigNTn3kQdEFFngj9i.jpg'},
    {poster: 'house-of-dragons-poster.jpg'},
    {poster: 'xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg'},
    {poster: '9h2KgGXSmWigNTn3kQdEFFngj9i.jpg'},
];

type SectionProps= {
    title : string;
}
function Section({
    title
}: SectionProps){
    return (
    <Box>
        <Container>
            <Typography
            variant="h6"
            sx={{
                fontWeight: 400,
                paddingTop: '2rem',
            }}
            >
                { title }
            </Typography>
            <Stack
                direction="row"
                gap={0.5}
                sx={{
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                    paddingY: '1rem',
                }}
            >
                {movies.map(item => (
                    <MovieCard poster={'assests/posteres/' + item.poster}/>
                ))}

                <MovieCard poster="assests/posteres/house-of-dragons-poster.jpg" />
                <MovieCard poster="assests/posteres/xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg" />
                <MovieCard poster="assests/posteres/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg" />


            </Stack>
        </Container>
    </Box>
    )
}

export default Section;