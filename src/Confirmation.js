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
            <div className="formStep">
                <h2>Récapitulatif</h2>
                <p>Merci de bien vouloir vérifier les informations saisies :</p>
                <ul>
                    <li><label>Civilité :</label> {civilite}</li>
                    <li><label>Nom :</label> {nom}</li>
                    <li><label>Prénom :</label> {prenom}</li>
                    <li><label>Email :</label> {email}</li>
                    {telephone ? <li><label>Téléphone :</label> {telephone}</li> : ''}
                    {framework ? <li><label>Framework préféré :</label> {framework}</li> : ''}
                    {autre ? <li><label>Autre :</label> {autre}</li> : ''}
                </ul>
                <button className="btn" onClick={this.precedent}>Précédent</button>
                <button className="btn" onClick={this.saveAndContinue}>Enregistrer</button>
                <button className="btn" onClick={this.annuler}>Annuler</button>
            </div>
        )
    }
}

export default Confirmation;