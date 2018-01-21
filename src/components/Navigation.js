import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Send from './Send.js'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='massive'>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='send'
          active={activeItem === 'send'}
          onClick={this.handleItemClick}
          linkto={this.handleItemClick}
        >
          Send Message
        </Menu.Item>

        <Menu.Item
          name='aboutus'
          active={activeItem === 'aboutus'}
          onClick={this.handleItemClick}
        >
          About Us
        </Menu.Item>

        <Menu.Item
          name='faq'
          active={activeItem === 'faq'}
          onClick={this.handleItemClick}
        >
          FAQ
        </Menu.Item>
      </Menu>
    )
  }
}
