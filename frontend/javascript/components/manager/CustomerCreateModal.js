/**
 * Created by duccuong on 24/03/2017.
 */
import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { Form, FormGroup, Label } from 'reactstrap';

import CustomerStore from '../../stores/manager/CustomerStore';
import CustomerActions from '../../actions/manager/CustomerActions';

class CustomerCreateModal extends Component {
    constructor(props) {
        super(props);

        this.state = CustomerStore.getState();
        this.onChange = this.onChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onCreateButtonClicked = this.onCreateButtonClicked.bind(this);
    }

    componentDidMount() {
        CustomerStore.listen(this.onChange);
    }

    componentWillUnmount() {
        CustomerStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    onCreateButtonClicked() {
        let data = this.state.customer;
        CustomerActions.createCustomer(data);
    }

    setValue(field, event) {
        let object = this.state.customer;
        object[field] = event.target.value;
        this.setState({customer: object});
    }

    toggle() {
        this.setState({errorMessage: []});
        this.setState({isModalOpened: !this.state.isModalOpened});
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-outline-primary btn-sm" onClick={this.toggle}>
                    <i className="fa fa-plus"></i>
                    Thêm khách hàng thủ công
                </button>
                <Modal isOpen={this.state.isModalOpened} toggle={this.state.toggle} size="lg">
                    <ModalHeader toggle={this.toggle}>Thêm khách hàng mới</ModalHeader>
                    <ModalBody>
                        <Form name="createCustomerForm" id="createCustomerForm" ref="form">
                            {this.state.errorMessage.length > 0 && (
                                <div className="row">
                                    <div className="col">
                                        <div className="alert alert-danger" role="alert">
                                            <ul>
                                            {this.state.errorMessage.map(error => <li>{error}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="row">
                                <div className="col">
                                    <FormGroup>
                                        <Label>Mã khách hàng</Label>
                                        <Input type="text" required name="id" placeholder="VD: KH00001" onChange={this.setValue.bind(this, 'id')} />
                                    </FormGroup>
                                </div>
                                <div className="col">
                                    <FormGroup>
                                        <Label>Họ tên</Label>
                                        <Input type="text" required name="name" placeholder="VD: Phạm Trường Vinh" onChange={this.setValue.bind(this, 'name')}/>
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <FormGroup>
                                        <Label>Số điện thoại</Label>
                                        <Input type="text" required name="phone" placeholder="VD: 0989258226" onChange={this.setValue.bind(this, 'phone')}/>
                                    </FormGroup>
                                </div>
                                <div className="col">
                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input type="email" name="email" placeholder="VD: jpori@gmail.com" onChange={this.setValue.bind(this, 'email')}/>
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <FormGroup>
                                        <Label>Địa chỉ</Label>
                                        <Input type="text" name="address" placeholder="VD: Số 16, Ngõ 76 Nguyễn Chí Thanh, Hà Nội" onChange={this.setValue.bind(this, 'address')}/>
                             </FormGroup>
                                </div>
                                <div className="col">
                                    <FormGroup>
                                        <Label>Ngày sinh</Label>
                                        <Input type="date" name="birthday" ref="birthday" onChange={this.setValue.bind(this, 'birthday')}/>
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <FormGroup>
                                        <Label>Mã giảm giá</Label>
                                        <Input type="text" name="promotion_code" placeholder="VD: JP_1213" onChange={this.setValue.bind(this, 'promotion_code')}/>
                                    </FormGroup>
                                </div>
                                <div className="col">
                                    <FormGroup>
                                        <Label>Đã được chăm sóc?</Label>
                                        <Input type="select" name="is_serviced" onChange={this.setValue.bind(this, 'is_serviced')}>
                                            <option value="false">Chưa gọi điện CS</option>
                                            <option value="true">Đã gọi điện CS</option>
                                        </Input>
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <FormGroup>
                                        <Label>Ghi chú</Label>
                                        <Input type="textarea" name="note" onChange={this.setValue.bind(this, 'note')}/>
                                    </FormGroup>
                                </div>
                            </div>

                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-outline-secondary' onClick={this.toggle}>Huỷ</button>
                        <button type="button" className='btn btn-outline-primary' onClick={this.onCreateButtonClicked}>Tạo mới</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CustomerCreateModal;
