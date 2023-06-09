export type OptionsType = { apiKey: string };
export type ArticleType = {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    author: string;
    publishedAt: string;
    source: Pick<SourceType, 'name'>;
};
export type ResponseType = Response;
export type SourceType = { id: string | number; name: string };
export interface ArticlesType {
    articles: Array<ArticleType>;
}
export interface SourcesType {
    sources: Array<SourceType>;
}
export type CallBack<Type> = (data: Type) => void;
export interface ResponseProps {
    endpoint: string;
    options?: SourcesParamType;
}

export type SourcesParamType = Partial<{
    sources: string;
}>;
