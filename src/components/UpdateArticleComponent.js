import React, {Component} from 'react'
import EmployeeService from '../services/ArticleService';
import ArticleService from "../services/ArticleService";

class UpdateArticleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            // author: '',
            body: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeBodyHandler = this.changeBodyHandler.bind(this);
        this.updateArticle = this.updateArticle.bind(this);
    }

    componentDidMount() {
        ArticleService.getArticleById(this.state.id).then((res) => {
            let article = res.data;
            this.setState({
                title: article.title,
                author: article.author.lastName,
                body: article.body
            });
        });
    }

    updateArticle = (e) => {
        e.preventDefault();
        let article = {title: this.state.title, author: this.state.author.lastName, body: this.state.body};
        console.log('article => ' + JSON.stringify(article));
        console.log('id => ' + JSON.stringify(this.state.id));
        ArticleService.updateArticle(article, this.state.id).then(res => {
            this.props.history.push('/article');
        });
    }

    changeTitleHandler = (event) => {
        this.setState({title: event.target.value});
    }

    changeBodyHandler = (event) => {
        this.setState({body: event.target.value});
    }

    // changeAuthorHandler= (event) => {
    //     this.setState({author: event.target.value});
    // }

    cancel() {
        this.props.history.push('/article');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Title: </label>
                                        <input placeholder="Title" name="title" className="form-control"
                                               value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    {/*<div className = "form-group">*/}
                                    {/*    <label> Author </label>*/}
                                    {/*    <input placeholder="Author" name="author" className="form-control"*/}
                                    {/*           value={this.state.author.lastName} onChange={this.changeAuthorHandler}/>*/}
                                    {/*</div>*/}
                                    <div className="form-group">
                                        <label> Body: </label>
                                        <input placeholder="Body" name="body" className="form-control"
                                               value={this.state.body} onChange={this.changeBodyHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateArticle}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                            style={{marginLeft: "10px"}}>Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateArticleComponent