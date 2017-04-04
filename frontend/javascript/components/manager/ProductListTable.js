import React, { Component } from 'react';
import DataGrid from 'react-datagrid';


const columns = [
    { name: 'index', title: '#', width: 50 },
    { name: 'firstName' },
    { name: 'city' },
    { name: 'email' }
]


class ProductListTable extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    render() {
        return (
            <DataGrid 
                idProperty="id"
                dataSource={this.state.data}
                columns={columns}
                style={{height: 200}}
                emptyText={'Không có dữ liệu'}
            />
        );
    }
}

export default ProductListTable;