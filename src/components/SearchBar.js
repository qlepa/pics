import React from 'react'

class SearchBar extends React.Component {
    state = {
        term: ''
    };
    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.term)
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={ this.onFormSubmit } className="ui form">
                <label>Image search</label>
                    <input type="text" value={this.state.value} className="field" onChange={(e) => this.setState = ({ term: e.target.value })} />
                </form>
            </div>
        )
    };
};

export default SearchBar;