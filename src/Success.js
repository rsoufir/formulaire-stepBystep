import React, { Component } from 'react';

class Success extends Component{
    goToList = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        return(
            <div>
                <h1>Informations enregistrés avec succès.</h1>
                <button onClick={this.goToList}>Voir la liste des formulaires</button>
            </div>
        )
    }
}

export default Success;