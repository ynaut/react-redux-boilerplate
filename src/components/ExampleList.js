import PropTypes from 'prop-types'
import { List, ListItem } from 'material-ui/List'
import React from 'react'

const renderList = list => (
  list.map((el, i) => (
    <ListItem primaryText={el} key={i} /> // We shouldn't use array index for keys, but we'll use it for this example
  ))
)

const exampleList = ({ list }) => (
  <List>
    { renderList(list) }
  </List>
)

exampleList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
}


export default exampleList
