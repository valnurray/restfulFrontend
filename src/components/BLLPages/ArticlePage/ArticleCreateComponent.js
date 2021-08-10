import React, {useState} from "react";
import ArticleService from "../../../services/ArticleService";
import {useForm} from "react-hook-form";

function ArticleCreateComponent(props) {
    const [article, setArticle] = useState({
        title: '',
        // author: {id: '', lastName: ""},
        body: ""
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        InsertArticle();
    };

    console.log(watch("example"));


    const InsertArticle = (e) => {
        const data = {
            title: article.title,
            // author: {
            //     id: article.author.id,
            //     lastName: article.author.lastName
            // },
            body: article.body
        };
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
                                {errors?.title?.type === "required" && <p>Title can not be empty</p>}
                                {errors?.title?.type === "minLength" && (
                                    <p>Title can not be empty</p>
                                )}
                                {errors?.title?.type === "pattern" && (
                                    <p>Alphabetical characters only</p>
                                )}

                                <label>Body</label>
                                <input
                                    className="form-control"
                                    {...register("body", {pattern: /^[A-Za-z]+$/i})}
                                    onChange={oneChangeHandler}
                                />
                                {errors?.body?.type === "pattern" && (
                                    <p>Alphabetical characters only</p>
                                )}

                                <button type="submit" className="btn btn-success">Save</button>

                                <button className="btn btn-danger" onClick={cancel.bind(this)}
                                        style={{marginLeft: "10px"}}>Cancel</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ArticleCreateComponent;
