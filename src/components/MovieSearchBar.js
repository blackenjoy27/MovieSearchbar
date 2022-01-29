import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import axios from "axios";
import debounce from "lodash.debounce";
import MovieInfo from "./MovieInfo";


const MovieSearchBar = (props) => {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (keyword.trim()) {
            debounce(() => {
                setIsLoading(true);
                axios.post("http://localhost:4000/api/movies", { keyword })
                    .then(({ data }) => {
                        setIsLoading(false);
                        setResults(data);
                    })
            }, 2000)();
        } else {
            setResults([]);
        }
    }, [keyword])
    const handleChange = (e) => {
        setKeyword(e.target.value);
    }
    const handleClick = (title) => {
        window.open(`https://www.google.com/search?q=${title}`).focus();
    }
    return (
        <section className="movies-bank">
            <TextField
                className="movie_keyword_searchbar"
                id="standard-basic"
                variant="standard"
                placeholder="I'm Looking For ..."
                name="keyword"
                value={keyword}
                onChange={handleChange}
            />
            {isLoading ? <div className="loader" /> :
                <div className="movies_results_found">
                    {results.map(movie => {
                        return <MovieInfo movie={movie} handleClick={handleClick} />
                    })}
                </div>}
        </section>
    )
}

export default MovieSearchBar;