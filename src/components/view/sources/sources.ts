import { SourceType } from '../../../types';
import './sources.css';

enum SourcesSelectors {
    TEMPLATE = '#sourceItemTemp',
    NAME = '.source__item-name',
    ITEM = '.source__item',
    CONTAINER = '.sources',
}
class Sources {
    draw(data: Array<SourceType>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector(SourcesSelectors.TEMPLATE) as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true) as Element;

            const name = sourceClone.querySelector(SourcesSelectors.NAME);
            if (name) {
                name.textContent = item.name;
            }

            sourceClone.querySelector(SourcesSelectors.ITEM)?.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector(SourcesSelectors.CONTAINER)?.append(fragment);
    }
}

export default Sources;
