import { render, screen } from "@testing-library/react";
import MovieSearchBar from "./components/MovieSearchBar";

describe("MovieSearchBar", () => {
    it("should be render in the dom", () => {
        render(<MovieSearchBar />);
        const wrapper = screen.getByTestId("movies-bank")
        expect(wrapper.classList.contains("movies-bank")).toBe(true);
    })
})