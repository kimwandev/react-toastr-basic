'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pop = Pop;
exports.RemoveFirstToastr = RemoveFirstToastr;

var _ToastrDispatcher = require('../ToastrDispatcher');

var _ToastrDispatcher2 = _interopRequireDefault(_ToastrDispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pop(message) {
    _ToastrDispatcher2.default.dispatch({
        type: _ToastrDispatcher.dispatchActions.TOAST,
        payload: message
    });

    setTimeout(function () {
        RemoveFirstToastr();
    }, 5000);
}

function RemoveFirstToastr() {
    _ToastrDispatcher2.default.dispatch({
        type: _ToastrDispatcher.dispatchActions.CLEAR_PREVIOUS
    });
}