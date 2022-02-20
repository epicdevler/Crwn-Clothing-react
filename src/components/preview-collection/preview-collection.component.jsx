import React from 'react';
import '../../assets/styles/collection-preview.styles.scss'
import CollectionItem from "../collection_item/collection-item.component";

const PreviewCollectionComponent = ({ title, items }) => (

    <div className={'collection-preview'}>
        <h1 className={'title'}>{title}</h1>
        <div className={'preview'}>
            {
                items.filter((item, index) => index < 4).map(({id, ...members}) => (
                <CollectionItem key={id} {...members} />
                ))
            }
        </div>
    </div>

)

export default PreviewCollectionComponent;