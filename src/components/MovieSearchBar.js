import { useState } from "react";

const MovieSearchBar = (props) => {
    const [keyword, setKeyword] = useState("");
    const handleChange = (e) => {
        setKeyword(e.target.value);
        console.log(keyword);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(keyword);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="keyword"
                    value={keyword}
                    onChange={handleChange}
                    placeholder="I'm Looking for..."
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default MovieSearchBar;