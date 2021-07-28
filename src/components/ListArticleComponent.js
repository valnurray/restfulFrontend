import React, {Component} from 'react'
import EmployeeService from '../services/ArticleService'
import ArticleService from "../services/ArticleService";

class ListArticleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
        this.addArticle = this.addArticle.bind(this);
        this.editArticle = this.editArticle.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
    }

    deleteArticle(id) {
        EmployeeService.deleteArticle(id).then(res => {
            this.setState({articles: this.state.articles.filter(article => article.id !== id)});
        });
    }

    viewArticle(id) {
        this.props.history.push(`/view-article/${id}`);
    }

    editArticle(id) {
        this.props.history.push(`/add-article/${id}`);
    }

    componentDidMount() {
        ArticleService.getArticles().then((res) => {
            this.setState({articles: res.data});
        });
    }

    addArticle() {
        this.props.history.push('/add-article/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Article List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addArticle}> Add Article</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th> Article ID</th>
                            <th> Article Title</th>
                            {/*<th> Article Author</th>*/}
                            <th> Article Body</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.articles.map(
                                article =>
                                    <tr key={article.id}>
                                        <td> {article.id} </td>
                                        <td> {article.title} </td>
                                        {/*<td> {article.author.lastName} </td>*/}
                                        <td> {article.body}</td>
                                        <td>
                                            <button onClick={() => this.editArticle(article.id)}
                                                    className="btn btn-info">Update
                                            </button>
                                            <button style={{marginLeft: "10px"}}
                                                    onClick={() => this.deleteArticle(article.id)}
                                                    className="btn btn-danger">Delete
                                            </button>
                                            <button style={{marginLeft: "10px"}}
                                                    onClick={() => this.viewArticle(article.id)}
                                                    className="btn btn-info">View
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListArticleComponent