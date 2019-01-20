import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0c379026a477ffda3605221110f47d6e32416049a261a7c73171d7631fa57285'
    }
});
