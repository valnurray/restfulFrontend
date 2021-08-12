import React from "react";
import ReactDOM from 'react-dom'
import ViewAuthorComponent from '../ViewAuthorComponent';
import {cleanup, render} from "@testing-library/react";
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";
import {match} from "react-router-dom";

describe("ViewAuthorComponent", () => {
    const match = {params : { id: 1}};

    afterEach(cleanup);


    it("render without crashing", () => {
        const div = document.createElement(`div`);
        ReactDOM.render(<ViewAuthorComponent match={match}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("render button cancel correctly", () => {
        const {getByTestId} = render(<ViewAuthorComponent match={match} />);
        expect(getByTestId('ViewAuthorComponent')).toHaveTextContent('View Author Details');
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<ViewAuthorComponent match={match} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

})