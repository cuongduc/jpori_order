import React, { Component } from 'react';
import ProductExcelUploadModal from './components/manager/ProductExcelUploadModal';


class ProductManager extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ProductExcelUploadModal />
            </div>
        );
    }
}

export default ProductManager;