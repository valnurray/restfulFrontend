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
                        {/*            Update*/}
                        <div className="card-body">
                            <form>
                                {/*                    // onSubmit={UpdateArticle}*/}
                                {/*                >*/}
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
        // <div>
        //     <br></br>
        //     <div className="container">
        //         <div className="row">
        //             <div className="card col-md-6 offset-md-3 offset-md-3">
        //                 <h3 className="text-center">Update Employee</h3>
        //                 <div className="card-body">
        //
        //
        //                     <div className="form-group">
        //                         <label> Title: </label>
        //                         <input placeholder="Title" name="title" className="form-control"
        //                             // value={article.title}
        //                                value={article.title}
        //                                onChange={changeTitleHandler}/>
        //                     </div>
        //
        //
        //                     <div className="form-group">
        //                         <label> Body: </label>
        //                         <input placeholder="Body" name="body" className="form-control"
        //                                value={article.body}
        //                                onChange={changeBodyHandler}/>
        //                     </div>
        //
        //                     <button className="btn btn-success" onClick={UpdateArticle}>Save</button>
        //                     {/*<button type="submit" className="btn btn-info mb-1" block><span>Save</span></button>*/}
        //                     <button className="btn btn-danger" onClick={cancel.bind(this)}
        //                             style={{marginLeft: "10px"}}>Cancel
        //                     </button>
        //
        //                 </div>
        //             </div>
        //         </div>
        //
        //     </div>
        // </div>
    );

}

export default ArticleUpdateComponent;

// const [article, setArticle] = useState({
//     title: '',
//     // author: {id: 1, lastName: ""},
//     body: ""
// });
//
// const updateArticle = (newArticleState) => {
//     setArticle(prevState => ({...prevState, ...newArticleState}))
// }
//
// let history = useHistory();
// let location = useLocation();
//
//
// const lastPartOfUrl = window.location.href.split('/').pop()
//
// const changeTitleHandler = (event) => {
//     // updateArticle({title: event.target.value});
//     // setArticle(event.target.value);
//     // updateArticle( event.target.value);
//     // setArticle({title: response.data.title})
// }
// const changeBodyHandler = (event) => {
//     updateArticle({body: event.target.value});
// }
//
// const cancel = () => {
//     history.push('/article');
// }
//
// const updateArticleHandler = (e) => {
//     e.preventDefault();
//     // let article = {title: this.state.title, author: this.state.author.lastName, body: this.state.body};
//     let article = {setArticle};
//
//
//     console.log('article => ' + JSON.stringify(article));
//     console.log('id => ' + JSON.stringify(article.id));
//     debugger
//     ArticleService.updateArticle(article, article.id).then(res => {
//         history.push('/article');
//     });
// }
//
// return(
//     <div>
//         <br> </br>
//         <div className="container">
//             <div className="row">
//                 <div className="card col-md-6 offset-md-3 offset-md-3">
//                     <h3 className="text-center">Update Employee</h3>
//                     <div className="card-body">
//
//
//                         <div className="form-group">
//                             <label> Title: </label>
//                             <input placeholder="Title" name="title" className="form-control"
//                                 // value={article.title}
//                                    value={article.title}
//                                    onChange={changeTitleHandler}/>
//                         </div>
//
//
//                         <div className="form-group">
//                             <label> Body: </label>
//                             <input placeholder="Body" name="body" className="form-control"
//                                    value={article.body}
//                                    onChange={changeBodyHandler}/>
//                         </div>
//
//                         <button className="btn btn-success" onClick={updateArticleHandler}>Save</button>
//                         <button className="btn btn-danger" onClick={cancel.bind(this)}
//                                 style={{marginLeft: "10px"}}>Cancel
//                         </button>
//
//                     </div>
//                 </div>
//             </div>
//
//         </div>
//     </div>
// );