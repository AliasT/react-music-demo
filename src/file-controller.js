import React from "react"
import ReactDom from "react-dom"
import id3 from "jsmediatags"
import { toDataUrlFromBuffer, toDataUrl } from "./to-data-url"
import Controls from "./controls"
import InfoBar from "./info.js"
import FileLists from "./file-lists"
import "../sass/audio-player.scss"

/**
 *
 * 处理文件拖放
 *
 */
export default class FileInputController extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      src: '',
      index: 0,
      isPlaying: false,
      files: [
        { name: '天黑黑-张学友', href: '/mp3/1.mp3' },
        { name: '可以了-陈奕迅', href: '/mp3/2.mp3' }
      ]
    }
    this.handleFile(this.state.index)
  }


  handleFile (i) {
    const url = location.origin + this.state.files[i].href
    id3.read(url, {
      onSuccess: (result) => {
        const tags = result.tags
        this.setState({
          isPlaying: true,
          index: i,
          src: url,
          info: {
            image: toDataUrlFromBuffer(tags.picture.data),
            artist: tags.artist,
            title: tags.title,
            album: tags.album
          }
        })
      }
    })
  }

  prev () {
    var prevIndex = this.state.index - 1
    if (prevIndex < 0) {
      prevIndex = this.state.files.length - 1
    }
    this.handleFile(prevIndex)
  }

  next () {
    var nextIndex = this.state.index + 1
    if (nextIndex > this.state.files.length - 1) {
      nextIndex = 0
    }
    this.handleFile(nextIndex)
  }

  componentDidMount () {
    var _this = this;
    this.refs.audio.addEventListener('timeupdate', function () {
      _this.setState({
        currentTime: this.currentTime,
        duration: this.duration
      })
    })
  }

  onMusicSelect (src) {
    this.handleFile(src)
  }

  setPlayStatus () {
    var audio = this.refs.audio
    if (this.state.isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }

    this.setState({
      isPlaying: !this.state.isPlaying
    })
  }

  render () {
    return (
      <div className="file-input-controller" ref={ ele => this._ele = ele } >
        <FileLists files={this.state.files} onItemSelect={this.onMusicSelect.bind(this)}></FileLists>
        <audio autoPlay="true" controls="controls" ref="audio" src={this.state.src}></audio>
        <InfoBar { ...this.state.info }></InfoBar>
        <Controls
          ref="controls"
          audio={this.state.audio}
          prev={this.prev.bind(this)}
          isPlaying={this.state.isPlaying}
          next={this.next.bind(this)}
          setPlayStatus={this.setPlayStatus.bind(this)}
          currentTime={this.state.currentTime}
          duration={this.state.duration}>
        </Controls>
      </div>
    )
  }
}
