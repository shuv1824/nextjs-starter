import React from "react"
import Avatar from "../avatar"
import TestRenderer from "react-test-renderer"
import { cleanup } from "@testing-library/react"

afterEach(cleanup);

describe('Avatar', () => {
    it('should render without throwing an error', () => {
        const testRenderer = TestRenderer.create(<Avatar />);
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
})
