import React, { Component } from 'react';
import UserInfos from './UserInfos';
import PersonalInfos from './PersonalInfos';
import Confirmation from './Confirmation';
import Success from './Success';
import List from './List';
import '../src/style.css';

class FormContainer extends Component{
  state = {
    step: 1,
    civilite: 'Monsieur',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    framework: '',
    autre: ''

  }
  nextStep = () => {
    const { step } = this.state
    this.setState({
        step : step + 1
    })
  }
  prevStep = () => {
    const { step } = this.state
    this.setState({
        step : step - 1
    })
  }

  stepOne = () => {
    this.setState({
        step : 1,
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        framework: '',
        autre: ''
    })
  }

  handleChange = input => event => {
      this.setState({ [input] : event.target.value })
  }

  render(){
    const {step} = this.state;
    const { civilite, nom, prenom, email, telephone, framework, autre } = this.state;
    const values = { civilite, nom, prenom, email, telephone, framework, autre };
    switch(step) {
      case 1:
          return <UserInfos 
                  nextStep={this.nextStep} 
                  handleChange = {this.handleChange}
                  values={values}
                  />
      case 2:
          return <PersonalInfos 
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange = {this.handleChange}
                  values={values}
                  />
      case 3:
          return <Confirmation 
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  stepOne={this.stepOne}
                  values={values}
                  />
      case 4:
          return <Success nextStep={this.nextStep}  />

      case 5:
          return <List 
                 stepOne={this.stepOne}
                 />

      default:
        return <UserInfos 
                nextStep={this.nextStep} 
                handleChange = {this.handleChange} 
                values={values} 
                />
    }
  }
}

export default FormContainer;

/*
class Formulaire1 extends Component{
  state = {
    incivilite: '',
    nom: '',
    prenom: '',
    email: ''
  }
   
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Les données ont été soumises");
  }
  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }
  render(){
    return (
      <div>
        <h2>Etape 1</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Civilité</label>
          <select>
            <option selected value={this.state.civilite}>Monsieur</option>
            <option value={this.state.civilite}>Madame</option>
          </select>
          <label>Nom</label><input required type="text" name="nom" value={this.state.nom} onChange={this.handleChange} />
          <label>Prénom</label><input required type="text" name="prenom" value={this.state.prenom} onChange={this.handleChange} />
          <label>Email</label><input required type="text" name="email" value={this.state.email} onChange={this.handleChange} />        
          <input type="submit" value="Suivant" />
        </form>
      </div>
    )
  }
}
class Formulaire2 extends Component{
  state = {
      autre: ''
  }
   
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Les données ont été soumises");
  }
  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }
  render(){
    return (
      <div>
        <h2>Etape 2 : questions ?</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Framework préféré ?</label>
          <label>
              <input type="radio" value="Vue" />
            Vue
          </label>
          <label>
              <input type="radio" value="Angular" />
              Angular
          </label>
          <label>
              <input type="radio" value="Symfony"  />
            Symfony
          </label>
          <label>Autre</label>
          <textarea value={this.state.autre} />      
          <input type="submit" value="Précédent" />
          <input type="submit" value="Suivant" />
        </form>
      </div>
    )
  }
}

class Formulaire extends Component{
  render(){
    return(
      <div>
        <Formulaire1 />
        <Formulaire2 />
      </div>
    )
  }
}

export default Formulaire;
*/
