import {Dispatcher} from 'flux';

export default new Dispatcher;

export const dispatchActions = {
    TOAST: 'REACT_TOASTR_TOAST',
    CLEAR_PREVIOUS: 'REACT_TOASTR_CLEAR_PREVIOUS'
}