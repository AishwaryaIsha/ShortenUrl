/**
 * @jest-environment jsdom
 */
 import { render, screen } from "@testing-library/react";
 import "@testing-library/jest-dom/extend-expect";
 import Content from '../pages/component/content';
 import Firstboxcontent from "../pages/component/firstboxcontent";
 import Secondboxcontent from "../pages/component/secondboxcontent";
 import Thirdboxcontent from "../pages/component/thirdboxcontent";
 import Fourthboxcontent from "../pages/component/fourthboxcontent";
 import React from "react";
 import Adapter from 'enzyme-adapter-react-16';
 import { shallow, configure } from 'enzyme';
 configure({adapter: new Adapter()});
 
 describe("Index page", () => {
     it("should render Content", () => {
         render(<Content />);
     });
 });
 
 test("expect component is called at least once", () => {
    const wrapper = shallow(<Content />)
    expect(wrapper.find(Firstboxcontent).length).toEqual(1);
    expect(wrapper.find(Secondboxcontent).length).toEqual(1);
    expect(wrapper.find(Thirdboxcontent).length).toEqual(1);
    expect(wrapper.find(Fourthboxcontent).length).toEqual(1);
  });
  
 
 