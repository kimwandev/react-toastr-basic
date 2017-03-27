import ToastrContainer from './ToastrContainer';
import * as ToastrActions from './actions/ToastrActions';
import ToastrTypes from './common/ToastrTypes';
import './styles/react-toastr-basic.css';

export default ToastrContainer;

const Toast = ToastrActions.Pop;
const ToastDanger = (msg) => {
    ToastrActions.Pop(msg, ToastrTypes.danger);
}

const toastrStyle = './styles/react-toastr-basic.css';

const ToastSuccess = (msg) => {
     ToastrActions.Pop(msg, ToastrTypes.success);
}
export {Toast, ToastrTypes, ToastDanger, ToastSuccess};