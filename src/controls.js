import React from 'react'
import ReactDom from 'react-dom'
import ProgressBar from './progress-bar'

export default class Controls extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      current: 0,
      total: 1
    }
  }

  handlePrev () {
    this.props.prev()
  }

  handleNext () {
    this.props.next()
  }

  handlePlay (e) {
    this.props.setPlayStatus()
  }

  componentWillReceiveProps (props) {
    this.setState({
      current: props.currentTime,
      total: props.duration
    })
  }

  render () {
    const className = "iconfont " + (this.props.isPlaying ? 'icon-bofangqizanting' : 'icon-listbtnorangeplayselect2x')
    return (
      <div className="controls">
        <ProgressBar current={this.state.current} total={this.state.total}></ProgressBar>
        <div className="buttons flex">
          <span className="control prev iconfont icon-shangyishou" onClick={this.handlePrev.bind(this)}></span>
          <span onClick={this.handlePlay.bind(this)} className={className}></span>
          <span className="control next iconfont icon-xiayishou" onClick={this.handleNext.bind(this)}></span>
        </div>
      </div>
    )
  }
}
