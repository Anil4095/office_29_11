import React, { Component } from 'react'
import Army from './Army' 

class Officer2 extends Component {
   
    render() {
        return (
            <div>
                <h2>Camp2:{this.props.camp}</h2>
                  <h3 onMouseOver={this.props.hochandleGunshot}>
                    Officer2 {this.props.hcgunname} gunshot:{this.props.hocgunshot}
                 </h3>
            </div>
        )
    }
}

export default  Army(Officer2);
