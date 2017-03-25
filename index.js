'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = undefined;

var _ToastrContainer = require('./ToastrContainer.jsx');

var _ToastrContainer2 = _interopRequireDefault(_ToastrContainer);

var _ToastrActions = require('./actions/ToastrActions.js');

var ToastrActions = _interopRequireWildcard(_ToastrActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ToastrContainer2.default;


var Toast = ToastrActions.Pop;

exports.Toast = Toast;
