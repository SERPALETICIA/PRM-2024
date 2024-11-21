import { Module } from "@nestjs/common";
import { CategoryService } from "./categoryservice";
import { CategoryController } from "./category.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./category.entities";


@Module({
    imports:[TypeOrmModule.forFeature([Category])],
    providers:[CategoryService],
    controllers: [CategoryController],

})
export class CategoryModule {}