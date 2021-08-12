import React from "react";
import ReactDOM from 'react-dom'
import UpdateAuthorComponent from '../components/BLLPages/AuthorPage/UpdateAuthorComponent';
import {cleanup, render} from "@testing-library/react";
import '@testing-library/jest-dom';
import renderer from "react-test-renderer";

describe("UpdateAuthorComponent", () => {
     const match = {params : { id: 1}};

     afterEach(cleanup);

     it("render without crashing", () => {
         const div = document.createElement(`div`);
         ReactDOM.render(<UpdateAuthorComponent match={match}/>, div);
         ReactDOM.unmountComponentAtNode(div);
     });

     it("render button cancel correctly", () => {
         const {getByTestId} = render(<UpdateAuthorComponent match={match} />);
         expect(getByTestId('UpdateAuthorComponent')).toHaveTextContent('Update Author');
     });

     it('matches snapshot', () => {
         const tree = renderer.create(<UpdateAuthorComponent match={match} />).toJSON();
         expect(tree).toMatchSnapshot();
     })

 })

