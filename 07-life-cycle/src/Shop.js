import React from 'react'
import axios from 'axios'

export default class Shop extends React.Component {
    state = {
        products: [],
        loaded: false
    }

    async componentDidMount() {
        // IMPORTANT: When using axios, the JSON files must be in the 'public' folder
        let response = await axios.get('/products.json')
        console.log(response.data)

        this.setState({
            products: response.data,
            loaded: true
        })
    }

    renderProducts() {
        if (this.state.products) {
            return (
                <ul>
                    {this.state.products.map( p => <li key={p._id}>{p.name} - ${p.cost / 100}</li>)}
                </ul>
            )
        }
        else {
            // This is where we can put the spinner animations
            return (
                <p>Loading please wait ... </p>
            )
        }
    }

    // Ensure that app still works even if there is no data since ComponentDidMount will only run after the first render
    // -> Take note of the initialization of state variable 'product' is an empty array
    render() {
        return (
            <React.Fragment>
                <h1>Our Shop</h1>

                {
                    this.state.loaded ?
                        <ul>
                            {this.state.products.map((p, index) => <li key={index}>{p.name} - ${p.cost / 100}</li>)}
                        </ul>
                        :
                        // This is where we can put loading spinner animations
                        <p>Loading please wait ...</p>

                }

            </React.Fragment>
        )
    }
}