/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";
import Header from "../pages/component/header";
import FooterPage from '../pages/component/footer';
import Content from '../pages/component/content';
import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});



// import Buzz from "./Buzz";

test("expect component is called at least once", () => {
  const wrapper = shallow(<Home />)
  expect(wrapper.find(Header).length).toEqual(1);
  expect(wrapper.find(FooterPage).length).toEqual(1);
  expect(wrapper.find(Content).length).toEqual(1);
});

describe("Index page", () => {
    it("should render", () => {
        render(<Home />);
    });
});