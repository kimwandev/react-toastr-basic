import ToastrDispatcher, {dispatchActions} from '../ToastrDispatcher';

export function Pop(message){
    ToastrDispatcher.dispatch({
        type: dispatchActions.TOAST,
        payload: message
    })

    setTimeout(() => {
        RemoveFirstToastr();
    }, 5000);
}

export function RemoveFirstToastr(){
    ToastrDispatcher.dispatch({
        type: dispatchActions.CLEAR_PREVIOUS
    })
}