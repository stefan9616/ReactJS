export default function Movie({
    id,
    title,
    year,
    plot,
    posterUrl,
    director,
    onMovieDelete,
    onMovieSelect,
}) {

    return(
        <article>
            <h1>{title} {year}</h1>
            <main>
                <img src={posterUrl} alt="Pic" />
                <p>Description: {plot}</p>
            </main>
                <p>Director: {director}</p>
                <button onClick={() => onMovieDelete(id)}>Delete</button>
                <button onClick={() => onMovieSelect(id)}>Select</button>
                
        </article>
    );
}