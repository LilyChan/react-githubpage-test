import React from 'react';
import Table from './table';
import Form from './form';

class App extends React.Component{

  state = {
    characters: [
    ]
  }

  removeCharacter = (index) => {
    this.setState({
      characters: this.state.characters.filter((c, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (characters) => {
    console.log('in app, handle submit, should set state', characters);
    this.setState( {characters: [ ...this.state.characters, characters] });
  }

  render(){
    const { characters } = this.state;

    return (
      <div className='App'>
        <h1> Hello React!!!</h1>
        <div className="container">
          <Form handleSubmit = {this.handleSubmit}/>
          <br />
          <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        </div>
      </div>
    )
  }
}

export default App;