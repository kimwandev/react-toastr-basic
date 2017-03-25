import ToastrDispatcher from '../ToastrDispatcher.js';

export function Pop(message){
    ToastrDispatcher.dispatch({
        type: 'TOASTR_POP',
        payload: message
    })

    setTimeout(() => {
        RemoveFirstToastr();
    }, 5000);
}

export function RemoveFirstToastr(){
    ToastrDispatcher.dispatch({
        type: 'REMOVE_FIRST_TOASTR'
    })
}