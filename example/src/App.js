import React, { Component } from 'react'

import { FormBuilder } from 'form-builder-ahay'

const items = [
{
  key: "Header",
  name: "Header Text",
  icon: "fa fa-header"
},
{
  key: "Paragraph",
  name: "Paragraph",
  icon: "fa fa-paragraph"
},
{
  key: "Dropdown",
  name: "Dropdown",
  icon: "fa fa-caret-square-o-down"
}
];

export default class App extends Component {
  render () {
    return (
      <div>
          <FormBuilder
             items={items}
             onSubmit={() => {}}
           />
      </div>
    )
  }
}
