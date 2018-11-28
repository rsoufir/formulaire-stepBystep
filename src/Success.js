import React, { Component } from 'react';

class Success extends Component{
    goToList = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        return(
            <div className="formStep">
                <h2>Informations enregistrées avec succès.</h2>
                <button className="btn" onClick={this.goToList}>Voir la liste des formulaires</button>
            </div>
        )
    }
}

export default Success;