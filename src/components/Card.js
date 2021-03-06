import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.user.avatar_url} />
                <div className="card-info">
                    <h3 className="name">{this.props.user.name}</h3>
                    <p class="username">{this.props.user.login}</p>
                    <p>Location: {this.props.user.location}</p>
                    <p>Profile:  
                        <a href={this.props.user.html_url}> github page</a>
                    </p>
                    <p>Followers: {this.props.user.followers}</p>
                    <p>Following: {this.props.user.following}</p>
                    <p>Bio: {this.props.user.bio}</p>
                </div>
            </div>



        )
    }
}
