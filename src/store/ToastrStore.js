import {EventEmitter} from 'events';
import ToastrDispatcher from '../ToastrDispatcher.js';
import _ from 'lodash';

class ToastrStore extends EventEmitter{
    constructor(){
        super();

        this.toastrs = [];
        this.id = 0;
    }

    handleActions(action){
        switch(action.type){
            case "TOASTR_POP":
                this.id++;
                this.toastrs.push({
                    id: this.id,
                    title: 'Success',
                    message: action.payload
                })
                this.emit('change');
                break;
            case "REMOVE_FIRST_TOASTR":
                this.toastrs.splice(0, 1);
                this.emit('change');
                break;
        }
    }
}

const toastrStoreInstance = new ToastrStore;
toastrStoreInstance.dispatchId = ToastrDispatcher.register(toastrStoreInstance.handleActions.bind(toastrStoreInstance));

export default toastrStoreInstance;