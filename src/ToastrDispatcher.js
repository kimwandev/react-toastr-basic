import {Dispatcher} from 'flux';

export default new Dispatcher;

export const dispatchActions = {
    TOAST: 'REACT_TOASTR_TOAST',
    TOAST_DANGER: 'REACT_TOAST_DANGER',
    CLEAR_PREVIOUS: 'REACT_TOASTR_CLEAR_PREVIOUS'
}