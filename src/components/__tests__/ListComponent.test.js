
import * as React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import ListComponent from "../List/ListComponent";
import services from "../../services/services";
import MovieDetails from "../MovieDetails/MovieDetails";

configure({ adapter: new Adapter() });

describe("Show list of movies", () => {
    const defaultProps = {
        data: [],
        searchTerm: ''
    };
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ListComponent {...defaultProps} />);
    });

    it('returns result if non-empty object', async () => {
        const data = await services('batman', '', '');
        expect(data).toBeInstanceOf(Object);
    });

    it("should render list component successfully", () => {
        wrapper = shallow(<ListComponent {...defaultProps} />);
        expect(wrapper.find("div.listComponentContainer")).toHaveLength(1);
    });

    it("should render Movie details component successfully", () => {
        wrapper = shallow(<ListComponent {...defaultProps} />);
        expect(wrapper.find(MovieDetails)).toHaveLength(1);
    });

});