import {component } from 'react';

export class SearchBox extends Component {
    render(){
        return (
            <input
            className={this.props.className}
            type="search"
            placeholder={this.props.pkaceholder}
            onChange={this.props.onChangeHandler}
          />
        )
    }
}
