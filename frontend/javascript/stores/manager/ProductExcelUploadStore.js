import alt from '../../alt';
import ProductExcelUploadActions from '../../actions/manager/ProductExcelUploadActions';


class ProductExcelUploadStore {
    constructor() {
        this.bindActions(ProductExcelUploadActions);

        this.file = null;
        this.isModalOpened = false;
        this.isLoading = false;
        this.errorMessage = [];
        this.message = [];
        this.success = null;
    }

    onSetFileSuccess(file) {
        this.file = file;
        this.isModalOpened = true;
        this.errorMessage = [];
        this.message = [];
    }

    onUploadStart() {
        this.isLoading = true;
    }

    onUploadSuccess(response) {
        this.file = null;
        this.isModalOpened = true;
        this.isLoading = false;
        this.errorMessage = [];
        if (response.status == 201) {
            this.message.push(
                'Đã cập nhật danh sách sản phẩm thành công. Xin vui lòng xem trên giao diện'
            );
        }
        this.success = true;
    }

    onUploadFail(jqXhr) {
        this.isModalOpened = true;
        this.isLoading = false;
        this.errorMessage.push(jqXhr.message);
        this.message = [];
        this.success = false;
    }
}

export default alt.createStore(ProductExcelUploadStore, 'ProductExcelUploadStore');