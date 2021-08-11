import React from "react";
import ReactDOM from 'react-dom'
import {createMemoryHistory} from "history";
import {cleanup, render, screen} from '@testing-library/react'
import {BrowserRouter, Router} from "react-router-dom";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import App from "./App";
import ListAuthorComponent from "./components/BLLPages/AuthorPage/ListAuthorComponent";

beforeAll(cleanup);
afterEach(cleanup);
afterAll(cleanup);



it("render without crashing", () => {
    const div = document.createElement(`div`);
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});


test('full app rendering/navigating/article', () => {
    const history = createMemoryHistory()
    render(
        <Router history={history}>
            <App/>
        </Router>,
    )

    expect(screen.getByText(/Basic page for starting app/i)).toBeInTheDocument()
    const leftClick = {button: 0}
    userEvent.click(screen.getByText(/article/i),leftClick)
    expect(screen.getByText(/Article List/i)).toBeInTheDocument()
});



test('rendering a component that uses useLocation', () => {
    const history = createMemoryHistory()
    const route = 'Authors List'
    history.push(route)
    render(
        <Router history={history}>
            <ListAuthorComponent />
        </Router>,
    )
    expect(screen.getByTestId('ListAuthorComponent')).toHaveTextContent(route)
})


test('landing on a bad page', () => {
    const renderWithRouter = (ui, {route = '/'} = {}) => {
        window.history.pushState({}, 'Test page', route)
        return render(ui, {wrapper: BrowserRouter})
    }
    renderWithRouter(<App />, {route: '/something-that-does-not-match'})

    expect(screen.getByText(/404 - Not Found!/i)).toBeInTheDocument()
})

test('landing on a author page', () => {
    const renderWithRouter = (ui, {route = '/'} = {}) => {
        window.history.pushState({}, 'Test author page', route)
        return render(ui, {wrapper: BrowserRouter})
    }
    renderWithRouter(<App />, {route: '/author'})

    expect(screen.getByText(/Authors List/i)).toBeInTheDocument()
})

test('landing on a digest page', () => {
    const renderWithRouter = (ui, {route = '/'} = {}) => {
        window.history.pushState({}, 'Test digest page', route)
        return render(ui, {wrapper: BrowserRouter})
    }
    renderWithRouter(<App />, {route: '/digest'})

    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument()
})