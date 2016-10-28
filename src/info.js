import React from "react"
import ReactDom from "react-dom"

export default class InfoBar extends React.Component {
  static defaultProps = {
    image: '/assets/music.png',
    audio: '',
    title: '',
    artist: '',
    album: ''
  }

  render () {
    return (
      <div className="info">
        <div className="image"><img src={this.props.image} /></div>
        <p className="title">{this.props.title}</p>
        <p className="artist">{this.props.artist}</p>
        <p className="album">{this.props.album}</p>
      </div>
    )
  }
}
