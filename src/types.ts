export type OptionsType = { apiKey?: string };
export type NewsType = {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    author: string;
    publishedAt: string;
    source: SourceType;
};
export type ResponseType = Response;
export type SourceType = {id: string, name: string}
