import React from "react";
import ReactDOM from 'react-dom'
import ArticleUpdateComponent from '../ArticleUpdateComponent';
import {cleanup, render} from "@testing-library/react";
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";


afterEach(cleanup);

it("render without crashing", () => {
    const div = document.createElement(`div`);
    ReactDOM.render(<ArticleUpdateComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("render button cancel correctly", () => {
    const {queryByTestId} = render(<ArticleUpdateComponent/>);
    expect(queryByTestId('ArticleUpdateComponent')).toBeDefined();
});

it('matches snapshot', () => {
    const tree = renderer.create(<ArticleUpdateComponent />).toJSON();
    expect(tree).toMatchSnapshot();

})