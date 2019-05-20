import React, { Component } from 'react'

export default class AnimalList extends Component {
    render(){
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        <h3>{animal.name}</h3>
                        <h5>{animal.species}</h5>
                    </div>

                    )
            }
            </section>
        )
    }
}