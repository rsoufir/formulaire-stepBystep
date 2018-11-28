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
            <form onSubmit={this.saveAndContinue}>
                <h1>Etape 2 : Questions</h1>
                    <label>Framework préféré ?</label>
                    <label>
                        Vue
                        <input type="radio" value="Vue" checked={values.framework === 'Vue'} onChange={this.props.handleChange('framework')} />
                    </label>
                    <label>
                        Angular
                        <input type="radio" value="Angular" checked={values.framework === 'Angular'} onChange={this.props.handleChange('framework')} />
                    </label>
                    <label>
                        Symfony
                        <input type="radio" value="Symfony" checked={values.framework === 'Symfony'} onChange={this.props.handleChange('framework')} />
                    </label>
                    <label>Autre</label>
                    <textarea defaultValue={values.autre} onChange={this.props.handleChange('autre')} />    
                <button onClick={this.precedent}>Précédent</button>
                <button type="submit">Suivant</button>
            </form>
        )
    }
}

export default PersonalInfos;