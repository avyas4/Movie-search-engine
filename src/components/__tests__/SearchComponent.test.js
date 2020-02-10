import * as React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import SearchComponent from "../Search/SearchComponent";
import Pagination from "../Pagination/Pagination";

configure({ adapter: new Adapter() });

describe("Show search", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SearchComponent />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should render search component successfully", () => {
        wrapper = shallow(<SearchComponent />);
        expect(wrapper.find("div.searchComponent")).toHaveLength(1);
    });

    it("should have input and ima tag", () => {
        wrapper = shallow(<SearchComponent />);
        expect(wrapper.find("input")).toHaveLength(1);
        expect(wrapper.find("img")).toHaveLength(1);
    });
    it('should call onChange prop', () => {
        const event = {
            target: { value: 'the-value' }
        };
        wrapper = shallow(<SearchComponent />);
        wrapper.find('input').simulate('change',event);
    });

    it("should render pagination component successfully", () => {
        wrapper = shallow(<SearchComponent />);
        expect(wrapper.find(Pagination)).toHaveLength(1);
    });

});