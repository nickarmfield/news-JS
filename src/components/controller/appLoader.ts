import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '7e02b7510dcb4499a8a10d6ac77f121e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
