import React from 'react';
import ArticleService from '../services/ArticleService';
import { NavLink } from "react-router-dom";


class ArticleComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        ArticleService.getArticles().then((response) => {
            this.setState({ articles: response.data })
        });
    }

render() {
    return (
        <div>
            <h1 className="text-center"> Article List</h1>

            <div>
                <NavLink to="/"  >HOME</NavLink>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <td> article id</td>
                        <td> article title</td>
                        <td> article Author lastName</td>
                        <td> article body</td>
                    </tr>

                </thead>
                <tbody>
                    {
                        this.state.articles.map(
                            article =>
                                <tr key={article.id}>
                                    <td>  <NavLink to={"/article" + article.id}>{article.id}</NavLink> </td>
                                    <td> {article.title}</td>
                                    <td> {article.author.lastName}</td>

                                    <td> {article.body}</td>

                                </tr>
                        )
                    }

                </tbody>
            </table>

        </div>

    )
}
}

export default ArticleComponent;

