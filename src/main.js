import ToastrContainer from './ToastrContainer';
import * as ToastrActions from './actions/ToastrActions';
import ToastrTypes from './common/ToastrTypes';

export default ToastrContainer;

const Toast = ToastrActions.Pop;

export {Toast, ToastrTypes};