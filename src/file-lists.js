import React from 'react'
import ReactDom from 'react-dom'

/**
 * 播放列表
 */
export default class FileLists extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showList: false
    }
  }

  toggle () {
    this.setState({
      showList: !this.state.showList
    })
  }

  onClick (e, i) {
    e.preventDefault()
    this.props.onItemSelect(i)
    this.setState({
      showList: false
    })
  }

  render () {
    const className = 'file-list' + (this.state.showList ? '' : ' hidden')
    return (
      <div className="file-list-container">
        <a href="javascript:void(0);" onClick={this.toggle.bind(this)} className="toggle"><i className="iconfont icon-zhedie" ></i></a>
        <ul className={className}>
          {
            this.props.files.map((file, i) => {
              return <li key={i}><a href={file.href} onClick={(e) => this.onClick(e, i)}>{file.name}</a></li>
            })
          }
        </ul>
      </div>
    )
  }
}
