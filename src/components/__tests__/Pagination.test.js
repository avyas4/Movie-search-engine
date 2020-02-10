import * as React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import services from "../../services/services";
import Pagination from "../Pagination/Pagination";
import ListComponent from "../List/ListComponent";

configure({ adapter: new Adapter() });

describe("Show custom pagination", () => {
    const defaultProps = {
        data: {},
        searchTerm: ''
    };
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Pagination {...defaultProps} />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('returns result if non-empty object', async () => {
        const data = await services('batman', '', '');
        expect(data).toBeInstanceOf(Object);
    });

    it("should render list  component successfully", () => {
        wrapper = shallow(<Pagination {...defaultProps} />);
        expect(wrapper.find(ListComponent)).toHaveLength(1);
    });

});
