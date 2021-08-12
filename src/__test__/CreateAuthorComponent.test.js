import React from "react";
import ReactDOM from 'react-dom'
import CreateAuthorComponent from '../components/BLLPages/AuthorPage/CreateAuthorComponent';
import {cleanup, render} from "@testing-library/react";
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";

describe("UpdateAuthorComponent", () => {
    const match = {params : { id: 1}};

    afterEach(cleanup);

    it("render without crashing", () => {
        const div = document.createElement(`div`);
        ReactDOM.render(<CreateAuthorComponent match={match}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("render button cancel correctly", () => {
        const {getByTestId} = render(<CreateAuthorComponent match={match} />);
        expect(getByTestId('CreateAuthorComponent')).toHaveTextContent('to AuthorList');
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<CreateAuthorComponent match={match} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

})
