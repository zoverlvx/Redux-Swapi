import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getCharacters} from "../actions";

class CharacterListView extends React.Component {

  componentDidMount() {
	this.props.getCharacters();
  }

  render() {
	console.log("here is state and props",this.state, this.props)
    if (this.props.fetching) {
		return <div>Loading data...</div>;
    }
    return (
      <div className="CharactersList_wrapper">
      	<CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		characters: state.charsReducer.characters,
		fetching: state.charsReducer.fetching,
		error: state.charsReducer.error
	};
}

export default connect(
  mapStateToProps,
  {
	getCharacters
  }
)(CharacterListView);
