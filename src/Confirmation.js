import React, { Component } from 'react';

class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault()
        let baseUrl = "http://localhost:3000/forms";
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.props.values)
        }
        fetch(baseUrl, options)
            .then((res) => this.props.nextStep())
            .catch((error) => console.log(error))
    }

    precedent  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    annuler = (e) => {
        window.location.reload();
    }

    render(){
        const {values: { civilite, nom, prenom, email, telephone, framework, autre }} = this.props;

        return(
            <div>
                <h1>Récapitulatif</h1>
                <p>Merci de bien vouloir vérifier les informations saisies :</p>
                <ul>
                    <li>Civilité : {civilite}</li>
                    <li>Nom : {nom}</li>
                    <li>Prénom : {prenom}</li>
                    <li>Email : {email}</li>
                    {telephone ? <li>Téléphone : {telephone}</li> : ''}
                    {framework ? <li>Framework préféré : {framework}</li> : ''}
                    {autre ? <li>Autre : {autre}</li> : ''}
                </ul>
                <button onClick={this.precedent}>Précédent</button>
                <button onClick={this.saveAndContinue}>Enregistrer</button>
                <button onClick={this.annuler}>Annuler</button>
            </div>
        )
    }
}

export default Confirmation;