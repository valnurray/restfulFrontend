import React, {useEffect, useState} from 'react'
import ArticleService from '../../../services/ArticleService'
import {useHistory, useParams} from "react-router-dom";

function ViewArticleComponent() {
    const [article, setArticle] = useState({
        title: '',
        author: {
            id: '',
            lastName: ''
        },
        body: ''
    });

    const {id} = useParams();

    useEffect(() => {
        getArticle()
    }, [])


    const getArticle = () => {
        ArticleService.getArticleById(id).then((response) => {
            setArticle(response.data);
        });
    }

    const history = useHistory();

    const cancel = () => {
       history.push('/article');
    }

        return (
            <div data-testid="ViewArticleComponent"  className="container">
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Article Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Article ID: {article.id}</label>
                        </div>
                        <div className="row">
                            <label> Article Title: {article.title}</label>
                        </div>
                        <div className = "row">
                            <label> Article Author: {article.author === null ? "-" : article.author.lastName}</label>
                        </div>
                        <div className="row">
                            <label> Article Body: {article.body}</label>
                        </div>
                    </div>

                </div>
                <button className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px"}}>HOME
                </button>
            </div>
        )
}

export default ViewArticleComponent