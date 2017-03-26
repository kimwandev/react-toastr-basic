import {EventEmitter} from 'events';
import ToastrDispatcher, {dispatchActions} from '../ToastrDispatcher';
import ToastrTypes from '../common/ToastrTypes';
import _ from 'lodash';

class ToastrStore extends EventEmitter{
    constructor(){
        super();

        this.toastrs = [];
        this.id = 0;
    }

    handleActions(action){
        switch(action.type){
            case dispatchActions.TOAST:
                this.id++;
                this.toastrs.push({
                    id: this.id,
                    title: 'Success',
                    message: action.payload
                })
                this.emit('change');
                break;
            case dispatchActions.CLEAR_PREVIOUS:
                this.toastrs.splice(0, 1);
                this.emit('change');
                break;
            case dispatchActions.TOAST_DANGER:
                this.id++;
                this.toastrs.push({
                    id: this.id,
                    title: 'Success',
                    type: ToastrTypes.danger,
                    message: action.payload
                })
                this.emit('change');
                break;
        }
    }
}

const toastrStoreInstance = new ToastrStore;
toastrStoreInstance.dispatchId = ToastrDispatcher.register(toastrStoreInstance.handleActions.bind(toastrStoreInstance));

export default toastrStoreInstance;