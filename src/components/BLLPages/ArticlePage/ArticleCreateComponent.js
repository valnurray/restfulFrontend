import React, {useEffect, useState} from "react";
import ArticleService from "../../../services/ArticleService";
import {useHistory, useLocation} from "react-router-dom";

function ArticleCreateComponent() {

    const [article, setArticle] = useState({
        id: 1, title: '',
        author: {id: 1, lastName: ""},
        body: "body"
    });

    const updateArticle = (newArticleState) => setArticle(prevState => ({...prevState, ...newArticleState}))

    let history = useHistory();
    let location = useLocation();


    useEffect(() => {
        createArticles()

    }, []);

    const createArticles = () => {
        ArticleService.createArticle().then((response) => {
            setArticle(response.data);
            console.log(response.data);
        });
    }
    const lastPartOfUrl = window.location.href.split('/').pop()

    const getTitle = () => {
        if (lastPartOfUrl === '_add') {
            return <h3 className="text-center">Add Article</h3>
        } else {
            return <h3 className="text-center">Update Article</h3>
        }
    }


    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            getTitle()
                        }
                        {/*<div className="card-body">*/}
            {/*                <form>*/}
            {/*                    <div className="form-group">*/}
            {/*                        <label> Title: </label>*/}
            {/*                        <input placeholder="Title" name="title" className="form-control"*/}
            {/*                               value={this.state.title} onChange={this.changeTitleHandler}/>*/}
            {/*                    </div>*/}
            {/*                    <div className="form-group">*/}
            {/*                        <label> Body: </label>*/}
            {/*                        <input placeholder="Body" name="body" className="form-control"*/}
            {/*                               value={this.state.body} onChange={this.changeBodyHandler}/>*/}
            {/*                    </div>*/}
            {/*                    /!*<div className = "form-group">*!/*/}
            {/*                    /!*    <label> Author: </label>*!/*/}
            {/*                    /!*    <input placeholder="Author" name="author" className="form-control"*!/*/}
            {/*                    /!*           value={this.state.author.lastName} onChange={this.changeAuthorHandler}/>*!/*/}
            {/*                    /!*</div>*!/*/}

            {/*                    <button className="btn btn-success" onClick={this.saveOrUpdateArticle}>Save</button>*/}
            {/*                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}*/}
            {/*                            style={{marginLeft: "10px"}}>Cancel*/}
            {/*                    </button>*/}
            {/*                </form>*/}
            {/*            </div>*/}
                    </div>
                </div>

            </div>
        </div>
    )

}

export default ArticleCreateComponent;