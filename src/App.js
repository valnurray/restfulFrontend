import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ListArticleComponent from "./components/ListArticleComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateArticleComponent from "./components/CreateArticleComponent";
import ViewArticleComponent from "./components/ViewArticleComponent";
import UpdateArticleComponent from "./components/UpdateArticleComponent";
import "bootstrap/dist/css/bootstrap.min.css";

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
                    </Switch>
                </div>
                <FooterComponent/>
            </BrowserRouter>
        </div>

    );
}

export default App;
