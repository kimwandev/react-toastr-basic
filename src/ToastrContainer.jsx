import React, {Component} from 'react';
import ToastrItem from './components/ToastrItem';
import ToastrStore from './store/ToastrStore';

export default class ToastrContainer extends Component{
    constructor(){
        super();
        this.state = {
            toastrs : []
        }

        this.ToastrStoreChangeCallback = this.ToastrStoreChangeCallback.bind(this);
    }

    componentWillMount(){
        ToastrStore.on('change', this.ToastrStoreChangeCallback);
    }

    componentWillUnmount(){
        ToastrStore.removeListener('change', this.ToastrStoreChangeCallback)
    }

    ToastrStoreChangeCallback(){
        let toastrs = ToastrStore.toastrs;
        this.setState({toastrs:toastrs});
    }

    render(){
        return (
            <div className="toaster-container">
                {this.state.toastrs.map((toastr) => {
                    return <ToastrItem key={toastr.id} message={toastr.message}/>
                })}
            </div>
        )
    }
}

