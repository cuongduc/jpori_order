import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Dropzone from 'react-dropzone';
import ProductExcelUploadActions from '../../actions/manager/ProductExcelUploadActions';
import ProductExcelUploadStore from '../../stores/manager/ProductExcelUploadStore';


const dzStyles = {
    width: '100%',
    padding: '10px 5px',
    border: '2px dotted #292b2c'
}

class ProductExcelUploadModal extends Component {

    constructor(props) {
        super(props);

        this.state = ProductExcelUploadStore.getState();

        this.onChange = this.onChange.bind(this);
        this.onFileDropped = this.onFileDropped.bind(this);
        this.onUploadButtonClicked = this.onUploadButtonClicked.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        ProductExcelUploadStore.listen(this.onChange);
    }

    componentWillUnmount() {
        ProductExcelUploadStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    onFileDropped(acceptedFiles, rejectedFiles) {
        ProductExcelUploadActions.setFile(acceptedFiles[0]);
    }

    onUploadButtonClicked() {
        ProductExcelUploadActions.upload(this.state.file);
    }

    toggle() {
        this.setState({file: null});
        this.setState({isModalOpened: !this.state.isModalOpened});
        this.setState({errorMessage: []});
        this.setState({success: null});
        this.setState({message: []});
    }

    _renderDropzoneText() {
        if (this.state.file) {
            return <div>File: <strong>{this.state.file.name}</strong></div>;
        }
        return <div>Nhấn vào đây để chọn file muốn tải lên</div>;
    }

    _renderUploadButton() {
        if (this.state.file) {
            if (this.state.isLoading) {
                return <button type="button" className="jp-btn jp-btn-primary" disabled>
                            <div className="loading-indicator">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </button>;
            } else{
                return <button type="button" className="jp-btn jp-btn-primary" onClick={this.onUploadButtonClicked}>Tải lên</button>;
            }
        }
        if (this.state.success) {
            return <button type="button" className="jp-btn jp-btn-primary" onClick={this.toggle}>Đóng</button>;
        }
        return <button type="button" className="jp-btn jp-btn-primary" disabled>Tải lên</button>;
    }

    _renderError() {
        if (this.state.errorMessage && this.state.errorMessage.length > 0) {
            return <div className="alert alert-danger" role="alert">
                    <strong>Lỗi!</strong> {this.state.errorMessage[0]}
                   </div>;
        }
    }

    _renderMessage() {
        if (this.state.message && this.state.message.length > 0) {
            return <div className="alert alert-success" role="alert">
                    <strong>Yeah!</strong> {this.state.message[0]}
                   </div>;
        }
    }

    render() {
        let dropzoneText = this._renderDropzoneText(),
            uploadButton = this._renderUploadButton(),
            errors = this._renderError(),
            message = this._renderMessage();

        return (
            <div>
                <button type="button" className="jp-btn jp-btn-orange" onClick={this.toggle}>
                    Thêm sản phẩm từ Excel
                </button>

                <Modal isOpen={this.state.isModalOpened}>
                    <ModalHeader toggle={this.toggle}>
                        Thêm sản phẩm từ Excel
                    </ModalHeader>
                    <ModalBody>
                        {message}
                        {errors}
                        <Dropzone onDrop={this.onFileDropped} multiple={false} style={dzStyles}>
                            {dropzoneText}
                        </Dropzone>
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="jp-btn jp-btn-default" onClick={this.toggle}>Huỷ</button>
                        {uploadButton}
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}

export default ProductExcelUploadModal;