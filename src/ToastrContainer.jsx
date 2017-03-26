import React, {Component} from 'react';
import ToastrItem from './components/ToastrItem';
import ToastrStore from './store/ToastrStore';

export default class ToastrContainer extends Component{
    constructor(){
        super();
        this.state = {
            toastrs : []
        }
    }

    componentWillMount(){
        ToastrStore.on('change', () => {
            let toastrs = ToastrStore.toastrs;
            this.setState({toastrs:toastrs});
        })
    }

    render(){
        return (
            <div className="toaster-container">
                {this.state.toastrs.map((toastr) => {
                    return <ToastrItem message={toastr.message} id={toastr.id}/>
                })}
            </div>
        )
    }
}

