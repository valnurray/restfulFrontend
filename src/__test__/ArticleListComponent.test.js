import React from "react";
import ReactDOM from 'react-dom'
import ArticleListComponent from '../components/BLLPages/ArticlePage/ArticleListComponent';
import {cleanup, render} from "@testing-library/react";
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";

describe("ArticleListComponent", () => {

    afterEach(cleanup);

    it("render without crashing", () => {
        const div = document.createElement(`div`);
        ReactDOM.render(<ArticleListComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("render button cancel correctly", () => {
        const {getByTestId} = render(<ArticleListComponent/>);
        expect(getByTestId('ArticleListComponent')).toHaveTextContent('Article List');
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<ArticleListComponent />).toJSON();
        expect(tree).toMatchSnapshot();

    })

})

