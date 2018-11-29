import React, { Component } from 'react';

class UserInfos extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <form className="formStep" onSubmit={this.saveAndContinue}>
                <fieldset>
                    <legend>Etape 1 : Informations générales</legend>
                    <div className="field">
                        <label>Civilité</label>
                        <select onChange={this.props.handleChange('civilite')} defaultValue={values.civilite}>
                            <option value='Monsieur'>Monsieur</option>
                            <option value='Madame'>Madame</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Nom*</label>
                        <input
                        type='text'
                        required
                        placeholder='Nom'
                        onChange={this.props.handleChange('nom')}
                        defaultValue={values.nom}
                        />
                    </div>
                    <div className="field">
                        <label>Prénom*</label>
                        <input
                        type='text'
                        required
                        placeholder='Prénom'
                        onChange={this.props.handleChange('prenom')}
                        defaultValue={values.prenom}
                        />
                    </div>
                    <div className="field">
                        <label>Email*</label>
                        <input
                        required
                        type='email'
                        placeholder='Email'
                        onChange={this.props.handleChange('email')}
                        defaultValue={values.email}
                        />
                    </div>
                    <div className="field">
                        <label>Téléphone</label>
                        <input
                        type='text'
                        pattern="^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$"
                        placeholder='+33123456789'
                        onChange={this.props.handleChange('telephone')}
                        defaultValue={values.telephone}
                        />
                    </div>
                    <div className="buttons">
                        <button className="btn" type='submit'>Suivant</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default UserInfos;