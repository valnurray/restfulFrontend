import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ArticleComponent from './components/ArticleComponent'
import AuthorComponent from './components/AuthorComponent'
import Start from './components/StartPage/Start';

function App() {

  return (

    <div className='app-wrapper'>
      <Route exact path="/" render={() => <Start />} />

      <Route path="/articles"
        render={() => <ArticleComponent />} />

      <Route path="/authors"
        render={() => <AuthorComponent />} />

      {/* <Route path={"/article" + article.id}
        render={() => <ArticleComponent />} /> */}
    </div>

    // <div className="App">
    //   <ArticleComponent />
    // </div>
  );
}

export default App;
