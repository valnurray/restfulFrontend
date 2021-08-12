import React, {Component} from "react";
import AuthorService from "../../../services/AuthorService";

class CreateAuthorComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            firstName: '',
            lastName: ''
        }
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateAuthor = this.saveOrUpdateAuthor.bind(this);
    }


    componentDidMount() {

        if (this.state.id === '_add') {
            return
        } else {
            AuthorService.getAuthorById(this.state.id).then((res) => {
                let author = res.data;
                this.setState({
                    description: author.description,
                    firstName: author.firstName,
                    lastName: author.lastName,
                });
            });
        }
    }

    saveOrUpdateAuthor = (e) => {
        e.preventDefault();
        let author = {
            description: this.state.description,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };
        console.log('author => ' + JSON.stringify(author));

        if (this.state.id === '_add') {
            if (!author.lastName) {
                alert("lastName cannot be empty");
                return
            } else {

                AuthorService.createAuthor(author).then(res => {
                    this.props.history.push('/author');
                });
            }
        } else {
            AuthorService.updateAuthor(author, this.state.id).then(res => {
                this.props.history.push('/author');
            });
        }
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});

    }

    cancel() {
        this.props.history.push('/author');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Author</h3>
        } else {
            return <h3 className="text-center">Update Author</h3>
        }
    }

    render() {
        return (
            <div data-testid="CreateAuthorComponent">
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }<h3 className="text-center">to AuthorList</h3>
                            <div className="card-body">

                                <form>

                                    <div className="form-group">
                                        <label> Description: </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input placeholder="FirstName" name="firstName" className="form-control"
                                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="LastName" name="lastName" className="form-control"
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateAuthor}>Save</button>
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

export default CreateAuthorComponent;