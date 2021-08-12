import React from "react";
import ReactDOM from 'react-dom'
import ViewArticleComponent from '../components/BLLPages/ArticlePage/ViewArticleComponent';
import {cleanup, render} from "@testing-library/react";
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";

jest.mock('react-router-dom',
    () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
        id: 1
    }),
    useRouteMatch: () => ({ url: '/view-article/1' }),
}));


describe("ViewArticleComponent", () => {

    afterEach(cleanup);

    it("render without crashing", () => {
        const div = document.createElement(`div`);
        ReactDOM.render(<ViewArticleComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("render button cancel correctly", () => {
        const {queryByTestId} = render(<ViewArticleComponent />);
        expect(queryByTestId('ViewArticleComponent')).toBeDefined();
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<ViewArticleComponent />).toJSON();
        expect(tree).toMatchSnapshot();

    })
})
