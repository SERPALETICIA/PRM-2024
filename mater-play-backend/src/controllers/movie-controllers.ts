import { Controller, Get, Param } from "@nestjs/common";
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
    fundById(@Param('id')id: string):Promise<Movie> {
        return this.service.findById(id);
    }
}