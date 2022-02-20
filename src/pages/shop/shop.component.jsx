import React, {Component} from 'react';
import ShopData from "./shop.data";
import PreviewCollectionComponent from "../../components/preview-collection/preview-collection.component";

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: ShopData
        }
    }
    render() {
        const {collections} = this.state
        return (
            <div className={'shop-page'}>
                {
                    collections.map(({id, ...members}) =>
                    (
                    <PreviewCollectionComponent key={id} {...members} />
                    )
                )
                }
            </div>
        );
    }
}

export default ShopPage ;