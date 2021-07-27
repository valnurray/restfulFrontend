
import React from 'react';
import axios from 'axios'

// const ARTICLES_REST_API_URL = 'http://localhost:8080/author';
const AUTHORS_REST_API_URL = '/author';

class AuthorService {

    getAuthors(){
        return axios.get(AUTHORS_REST_API_URL);
    }
}

export default new AuthorService();

