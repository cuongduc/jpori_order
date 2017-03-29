/**
 * Created by duccuong on 25/03/2017.
 */
import alt from '../../alt';
import CustomerActions from '../../actions/manager/CustomerActions';


class CustomerStore {
    constructor() {
        this.bindListeners({
            onCreateCustomerSuccess: CustomerActions.CREATE_CUSTOMER_SUCCESS,
            onCreateCustomerFail: CustomerActions.CREATE_CUSTOMER_FAIL
        });
        this.customer = {
            id: null,
            name: null,
            phone: null,
            address: null,
            birthday: null,
            promotion_code: null,
            is_serviced: false,
            note: null
        };
        this.isModalOpened = false;
        this.isLoading = false;
        this.errorMessage = [];
    }

    onCreateCustomerSuccess(response) {
        if (response.data) {
            this.customer = response.data;
            this.isModalOpened = false;
            this.isLoading = false;
            this.errorMessage = [];
        }
    }

    onCreateCustomerFail(xhr) {
        this.isModalOpened = true;
        this.errorMessage.push(xhr.response.data);
    }

}

export default alt.createStore(CustomerStore);