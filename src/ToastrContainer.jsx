import React, {Component} from 'react';
import ToastrItem from './components/ToastrItem.jsx';
import ToastrStore from './store/ToastrStore.js';
import * as ToastrActions from './actions/ToastrActions.js';
import _ from 'lodash';

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
                    return <ToastrItem message={toastr.message} />
                })}
            </div>
        )
    }
}

