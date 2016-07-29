import React, { Component} from 'react'
import { connect } from 'react-redux'

class App extends Component {

    render() {
        return (<div>
            hellow, world!!
            <ul>
                {
                    this.props.items.map(item => (<li> { item.name} </li>))
                }
            </ul>
        </div>)
    }
}



function mapStateToProps(state) {
    return {
        items: state
    }
}


export default connect(mapStateToProps)(App)