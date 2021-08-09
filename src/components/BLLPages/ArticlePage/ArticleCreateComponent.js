import React, {useState} from "react";
import ArticleService from "../../../services/ArticleService";

function ArticleCreateComponent(props) {
    const [article, setArticle] = useState({
        title: '',
        // author: {id: '', lastName: ""},
        body: ""
    });

    const InsertArticle = (e) => {
        e.preventDefault();
        debugger;
        const data = {
            title: article.title,
            // author: {
            //     id: article.author.id,
            //     lastName: article.author.lastName
            // },
            body: article.body
        };

        if(!article.title) {
            alert("title cannot be empty");
            return
        }

        ArticleService.createArticle(data)
            .then((result) => {
                props.history.push('/article')
            });
    };

    const oneChangeHandler = (e) => {
        setArticle({...article, [e.target.name]: e.target.value});

    }

    const cancel = () => {
        props.history.push('/article');
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2>ADD Article</h2>
                        <div className="card-body">
                            <form onSubmit={InsertArticle}>

                                <div className="form-group">
                                    <label> Title: </label>
                                    <input placeholder="Title" name="title" className="form-control"
                                           value={article.title}
                                           onChange={oneChangeHandler}
                                    />
                                </div>

                                <div className="form-group">
                                    <label> Body: </label>
                                    <input placeholder="Body" name="body"
                                           className="form-control"
                                           value={article.body}
                                           onChange={oneChangeHandler}
                                    />
                                </div>


                                {/*<div className="form-group">*/}
                                {/*    <label> Body: </label>*/}
                                {/*    <input placeholder="Author" name="author"*/}
                                {/*           className="form-control"*/}
                                {/*           value={article.author.lastName}*/}
                                {/*           onChange={oneChangeAuthorHandler}*/}
                                {/*    />*/}
                                {/*</div>*/}

                                <button type="submit" className="btn btn-success"><span>Save</span></button>
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

export default ArticleCreateComponent;
