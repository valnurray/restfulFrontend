import React, {Component} from 'react'


class PageNotFound extends Component {

    cancel() {
        this.props.history.push('/article');
    }

    render() {
        return (
            <div>
                <h1>404 - Not Found!</h1>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>HOME
                </button>
            </div>
        );
    }
}

export default PageNotFound;


