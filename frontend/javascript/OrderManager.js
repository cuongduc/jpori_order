import React, { Component } from 'react';
import OrderExcelUploadModal from './components/manager/OrderExcelUploadModal';
import OrderCreateModal from './components/manager/OrderCreateModal';


class OrderManager extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <OrderCreateModal />
                <OrderExcelUploadModal />
            </div>
        );
    }
}

export default OrderManager;