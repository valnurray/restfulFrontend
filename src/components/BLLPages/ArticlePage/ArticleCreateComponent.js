import React, {useEffect, useState} from "react";
import ArticleService from "../../../services/ArticleService";
import {useHistory, useLocation} from "react-router-dom";

function ArticleCreateComponent() {

    const [article, setArticle] = useState({
        title: '',
        author: {id: 1, lastName: ""},
        body: ""
    });

    const updateArticle = (newArticleState) => {
        console.log(newArticleState);
        setArticle(prevState => ({...prevState, ...newArticleState}))
    }

    let history = useHistory();
    let location = useLocation();


    const lastPartOfUrl = window.location.href.split('/').pop()

    const getTitle = () => {
        if (lastPartOfUrl === '_add') {
            return <h3 className="text-center">Add Article</h3>
        } else {
            return <h3 className="text-center">Update Article</h3>
        }
    }

    const changeTitleHandler = (event) => {
        debugger
        updateArticle({title: event.target.value});
    }
    const changeBodyHandler = (event) => {
        debugger
        updateArticle({body: event.target.value});
    }


    const cancel = () => {
        history.push('/article');
    }

    const saveOrUpdateArticle = (e) => {
        e.preventDefault();
        console.log('article => ' + JSON.stringify(article));
        if (lastPartOfUrl === '_add') {
            ArticleService.createArticle(article).then(res => {
                history.push('/article');
            });
        } else {
            ArticleService.updateArticle(article, article.id).then(res => {
                history.push('/article');
            });
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
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Title: </label>
                                    <input placeholder="Title" name="title" className="form-control"
                                           value={article.title}
                                           onChange={changeTitleHandler}
                                    />
                                </div>


                                <div className="form-group">
                                    <label> Body: </label>
                                    <input placeholder="Body" name="body" className="form-control"
                                           value={article.body}
                                           onChange={changeBodyHandler}
                                    />
                                </div>


                                {/*                    /!*<div className = "form-group">*!/*/}
                                {/*                    /!*    <label> Author: </label>*!/*/}
                                {/*                    /!*    <input placeholder="Author" name="author" className="form-control"*!/*/}
                                {/*                    /!*           value={this.state.author.lastName} onChange={this.changeAuthorHandler}/>*!/*/}
                                {/*                    /!*</div>*!/*/}

                                <button className="btn btn-success" onClick={saveOrUpdateArticle}>Save</button>
                                <button className="btn btn-danger" onClick={cancel.bind(this)}
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

export default ArticleCreateComponent;