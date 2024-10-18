import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movie')
export class Movie {
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column({ nullable: false })
    title : string;

    @Column({ nullable : false, type : 'text'})
    description : string;

    @Column({ name: 'age-rating', length: 2, nullable : false})
    ageRating : string;

    @Column({ nullable : false })
    poster : string;
}