import React, {Component} from 'react';
import ToastrTypes from '../common/ToastrTypes';

export default class ToastrItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            className: ''
        }
    }

    componentWillMount(){
        let className = 'toaster animated';
        if(this.props.toastrType == ToastrTypes.danger){
            className += ' danger shake';
        }else{
            className += ' fadeIn';
        }
        this.setState({className:className})
    }

    render(){
            return (
                <div className={this.state.className}>
                    {this.props.message}
                </div>
            )
    }
}

ToastrItem.propType = {
    message: React.PropTypes.string.isRequired,
    toastrType: React.PropTypes.string
}

ToastrItem.defaultProps = {
    toastrType: 'success'
}