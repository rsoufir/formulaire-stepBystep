import React, { Component } from 'react';

class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            forms: []
        }
    }
    refreshPage = () => {
        this.props.stepOne();
    }
    componentDidMount = () => {
        let baseUrl = "http://localhost:3000/forms";
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                let forms = data.map((form, index) => {
                    return (
                        <div className="form" key={index}>
                            <p><label>Civilite :</label> {form.civilite}</p>
                            <p><label>Nom :</label> {form.nom}</p>
                            <p><label>Prenom :</label> {form.prenom}</p>
                            <p><label>Email :</label> {form.email}</p>
                            {form.telephone ? <p><label>Téléphone :</label> {form.telephone}</p> : ''}
                            {form.framework ? <p><label>Framework préféré :</label> {form.framework}</p> : '' }
                            {form.autre ? <p><label>Autre :</label> {form.autre}</p> : '' }
                        </div>
                    )
                })
                this.setState({forms: forms})
            })
            .catch(error => console.log(error))
    }
    render(){
        return(
            <div>
                <h2>Liste des formulaires enregistrés</h2>
                <button className="btn fixed" onClick={this.refreshPage}>Créer un nouveau formulaire</button>
                {this.state.forms}
            </div>
        )
    }
}

export default List;