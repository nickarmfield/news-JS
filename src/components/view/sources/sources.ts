import { SourceType } from '../../../types';
import './sources.css';

class Sources {
    draw(data: Array<SourceType>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true) as Element;

            const name = sourceClone.querySelector('.source__item-name');
            if (name) {
                name.textContent = item.name;
            }

            sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
