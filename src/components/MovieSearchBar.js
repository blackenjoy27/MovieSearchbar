import { useState, useEffect, useCallback } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import debounce from "lodash.debounce";
import MovieInfo from "./MovieInfo";

const MovieSearchBar = (props) => {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const debounceFn = useCallback(
        debounce((keyword) => {
            setIsLoading(true);
            axios
                .post("http://localhost:4000/api/movies", { keyword })
                .then(({ data }) => {
                    console.log("Trigger");
                    setIsLoading(false);
                    setResults(data);
                });
        }, 2000),
        []
    );

    useEffect(() => {
        if (keyword.trim()) {
            debounceFn(keyword);
        } else {
            setResults([]);
        }
    }, [keyword]);

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };
    const handleClick = (title) => {
        window.open(`https://www.google.com/search?q=${title}`).focus();
    };
    return (
        <section className="movies-bank" data-testid="movies-bank">
            <TextField
                className="movie_keyword_searchbar"
                id="standard-basic"
                variant="standard"
                placeholder="I'm Looking For ..."
                name="keyword"
                value={keyword}
                onChange={handleChange}
            />
            {isLoading ? (
                <div className="loader" />
            ) : (
                <div className="movies_results_found">
                    {results.map((movie) => {
                        return (
                            <MovieInfo
                                key={movie._id}
                                movie={movie}
                                handleClick={handleClick}
                            />
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default MovieSearchBar;
