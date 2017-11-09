import React, { Component } from 'react'

export default class ViewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  postHeader = (header) => (
    <h1>{header}</h1>
  )

  postContent = (content) => (
    <div>
    <div dangerouslySetInnerHTML={{__html: content}} />
    </div>
  )

  postLayout = (post, idx) => (
    <div key={idx}>
    {this.postHeader(post.title.rendered)}
    {this.postContent(post.content.rendered)}
    </div>
  )

  displayPosts = (postArray) => (
    postArray.map(this.postLayout)
  )

  render() {
    return (
      <div xs={12}>
      {this.displayPosts(this.props.posts)}
      </div>
    )
  }
}
