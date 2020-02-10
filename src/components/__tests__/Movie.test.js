import * as React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Movies from "../Movies/Movies";
import SearchComponent from "../Search/SearchComponent";

configure({ adapter: new Adapter() });

describe("Show Movie compoent", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Movies />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should render Search component successfully', async () => {
        wrapper = shallow(<Movies />);
        expect(wrapper.find(SearchComponent)).toHaveLength(1);
    });

});