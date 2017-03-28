/**
 * Created by duccuong on 25/03/2017.
 */
import alt from '../../alt';
import axios from 'axios';


class CustomerActions {
    constructor() {}

    createCustomer(data) {
        axios.post('/api/customers/', data)
        .then((response) => {
            this.createCustomerSuccess(response);
        })
        .catch((xs) => {
            this.createCustomerFail(xs);
        });

        return false; // To suppress console warning
    }

    createCustomerSuccess(response) { return (dispatch) => dispatch(response) };
    createCustomerFail(jqXhr) { return (dispatch) => dispatch(jqXhr) };
}

export default alt.createActions(CustomerActions);