import React, {Component} from "react";
import AuthorService from "../../../services/AuthorService"

class ViewAuthorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            author: {},
            article: {},
            articles: []
        }
    }

    componentDidMount() {
        AuthorService.getAuthorById(this.state.id).then(res => {
            this.setState({author: res.data});
        })
    }

    cancel() {
        this.props.history.push('/author');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Author Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Author ID: {this.state.author.id}</label>
                        </div>
                        <div className="row">
                            <label> Author Description: {this.state.author.description}</label>
                        </div>
                        <div className="row">
                            <label> Author Firs Name: {this.state.author.firstName}</label>
                        </div>
                        <div className="row">
                            <label> Author Last Name: {this.state.author.lastName}</label>
                        </div>
                    </div>

                </div>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>HOME
                </button>
            </div>
        )
    }
}




export default ViewAuthorComponent;