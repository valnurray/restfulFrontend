import React from "react";
import ReactDOM from 'react-dom'
import ListAuthorComponent from '../ListAuthorComponent';
import {cleanup, render} from "@testing-library/react";
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";


afterEach(cleanup);

it("render without crashing", () => {
    const div = document.createElement(`div`);
    ReactDOM.render(<ListAuthorComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("render button cancel correctly", () => {
    const {getByTestId} = render(<ListAuthorComponent/>);
    expect(getByTestId('ListAuthorComponent')).toHaveTextContent('Authors List');
});

it('matches snapshot', () => {
    const tree = renderer.create(<ListAuthorComponent />).toJSON();
    expect(tree).toMatchSnapshot();

})
