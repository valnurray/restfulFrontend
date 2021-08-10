import React from "react";
import ReactDOM from 'react-dom'
import ArticleCreateComponent from '../ArticleCreateComponent';
import {cleanup, render} from "@testing-library/react";
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";


afterEach(cleanup);

it("render without crashing", () => {
    const div = document.createElement(`div`);
    ReactDOM.render(<ArticleCreateComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("render button cancel correctly", () => {
    const {getByTestId} = render(<ArticleCreateComponent/>);
    expect(getByTestId('ArticleCreateComponent')).toHaveTextContent('ADD Article');
});

it('matches snapshot', () => {
    const tree = renderer.create(<ArticleCreateComponent />).toJSON();
    expect(tree).toMatchSnapshot();

})

