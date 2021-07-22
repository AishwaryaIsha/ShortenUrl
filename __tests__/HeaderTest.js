/**
 * @jest-environment jsdom
 */
 import { render, screen } from "@testing-library/react";
 import "@testing-library/jest-dom/extend-expect";
 import React from "react";
 import { shallow ,configure} from 'enzyme';
 import Adapter from 'enzyme-adapter-react-16';
 import Header from "../pages/component/header";

 configure({adapter: new Adapter()});
 
 describe('HeaderEnzyme', () => {
     it('should get data', () => {
         const wrapper = shallow(<Header />, {
             disableLifecycleMethods: true
         });
     })
 })
 
 describe('Navbar', () => {
     it("should render Header", () => {
         render(<Header />);
     });
 
     it('should be defined', () => {
         expect(Header).toBeDefined();
     });
 });
 
 
 