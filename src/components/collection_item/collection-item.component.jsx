import React from 'react'
import '../../styles/collection-item.styles.scss'

const CollectionItem = ({name, imageUrl, price}) => {
    return (
        <div className={'collection-item'}>
            <div className={'image'} style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
            <section className="collection-footer">
                <span className={'name'}>{name}</span>
                <span className={'price'}>{price}</span>
            </section>
        </div>
    )
}

export default CollectionItem
