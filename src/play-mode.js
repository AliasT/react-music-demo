import React from 'react'

export default class PlayMode extends React.Component {
  static modes = [
    { name: 'all', className: 'icon-liebiaoxunhuan'},
    { name: 'random', className: 'icon-suiji2' }
  ]

  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  changeMode (event) {
    event.preventDefault()
    event.stopPropagation()
    const index = (this.state.index + 1) % PlayMode.modes.length
    this.setState({
      index: index
    })
    this.props.handleModelChange(PlayMode.modes[index].name)
  }

  componentWillUpdate (nextProps, nextState) {

  }

  render () {
    const mode = PlayMode.modes[this.state.index]
    return (
      <div id="play-mode">
        <a className={'iconfont ' + mode.className} onClick={this.changeMode.bind(this)}></a>
      </div>
    )
  }


}
