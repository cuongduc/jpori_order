/**
 * Created by duccuong on 25/03/2017.
 */
import alt from '../../alt';
import CustomerExcelUploadActions from '../../actions/manager/CustomerExcelUploadActions';


class CustomerExcelUploadStore {
    constructor() {
        this.bindActions(CustomerExcelUploadActions);
        this.file = null;
        this.isModalOpened = false;
        this.isLoading = false;
        this.errorMessage = [];
    }

    onSetFileSuccess(file) {
        this.file = file;
        this.isModalOpened = true;
    }

    onUploadSuccess(response) {
        console.log("onUploadSuccess");
        if (response.status == 200) {
            this.file = null;
            this.isModalOpened = true;
            this.isLoading = false;
            this.errorMessage = [];
        }
    }

    onUploadFail(jqXhr) {
        console.log("onUploadFail");
        this.isModalOpened = true;
        this.isLoading = false;
        this.errorMessage.push(jqXhr.responseText);
    }
}

export default alt.createStore(CustomerExcelUploadStore);