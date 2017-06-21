import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from '../actions/listActions'
import ExampleList from '../components/ExampleList'
import RaisedButton from 'material-ui/RaisedButton'
import '../styles/App.css'

// This should be a stateless component, since we're not using any lifecycle functions or the state
class App extends Component {
  render() {
    return (
      <div className="App">
        <ExampleList list={this.props.list} />
        <RaisedButton label="Populate List" onTouchTap={() => this.props.addList()} />
        <RaisedButton label="Clear List" onTouchTap={() => this.props.removeList()} />
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    list: state.lists.exampleList,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ ...listActions }, dispatch)
}

App.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any),
  addList: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
}

App.defaultProps = {
  list: [],
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
