import React from "react";
import {render, screen} from '@testing-library/react';
import Timeline from "../Timeline";

describe("Timeline", () => {
    it("wraps content in a div with .notificationsFrame class", () => {
        const {container} = render(<Timeline/>);
        const firstElement = container.firstElementChild;
        expect(firstElement).toHaveClass("notificationsFrame");
    });
});