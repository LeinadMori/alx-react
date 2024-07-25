import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  it("should render Notifications component", () => {
    const component = shallow(<App />);
    expect(component.find(Notifications).exists()).toBe(true);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);
    expect(component.find(Header).exists()).toBe(true);
  });

  it("should render Login component when not logged in", () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.find(Login).exists()).toBe(true);
    expect(component.find(CourseList).exists()).toBe(false);
  });

  it("should render Footer component", () => {
    const component = shallow(<App />);
    expect(component.find(Footer).exists()).toBe(true);
  });

  it("should not render CourseList when logged out", () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.find(CourseList).exists()).toBe(false);
  });

  it("should render CourseList when logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.find(CourseList).exists()).toBe(true);
    expect(component.find(Login).exists()).toBe(false);
  });
});
