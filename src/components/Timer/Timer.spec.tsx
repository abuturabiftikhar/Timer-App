import React from "react"
import { shallow } from "enzyme"
import Timer from "./Timer";

describe('App Component renders', () => {

    let container= shallow(<Timer />);

    it("should render a <div />", () => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    });

});