/**
 * Created by duccuong on 25/03/2017.
 */
import alt from '../../alt';
import axios from 'axios';


class CustomerExcelUploadActions {
    setFile(file) {
        this.setFileSuccess(file);
        return false;
    }

    setFileSuccess(file) { return (dispatch) => dispatch(file) }

    upload(file) {
        let filename = file.name;
        let data = new FormData();
        data.append('file', file);
        axios.post(`/api/customers/import/${filename}`, data)
            .then((response) => {
                this.uploadSuccess(response);
            })
            .catch((jqXhr) => {
                this.uploadFail(jqXhr);
            });
        return false;
    }

    uploadSuccess(data) { return (dispatch) => dispatch(data) };
    uploadFail(data) { return (dispatch) => dispatch(data) };
}

export default alt.createActions(CustomerExcelUploadActions);