import React, { Component } from 'react';

class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            forms: []
        }
    }
    componentDidMount = () => {
        let baseUrl = "http://localhost:3000/forms";
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                let forms = data.map((form, index) => {
                    return (
                        <div className="form" key={index}>
                            <p>Civilite : {form.civilite}</p>
                            <p>Nom : {form.nom}</p>
                            <p>Prenom : {form.prenom}</p>
                            <p>Email : {form.email}</p>
                            {form.telephone ? <p>Téléphone : {form.telephone}</p> : ''}
                            {form.framework ? <p>Framework préféré : {form.framework}</p> : '' }
                            {form.autre ? <p>Autre : {form.autre}</p> : '' }
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
                <h1>Liste des formulaires enregistrés</h1>
                {this.state.forms}
            </div>
        )
    }
}

export default List;