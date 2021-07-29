import axios from 'axios';


// const ARTICLES_REST_API_URL = 'http://localhost:8080/article';
const AUTHORS_REST_API_URL = '/author';

class AuthorService {

    getAuthors() {
        return axios.get(AUTHORS_REST_API_URL);
    }

    createAuthor(author) {
        return axios.post(AUTHORS_REST_API_URL, author);
    }

    getAuthorById(authorId) {
        return axios.get(AUTHORS_REST_API_URL + '/' + authorId);
    }

    updateAuthor(author, authorId) {
        return axios.put(AUTHORS_REST_API_URL + '/' + authorId, author);
    }

    deleteAuthor(authorId) {
        return axios.delete(AUTHORS_REST_API_URL + '/' + authorId);
    }
}

export default new AuthorService()