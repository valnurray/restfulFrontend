
import React from 'react';
import axios from 'axios'
import ArticleComponent from '../components/ArticleComponent';

// const ARTICLES_REST_API_URL = 'http://localhost:8080/article';
const ARTICLES_REST_API_URL = '/article';


class ArticleService {


    getArticles() {
        return axios.get(ARTICLES_REST_API_URL);
    }


}

export default new ArticleService();

