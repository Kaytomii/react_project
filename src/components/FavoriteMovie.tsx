import type { MyMovieType } from "../types/MyMovieType";

function FavoriteMovie(props: { movie: MyMovieType }) {
    return (
        <div>
            <p>Movie Title: <b>{props.movie.title}</b></p>
            <p>Director: {props.movie.director}</p>
            <p>Release Year: {props.movie.release_year}</p>
            <p>Studio: {props.movie.studio}</p>
        </div>
    );
}
export { FavoriteMovie };
