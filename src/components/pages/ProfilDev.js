import React from 'react';
import Navbarlogin from '../core/Navbar';
import CardProfil from '../dev/CardProfil';
import styled from 'styled-components';


class ProfilDev extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            profilId : []
        }
        this.renderProfilDev = this.renderProfilDev.bind(this);
    }

    componentDidMount(){
      const url = `http://192.168.1.219:3001/users`;
      console.log('url', url);
      fetch(url)
      .then(res => res.json())
      .then(json =>{
          console.log("json", json);
          this.setState({
            profilId : json.data[0]
          })
      });
    }


    renderProfilDev(){
        return (
            <CardProfil 
            firstName = {this.state.profilId.firstName}
            lastName = {this.state.profilId.lastName}
            bio = {this.state.profilId.bio}
            picture = {this.state.profilId.picture}
            lastName = {this.state.profilId.lastName}
            city = {this.state.profilId.city}
            title = {this.state.profilId.title}
            
            /> 
        )
    }

    render(){
        return (
            <div>
                <Navbarlogin />
                {this.renderProfilDev()}
            </div>
            
        )
    }
} 

export default ProfilDev;