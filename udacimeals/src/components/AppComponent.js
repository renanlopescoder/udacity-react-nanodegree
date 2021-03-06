import React, { Component } from 'react'
import { addRecipe } from '../actions'

class AppComponent extends Component {
  state = {
    calendar: null
  }

  componentDidMount() {
    const { store } = this.props
    store.subscribe(() => {
      this.setState(()=> ({
        calendar: store.getState()
      }))
    })
  }

  submit = () => {
    this.props.store.dispatch(addRecipe({
      day: 'monday',
      meal: 'breakfast',
      recipe: {
        label: this.input.value
      }
    }))
    this.input.value = ''
  }

  render() {
    return (
      <div>
        <input type="text" ref={(input) => this.input = input} placeholder="Monday's Breakfast" />
        <button onClick={this.submit} >Submit</button>
        <pre>
          Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    )
  }
}

export default AppComponent
