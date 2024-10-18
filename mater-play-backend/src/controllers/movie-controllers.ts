import { Controller, Get, HttpException, HttpStatus, Param, ParseUUIDPipe } from "@nestjs/common";
import { Movie } from "src/entities/movie-entity";
import { MovieService } from "src/services/movie-servece";

@Controller('movies')
export class MovieController{
    
    constructor(
        private service: MovieService
    ){}

    @Get()
    fundAll(): Promise<Movie[]> {
        return this.service.findAll();
    }

    @Get(':id')
    async fundById(@Param('id', new ParseUUIDPipe())id: string):Promise<Movie> {
        const found = await this.service.findById(id);

        console.log(found);

        if(!found) {
            throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
        }

        return found;
    }
}