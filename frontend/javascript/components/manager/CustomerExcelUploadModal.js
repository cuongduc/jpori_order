/**
 * Created by duccuong on 24/03/2017.
 */
import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Dropzone from 'react-dropzone';
import CustomerExcelUploadActions from '../../actions/manager/CustomerExcelUploadActions';
import CustomerExcelUploadStore from '../../stores/manager/CustomerExcelUploadStore';


const dzStyles = {
    width: '100%',
    padding: '10px 5px',
    border: '2px dotted #292b2c'
}


class CustomerExcelUploadModal extends Component {
    constructor(props) {
        super(props);

        this.state = CustomerExcelUploadStore.getState();
        this.onChange = this.onChange.bind(this);
        this.onUploadButtonClicked = this.onUploadButtonClicked.bind(this);
        this.onFileDropped = this.onFileDropped.bind(this);
        this.toggle = this.toggle.bind(this);

    }

    componentDidMount() {
        CustomerExcelUploadStore.listen(this.onChange);
    }

    componentWillUnmount() {
        CustomerExcelUploadStore.unlisten(this.onChange);
    }

    toggle() {
        this.setState({errorMessage: []});
        this.setState({isModalOpened: !this.state.isModalOpened});
    }

    onChange(state) {
        this.setState(state);
    }

    onUploadButtonClicked(event) {
        CustomerExcelUploadActions.upload(this.state.file);
    }

    onFileDropped(acceptedFiles, rejectedFiles) {
        CustomerExcelUploadActions.setFile(acceptedFiles[0]);
    }

    render() {
        const errors = this.state.errorMessage;
        
        let error_node = null;
        if (errors && errors[0]) {
            error_node = <div className="alert alert-danger" role="alert">
                          <strong>Lỗi!</strong> {errors[0].message}
                        </div>;
        }

        return (
            <div>
                <button type="button" className="jp-btn jp-btn-orange" onClick={this.toggle}>
                    Thêm khách hàng từ Excel
                </button>

                <Modal
                    isOpen={this.state.isModalOpened}
                >
                    <ModalHeader toggle={this.toggle}>Upload File</ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col">
                                {error_node}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Dropzone onDrop={this.onFileDropped} multiple={false} style={dzStyles}>
                                    <div>Nhấn vào đây để chọn file muốn tải lên</div>
                                </Dropzone>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className='jp-btn jp-btn-default' onClick={this.toggle}>Huỷ</button>
                        <button className='jp-btn jp-btn-primary' onClick={this.onUploadButtonClicked}>Tải lên</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CustomerExcelUploadModal;