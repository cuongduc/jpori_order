import React, { Component } from 'react';


class OrderCreateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpened: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({isModalOpened: ! this.state.isModalOpened});
    }

    render() {
        return (
            <button type="button" className="jp-btn jp-btn-default" onClick={this.toggle}>
                Thêm Đơn hàng thủ công
            </button>
        );
    }
}

export default OrderCreateModal