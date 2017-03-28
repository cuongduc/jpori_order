/**
 * Created by duccuong on 24/03/2017.
 */
import React, {Component} from 'react';
import CustomerCreateModal from './components/manager/CustomerCreateModal';
import CustomerExcelUploadModal from './components/manager/CustomerExcelUploadModal';


class CustomerManager extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CustomerCreateModal />
                <CustomerExcelUploadModal />
            </div>
        )
    }
}

export default CustomerManager;