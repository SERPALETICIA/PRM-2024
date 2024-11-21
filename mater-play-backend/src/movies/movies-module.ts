import { Module } from "@nestjs/common";
import { MovieService } from "./movie-servece";
import { MovieController } from "./movie-controllers";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Movie } from "./movie-entity";
import { Category } from "src/categories/category.entities";


@Module({
    imports:[TypeOrmModule.forFeature([Category, Movie])],
    providers:[MovieService],
    controllers: [MovieController],

})
export class MoviesModule {}