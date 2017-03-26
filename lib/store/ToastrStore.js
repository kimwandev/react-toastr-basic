'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

var _ToastrDispatcher = require('../ToastrDispatcher');

var _ToastrDispatcher2 = _interopRequireDefault(_ToastrDispatcher);

var _ToastrTypes = require('../common/ToastrTypes');

var _ToastrTypes2 = _interopRequireDefault(_ToastrTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToastrStore = function (_EventEmitter) {
    _inherits(ToastrStore, _EventEmitter);

    function ToastrStore() {
        _classCallCheck(this, ToastrStore);

        var _this = _possibleConstructorReturn(this, (ToastrStore.__proto__ || Object.getPrototypeOf(ToastrStore)).call(this));

        _this.toastrs = [];
        _this.id = 0;
        return _this;
    }

    _createClass(ToastrStore, [{
        key: 'handleActions',
        value: function handleActions(action) {
            switch (action.type) {
                case _ToastrDispatcher.dispatchActions.TOAST:
                    this.id++;
                    this.toastrs.push({
                        id: this.id,
                        title: 'Success',
                        message: action.payload
                    });
                    this.emit('change');
                    break;
                case _ToastrDispatcher.dispatchActions.CLEAR_PREVIOUS:
                    this.toastrs.splice(0, 1);
                    this.emit('change');
                    break;
                case _ToastrDispatcher.dispatchActions.TOAST_DANGER:
                    this.id++;
                    this.toastrs.push({
                        id: this.id,
                        title: 'Success',
                        type: _ToastrTypes2.default.danger,
                        message: action.payload
                    });
                    this.emit('change');
                    break;
            }
        }
    }]);

    return ToastrStore;
}(_events.EventEmitter);

var toastrStoreInstance = new ToastrStore();
toastrStoreInstance.dispatchId = _ToastrDispatcher2.default.register(toastrStoreInstance.handleActions.bind(toastrStoreInstance));

exports.default = toastrStoreInstance;