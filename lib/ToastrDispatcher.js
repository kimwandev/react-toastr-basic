'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dispatchActions = undefined;

var _flux = require('flux');

exports.default = new _flux.Dispatcher();
var dispatchActions = exports.dispatchActions = {
    TOAST: 'REACT_TOASTR_TOAST',
    TOAST_DANGER: 'REACT_TOAST_DANGER',
    CLEAR_PREVIOUS: 'REACT_TOASTR_CLEAR_PREVIOUS'
};