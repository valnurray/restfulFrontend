import React, {useState} from "react";
import ArticleService from "../../../services/ArticleService";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

function ArticleCreateComponent() {

    const [article, setArticle] = useState({
        title: "",
        body: ""
    });

    const history = useHistory();

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        InsertArticle();
    };

    const InsertArticle = (e) => {
        debugger
        const data = {
            title: article.title,
            body: article.body
        };
        debugger
        ArticleService.createArticle(data)
            .then((result) => {
                history.push('/article')
            })
        debugger
    };

    const oneChangeHandler = (e) => {
        setArticle({...article, [e.target.name]: e.target.value});
    }

    const cancel = () => {
        history.push('/article');
    }

    return (
        <div data-testid="ArticleCreateComponent">
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2>ADD Article</h2>
                        <div className="card-body">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <label>Title</label>
                                <input
                                    className="form-control"
                                    {...register("title", {
                                        required: true,
                                        minLength: 1,
                                        pattern: /^[A-Za-z]+$/i
                                    })}
                                    onChange={oneChangeHandler}
                                />
                                {errors?.title?.type === "required" &&
                                <p style={{color: "red"}}>Title can not be empty</p>}
                                {errors?.title?.type === "minLength" && (
                                    <p style={{color: "red"}}>Title can not be empty</p>
                                )}
                                {errors?.title?.type === "pattern" && (
                                    <p style={{color: "red"}}>Alphabetical characters only</p>
                                )}

                                <label>Body</label>
                                <input
                                    className="form-control"
                                    {...register("body", {pattern: /^[A-Za-z]+$/i})}
                                    onChange={oneChangeHandler}
                                />
                                {errors?.body?.type === "pattern" && (
                                    <p style={{color: "red"}}>Alphabetical characters only</p>
                                )}

                                <button type="submit" className="btn btn-success">Save</button>

                                <button className="btn btn-danger" onClick={cancel}
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
