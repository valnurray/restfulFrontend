import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import ArticleService from "../../../services/ArticleService";


function ArticleUpdateComponent(props) {
    const [article, setArticle] = useState();
    const history = useHistory();
    useEffect(() => {
            (async () => {
                const {data: fetchedArticle} = await ArticleService.getArticleById(props.match.params.id);
                setArticle(fetchedArticle);
            })()
        },
        []
    )

    const oneChangeHandler = (e) => {
        e.persist();
        setArticle({...article, [e.target.name]: e.target.value});
    }

    const UpdateArticle = (e) => {
        e.preventDefault();

        console.log(article)

        ArticleService.updateArticle(article)
            .then((result) => {
                history.push('/article')
            });
    };

    const cancel = () => {
        props.history.push('/article');
    }


    if (!article) {
        return <div>
            loading...
        </div>
    }
    return (

        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2>Update Article</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Title: </label>
                                    <input placeholder="Title" name="title" className="form-control"
                                           value={article.title}
                                           onChange={oneChangeHandler}
                                    />
                                </div>


                                <div className="form-group">
                                    <label> Body: </label>
                                    <input placeholder="Body" name="body" className="form-control"
                                           value={article.body}
                                           onChange={oneChangeHandler}
                                    />
                                </div>


                                {/*                    /!*                    /!*<div className = "form-group">*!/*!/*/}
                                {/*                    /!*                    /!*    <label> Author: </label>*!/*!/*/}
                                {/*                    /!*                    /!*    <input placeholder="Author" name="author" className="form-control"*!/*!/*/}
                                {/*                    /!*                    /!*           value={this.state.author.lastName} onChange={this.changeAuthorHandler}/>*!/*!/*/}
                                {/*                    /!*                    /!*</div>*!/*!/*/}

                                {/*                    /!*<button className="btn btn-success" onClick={saveOrUpdateArticle}>Save</button>*!/*/}
                                <button className="btn btn-success" onClick={UpdateArticle}>Save</button>
                                {/*                    /!*<button type="submit" className="btn btn-info mb-1" block><span>Save</span></button>*!/*/}
                                <button className="btn btn-danger" onClick={cancel.bind(this)}
                                        style={{marginLeft: "10px"}}>Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ArticleUpdateComponent;
