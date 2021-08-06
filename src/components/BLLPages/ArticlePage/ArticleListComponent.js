import React, {useEffect, useState} from "react";
import ArticleService from "../../../services/ArticleService";
import styles from "./ArticlePage.module.css";
import {Tooltip} from "@material-ui/core";
import {useHistory} from "react-router-dom";


function ArticleListComponent() {

    const [articles, setArticles] = useState([]);
    let history = useHistory();

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = () => {
        ArticleService.getArticles().then((response) => {
            setArticles(response.data);
            // console.log(response.data);
        });
    }

    const addArticle = () => {
        history.push('/add-article/_add');
    }

    const deleteArticle = (id) => {
        ArticleService.deleteArticle(id).then(res => {
            setArticles(articles.filter(article => article.id !== id));
        });
    }


    const viewArticle = (id) => {
        history.push(`/view-article/${id}`);
    }

    const editArticle = (id) => {
        history.push(`/add-article/${id}`);
    }


    return (
        <div className="container">
            <h2 className="text-center">Article List</h2>

            {/*create*/}
            <div className="row">
                <button className="btn btn-primary" onClick={addArticle}> Add Article</button>
            </div>
            <br></br>

            <table className="table table-striped table-bordered">

                <thead>
                <tr>
                    <th> Article ID</th>
                    <th> Article Title</th>
                    <th> Article Author</th>
                    <th> Article Body</th>
                    <th> Actions</th>
                </tr>
                </thead>

                <tbody>

                {
                    articles.map(
                        article =>
                            <tr key={article.id}>


                                <td className={styles.idColumn}>{article.id} </td>

                                <Tooltip title={article.title} arrow>
                                    <td className={styles.titleColumn}> {article.title} </td>
                                </Tooltip>

                                <td className={styles.authorColumn}> {article.author === null ? "-" : article.author.lastName} </td>

                                <td className={styles.bodyColumn}> {article.body}</td>

                                <td className={styles.actionColumn}>

                                    {/*update*/}
                                    <button onClick={() => editArticle(article.id)}
                                            className="btn btn-info">Update
                                    </button>

                                    {/*delete*/}
                                    <button style={{marginLeft: "10px"}}
                                            onClick={() => deleteArticle(article.id)}
                                            className="btn btn-danger">Delete
                                    </button>

                                    {/*view*/}
                                    <button style={{marginLeft: "10px"}}
                                            onClick={() => viewArticle(article.id)
                                            }
                                            className="btn btn-info">View
                                    </button>


                                </td>

                            </tr>
                    )
                }

                </tbody>

            </table>
        </div>
    )
}

export default ArticleListComponent