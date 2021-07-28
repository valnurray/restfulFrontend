import React, {Component} from 'react'
import EmployeeService from '../services/ArticleService'
import ArticleService from "../services/ArticleService";

class ViewArticleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            article: {}
        }
    }

    componentDidMount() {
        ArticleService.getArticleById(this.state.id).then(res => {
            this.setState({article: res.data});
        })
    }

    cancel() {
        this.props.history.push('/article');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Article Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Article ID: {this.state.article.id}</label>
                        </div>
                        <div className="row">
                            <label> Article Title: {this.state.article.title}</label>
                        </div>
                        {/*<div className = "row">*/}
                        {/*    <label> Article Author: </label>*/}
                        {/*    <div> { this.state.article.author.lastName}</div>*/}
                        {/*</div>*/}
                        <div className="row">
                            <label> Article Body: {this.state.article.body}</label>
                        </div>
                    </div>

                </div>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>HOME
                </button>
            </div>
        )
    }
}

export default ViewArticleComponent