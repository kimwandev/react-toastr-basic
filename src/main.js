import ToastrContainer from './ToastrContainer';
import * as ToastrActions from './actions/ToastrActions';
import ToastrTypes from './common/ToastrTypes';

export default ToastrContainer;

const Toast = ToastrActions.Pop;
const ToastDanger = (msg) => {
    ToastrActions.Pop(msg, ToastrTypes.danger);
}

const ToastSuccess = (msg) => {
     ToastrActions.Pop(msg, ToastrTypes.success);
}
export {Toast, ToastrTypes, ToastDanger, ToastSuccess};