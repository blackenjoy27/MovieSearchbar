import MovieSearchBar from "./MovieSearchBar"
import styled from "styled-components"

const WrapperDiv = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#C0D8C0;
    height:100vh;

`

const MovieSearchPage = () => {
    return (
        <WrapperDiv>
            <main>
                <MovieSearchBar />
            </main>
        </WrapperDiv>
    )
}

export default MovieSearchPage