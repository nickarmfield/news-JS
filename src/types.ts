export type OptionsType = { apiKey?: string };
export type ArticleType = {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    author: string;
    publishedAt: string;
    source: SourceType;
};
export type ResponseType = Response;
export type SourceType = { id: string; name: string };
export type ArticlesType = { articles: Array<ArticleType> };
export type SourcesType = { sources: Array<SourceType> };
