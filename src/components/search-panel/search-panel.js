import React, {Component} from 'react';

class SearchPanel extends Component {
    state={
        search:''
    }

    onSearchChange=(e)=>{
        const search=e.target.value
        this.setState({search})
        this.props.onSearchChange(search)
    }
  render() {
    return (
        <div>

          <input type="text"
                 className="form-control search-input"
                 placeholder="Поиск"
                    onChange={this.onSearchChange}
          value={this.state.search}/>

        </div>
    );
  }
}

export default SearchPanel;


