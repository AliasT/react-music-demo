import React from "react"
import ReactDom from "react-dom"

export default class ProgressBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      current: this.props.current,
      total: this.props.total
    }
  }


  componentWillReceiveProps(props) {
    this.setState({
      current: props.current,
      total: props.total
    })
  }


  render () {
    const p = this.state.current / this.state.total * 100 + '%'

    return (
      <div className="total">
        <div className="progress" style={{ width: p}}>{this.state.currentTime}</div>
        <div>{this.state.currentTime}</div>
      </div>
    )
  }
}
