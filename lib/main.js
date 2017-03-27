'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ToastSuccess = exports.ToastDanger = exports.ToastrTypes = exports.Toast = undefined;

var _ToastrContainer = require('./ToastrContainer');

var _ToastrContainer2 = _interopRequireDefault(_ToastrContainer);

var _ToastrActions = require('./actions/ToastrActions');

var ToastrActions = _interopRequireWildcard(_ToastrActions);

var _ToastrTypes = require('./common/ToastrTypes');

var _ToastrTypes2 = _interopRequireDefault(_ToastrTypes);

require('./styles/react-toastr-basic.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ToastrContainer2.default;


var Toast = ToastrActions.Pop;
var ToastDanger = function ToastDanger(msg) {
    ToastrActions.Pop(msg, _ToastrTypes2.default.danger);
};

var toastrStyle = './styles/react-toastr-basic.css';

var ToastSuccess = function ToastSuccess(msg) {
    ToastrActions.Pop(msg, _ToastrTypes2.default.success);
};
exports.Toast = Toast;
exports.ToastrTypes = _ToastrTypes2.default;
exports.ToastDanger = ToastDanger;
exports.ToastSuccess = ToastSuccess;