import axios from 'axios';


// const ARTICLES_REST_API_URL = 'http://localhost:8080/article';
const ARTICLES_REST_API_URL = '/article';

class ArticleService {

    getArticles() {
        return axios.get(ARTICLES_REST_API_URL);
    }

    createArticle(article) {
        return axios.post(ARTICLES_REST_API_URL, article);
    }

    getArticleById(articleId) {
        return axios.get(ARTICLES_REST_API_URL + '/' + articleId);
    }

    updateArticle(article, articleId) {
        return axios.put(ARTICLES_REST_API_URL + '/' + articleId, article);
    }

    deleteArticle(articleId) {
        return axios.delete(ARTICLES_REST_API_URL + '/' + articleId);
    }
}

export default new ArticleService()