import './App.css';
import {BrowserRouter, Route, Switch, useLocation,} from "react-router-dom";
import HeaderComponent from "./components/BasicPages/Header/HeaderComponent";
import FooterComponent from "./components/BasicPages/Footer/FooterComponent";
import ViewArticleComponent from "./components/BLLPages/ArticlePage/ViewArticleComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./components/BasicPages/PageNotFound/PageNotFound";
import Digest from "./components/BasicPages/Digest/Digest";
import ListAuthorComponent from "./components/BLLPages/AuthorPage/ListAuthorComponent";
import ViewAuthorComponent from "./components/BLLPages/AuthorPage/ViewAuthorComponent";
import Navbar from "./components/BasicPages/Navbar/Navbar";
import Start from "./components/BasicPages/StartPage/Start";
import UpdateAuthorComponent from "./components/BLLPages/AuthorPage/UpdateAuthorComponent";
import CreateAuthorComponent from "./components/BLLPages/AuthorPage/CreateAuthorComponent";
import ArticleListComponent from "./components/BLLPages/ArticlePage/ArticleListComponent";
import ArticleCreateComponent from "./components/BLLPages/ArticlePage/ArticleCreateComponent";
import ArticleUpdateComponent from "./components/BLLPages/ArticlePage/ArticleUpdateComponent";

function App() {
    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <HeaderComponent/>
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={Start}/>
                        <Route path="/digest" component={Digest}/>
                        <Route path="/article" component={ArticleListComponent}/>
                        <Route path="/author" component={ListAuthorComponent}/>
                        <Route path="/add-article/:id" component={ArticleCreateComponent}/>
                        <Route path="/add-author/:id" component={CreateAuthorComponent}/>
                        <Route path="/view-article/:id" component={ViewArticleComponent}/>
                        <Route path="/view-author/:id" component={ViewAuthorComponent}/>
                        <Route path="/update-article/:id"
                               component={ArticleUpdateComponent}
                        />
                        <Route path="/update-author/:id" component={UpdateAuthorComponent}/>
                        <Route default component={PageNotFound}/>
                    </Switch>
                </div>
                <FooterComponent/>
            </BrowserRouter>
        </div>

    );
}

export default App;
