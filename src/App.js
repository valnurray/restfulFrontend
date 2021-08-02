import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ListArticleComponent from "./components/ArticlePage/ListArticleComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import CreateArticleComponent from "./components/ArticlePage/CreateArticleComponent";
import ViewArticleComponent from "./components/ArticlePage/ViewArticleComponent";
import UpdateArticleComponent from "./components/ArticlePage/UpdateArticleComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home/Home";
import ListAuthorComponent from "./components/AuthorPage/ListAuthorComponent";
import ViewAuthorComponent from "./components/AuthorPage/ViewAuthorComponent";
import Navbar from "./Navbar/Navbar";

function App() {
    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <HeaderComponent/>
                <Navbar />
                <div className="container">
                    <Switch>
                        {/*<Route path="/" exact component={ListArticleComponent}/>*/}
                        <Route path="/" exact component={Home}/>
                        <Route path="/article" component={ListArticleComponent}/>
                        <Route path="/author" component={ListAuthorComponent}/>
                        <Route path="/add-article/:id" component={CreateArticleComponent}/>
                        <Route path="/view-article/:id" component={ViewArticleComponent}/>
                        <Route path="/view-author/:id" component={ViewAuthorComponent}/>
                        <Route path="/update-article/:id" component={UpdateArticleComponent}/>
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
                <FooterComponent/>
            </BrowserRouter>
        </div>

    );
}

export default App;
