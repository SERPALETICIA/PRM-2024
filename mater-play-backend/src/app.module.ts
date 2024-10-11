import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie-entity';
import { MovieController } from './controllers/movie-controllers';
import { MovieService } from './services/movie-servece';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
    }),
    TypeOrmModule.forRoot({
      type        : 'postgres',
      host        :  process.env.DB_HOST,
      port        :  + process.env.DB_PORT,
      database    :  process.env.DB_NAME,
      username    :  process.env.DB_USER,
      password    :  process.env.DB_PASS,
      entities    : [Movie],
      synchronize : true,
    }),
    TypeOrmModule.forFeature([Movie]),
  ],
  controllers: [MovieController],
  providers: [MovieService],
})
export class AppModule {}
