import React, {Component} from 'react';

export default class ToastrItem extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
            return (
                <div className="toaster animated fadeIn">
                    {this.props.message}
                </div>
            )
    }
}

