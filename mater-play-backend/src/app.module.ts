import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies/movie-entity';
import { Category } from './categories/category.entities';
import { CategoryController } from './categories/category.controller';
import { MovieController } from './movies/movie-controllers';
import { CategoryService } from './categories/categoryservice';
import { MovieService } from './movies/movie-servece';
import { CategoryModule } from './categories/category-module';
import { MoviesModule } from './movies/movies-module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      synchronize: true,
      autoLoadEntities: true,
    }),
    CategoryModule,
    MoviesModule,
  ],
})
export class AppModule {}