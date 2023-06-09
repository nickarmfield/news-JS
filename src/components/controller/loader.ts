import { OptionsType, ResponseType, CallBack, ResponseProps, SourcesParamType } from '../../types';

class Loader {
    baseLink: string;
    options: OptionsType;
    constructor(baseLink: string, options: OptionsType) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<Type>(
        { endpoint, options = {} }: ResponseProps,
        callback: CallBack<Type> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load<Type>('GET', endpoint, callback, options);
    }

    errorHandler(res: ResponseType) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Record<string, string>, endpoint: string) {
        const urlOptions = { ...this.options, ...options } as Record<string, string>;
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<Type>(method: string, endpoint: string, callback: CallBack<Type>, options: SourcesParamType = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: Type) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
