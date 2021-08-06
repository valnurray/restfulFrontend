import React, {Component} from 'react'
import ArticleService from '../../../services/ArticleService'
import {Tooltip} from "@material-ui/core";
import styles from "./ArticlePage.module.css"


class ListArticleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: {},
            articles: []
        }
        this.addArticle = this.addArticle.bind(this);
        this.editArticle = this.editArticle.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
    }

    deleteArticle(id) {
        ArticleService.deleteArticle(id).then(res => {
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
            <div className="container">
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
                            <th> Article Author</th>
                            <th> Article Body</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.articles.map(
                                article =>
                                    <tr  key={article.id}>

                                            <td className={styles.idColumn} >{article.id} </td>

                                        <Tooltip title={article.title} arrow >
                                            <td className={styles.titleColumn}> {article.title} </td>
                                        </Tooltip>

                                            <td className={styles.authorColumn}> {article.author === null ? "-" : article.author.lastName} </td>

                                            <td className={styles.bodyColumn}> {article.body}</td>

                                        <td className={styles.actionColumn}>
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