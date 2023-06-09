import { NewsType } from '../../../types';
import './news.css';

class News {
    draw(data: Array<NewsType>) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as Element;

            if (!newsClone) return;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const photo = newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
            if(photo) {
              photo.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            }

            const author = newsClone.querySelector('.news__meta-author');
            if(author) {
              author.textContent = item.author || item.source.name;
            };

            const date = newsClone.querySelector('.news__meta-date');
            if(date) {
              date.textContent = item.publishedAt
              .slice(0, 10)
              .split('-')
              .reverse()
              .join('-');
            }

            const title = newsClone.querySelector('.news__description-title')
            if(title) {
              title.textContent = item.title;
            }

            const source = newsClone.querySelector('.news__description-source')
            if(source) {
              source.textContent = item.source.name;
            }

            const content = newsClone.querySelector('.news__description-content')
            if(content) {
              content.textContent = item.description;
            }

            newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsBlock = document.querySelector('.news');
        if(newsBlock) {
          newsBlock.innerHTML = '';
        }

        document.querySelector('.news')?.appendChild(fragment);
    }
}

export default News;
