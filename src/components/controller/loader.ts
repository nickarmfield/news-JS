import { OptionsType, ResponseType } from "../../types";
type CallBack<Type> = (data: Type) => void;
class Loader {
  baseLink: string;
  options: OptionsType;
    constructor(baseLink: string, options: OptionsType) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: string, options: OptionsType },
        callback: CallBack<void> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
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

    load<Type>(method: string, endpoint: string, callback: CallBack<Type>, options: Record<string, string> = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: Type) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
