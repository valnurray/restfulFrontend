import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ListArticleComponent from "./components/ArticlePage/ListArticleComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateArticleComponent from "./components/ArticlePage/CreateArticleComponent";
import ViewArticleComponent from "./components/ArticlePage/ViewArticleComponent";
import UpdateArticleComponent from "./components/ArticlePage/UpdateArticleComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./components/PageNotFound";

function App() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={ListArticleComponent}/>
                        <Route path="/article" component={ListArticleComponent}/>
                        <Route path="/add-article/:id" component={CreateArticleComponent}/>
                        <Route path="/view-article/:id" component={ViewArticleComponent}/>
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
