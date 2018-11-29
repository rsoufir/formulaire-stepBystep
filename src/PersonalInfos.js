import React, { Component } from 'react';

class PersonalInfos extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    precedent  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const { values } = this.props;
        return(
            <form className="formStep" onSubmit={this.saveAndContinue}>
                <fieldset>
                    <legend>Etape 2 : Questions</legend>
                    <div className="field">
                        <label>Framework préféré ?</label>
                        <label className="framework">
                            Vue
                            <input type="radio" value="Vue" checked={values.framework === 'Vue'} onChange={this.props.handleChange('framework')} />
                        </label>
                        <label className="framework">
                            Angular
                            <input type="radio" value="Angular" checked={values.framework === 'Angular'} onChange={this.props.handleChange('framework')} />
                        </label>
                        <label className="framework">
                            Symfony
                            <input type="radio" value="Symfony" checked={values.framework === 'Symfony'} onChange={this.props.handleChange('framework')} />
                        </label>
                    </div>
                    <div className="field">
                        <label>Autre</label>
                        <textarea rows="4" cols="33" defaultValue={values.autre} onChange={this.props.handleChange('autre')} />    
                    </div>
                    <div className="buttons">
                        <button className="btn" onClick={this.precedent}>Précédent</button>
                        <button className="btn" type="submit">Suivant</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default PersonalInfos;