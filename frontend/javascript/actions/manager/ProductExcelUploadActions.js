import alt from '../../alt';
import axios from 'axios';


class ProductExcelUploadActions {

    setFile(file) {
        this.setFileSuccess(file);
        return false;
    }

    setFileSuccess(file) { return (dispatch) => dispatch(file) }

    upload(file) {
        this.uploadStart();
        let fileName = file.name;
        let data = new FormData();
        data.append('file', file);

        axios.post(`/api/products/import/${fileName}`, data)
            .then((response) => {
                this.uploadSuccess(response);
            })
            .catch((jqXhr) => {
                this.uploadFail(jqXhr);
            });
        return false; // To suppress Alt's warning
    }

    uploadStart() { return (dispatch) => dispatch() }
    uploadSuccess(data) { return (dispatch) => dispatch(data) }
    uploadFail(data) { return (dispatch) => dispatch(data) }
}

export default alt.createActions(ProductExcelUploadActions);