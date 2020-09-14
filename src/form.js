import React, {Component} from 'react';

export default class Form extends Component{
    initState = {
        name:'',
        job:''
    }

    state = this.initState;

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = (event) => {
        event.preventDefault();
        console.log('in from submit for, should call set parent state', this.state);
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        const {name, job} = this.state;

        return (
            <form>
                <label htmlFor="name"> Name </label>
                <input 
                    type = 'text'
                    name = 'name'
                    id = 'name'
                    value = {name}
                    onChange = { this.handleChange }
                />
                <label htmlFor='job'> Job </label>
                <input 
                    type = 'text'
                    name = 'job'
                    id = 'job'
                    value = {job}
                    onChange = { this.handleChange }
                />
                <button type='submit' onClick={ this.submitForm }>Submit</button>
            </form>
        )
    }
}