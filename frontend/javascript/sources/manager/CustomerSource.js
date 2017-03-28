/**
 * Created by duccuong on 25/03/2017.
 */
import 'whatwg-fetch';

class CustomerSource {
    constructor() {}
    createCustomer(data) {
        fetch('/api/customers/', {
            method: 'POST',
            body: data
        })
        .then((response) => {
            return response.json();
        })
        .catch((xs) => {
            console.log(xs);
            return xs;
        });
    }

}

export default CustomerSource;