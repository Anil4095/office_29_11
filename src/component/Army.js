import React, { Component } from 'react'
 const  Army= Men=>{
 class newMen extends Component {
    state={
        gunshot:0
    }

    handleGunshot=()=>{
       this.setState({gunshot:this.state.gunshot+1})
    
        

    }
    render() {
        return (
        <Men hcgunname=" AK-47" hocgunshot={this.state.gunshot}
         hochandleGunshot={this.handleGunshot}
         {...this.props}
         />
            
        )
    }
}
return newMen;
 }

export default Army
