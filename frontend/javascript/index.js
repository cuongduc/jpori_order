import React from 'react';
import ReactDOM from 'react-dom';
import CustomerManager from './CustomerManager';
import ProductManager from './ProductManager';
import OrderManager from './OrderManager';
import ProductListTable from './components/manager/ProductListTable';


import css from 'bootstrap/dist/css/bootstrap.min.css';

if (document.getElementById('react-customer-playground')) {
    ReactDOM.render(<CustomerManager/>, document.getElementById('react-customer-playground'));
} else if (document.getElementById('react-product-playground')) {
    ReactDOM.render(<ProductManager/>, document.getElementById('react-product-playground'));
} else if (document.getElementById('react-order-playground')) {
    ReactDOM.render(<OrderManager />, document.getElementById('react-order-playground'));
}