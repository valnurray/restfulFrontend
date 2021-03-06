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

    updateArticle(article) {
        return axios.put(ARTICLES_REST_API_URL + '/' + article.id, { title: article.title,
            // author: {
            //     id: article.author.id,
            //     lastName: article.author.lastName
            // },
            body: article.body,
        });
    }

    deleteArticle(articleId) {
        return axios.delete(ARTICLES_REST_API_URL + '/' + articleId);
    }
}

export default new ArticleService()