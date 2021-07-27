import React from 'react';
import AuthorService from '../services/AuthorService';
import ArticleService from '../services/ArticleService';
import { NavLink } from "react-router-dom";

class AuthorComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        AuthorService.getAuthors().then((response) => {
            this.setState({ authors: response.data })
        });

    }

    render() {
        return (
            <div>
                <h1 className="text-center"> Author List</h1>

                <div>
                    <NavLink to="/"  >HOME</NavLink>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>

                            <td> author id</td>
                            <td> author article id</td>
                            <td> author firstName</td>
                            <td> author lastName</td>
                            <td> author description</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.authors.map(
                                author =>
                                    <tr key={author.id}>
                                        <td> {author.id}</td>
                                        <td> {author.articles.map(article => <div>{article.title}</div>)}</td>
                                        <td> {author.firstName}</td>
                                        <td> {author.lastName}</td>
                                        <td> {author.description}</td>

                                    </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        )
    }
}

export default AuthorComponent;

