import React, { Component } from 'react'

export default class LocationList extends Component {
    render(){
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        <h3>{location.name}</h3>
                        <h5>{location.address}</h5>
                    </div>
                    
                    )
            }
            </section>
        )
    }
}