import * as React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import services from "../../services/services";
import MovieDetails from "../MovieDetails/MovieDetails";

configure({ adapter: new Adapter() });

describe("Show Movie Details", () => {
    const data = {
        "Title": "",
        "Year": "",
        "Runtime": "",
        "Genre": "",
        "Director": "",
        "Writer": "",
        "Actors": "",
        "Language": "English, French, Spanish",
        "Poster": "",
        "imdbID": "",
        "Response": ""
    };
    const defaultProps = {
        jsonObject: data,
        searchTerm: ''
    };
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<MovieDetails {...defaultProps} />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('returns result if non-empty object', async () => {
        const dataObject = await services('', 'batman', '');
        expect(dataObject).toBeInstanceOf(Object);
    });

    it("should render movie details component successfully", () => {
        wrapper = shallow(<MovieDetails {...defaultProps} />);
        expect(wrapper.find("section.movieDetails")).toHaveLength(1);
    });
});
