import React from 'react'

export default class InfosCards extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.description}</p>
                <p>{this.props.manufacturers}</p>
                <a href={this.props.twitter}>Link Twitter</a>
                <a href={this.props.website}>Link Website</a>
                <a href={this.props.wikipedia}>Link Wikipédia</a>
            </div>
        )
    }
}