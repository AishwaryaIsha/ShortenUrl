/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Secondboxcontent from "../pages/component/secondboxcontent";
import React from "react";
import { shallow ,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

// import Buzz from "./Buzz";

describe('SecondboxcontentEnzyme', () => {
    it('should get data', () => {
        const wrapper = shallow(<Secondboxcontent />, {
            disableLifecycleMethods: true
        });
        process.nextTick(() => {
            expect(wrapper.state().urlList).toEqual("");
            expect(wrapper.state().inputUrl).toEqual("");
            expect(wrapper.state().text).toBeTruthy();
            expect(wrapper.state().mainBtnText).toBeFalsy();
            expect(wrapper.state().inputError).toEqual("");
            expect(wrapper.find(".secondcontentbtn").length).toEqual(1);
        })
    })
})

test("expect input field", () => {
    let wrapped = shallow(<Secondboxcontent />);
    expect(wrapped.find("input").get(0).props.value).toEqual("");
})


describe('Button', () => {

    it("should render SecondContentBox", () => {
        render(<Secondboxcontent />);
    });

    it('should be defined', () => {
        expect(Secondboxcontent).toBeDefined();
    });

    it('should render correctly', () => {
        const tree = shallow(
            <Secondboxcontent name='button test' />
        );
        expect(tree).toMatchSnapshot();
    });
});


