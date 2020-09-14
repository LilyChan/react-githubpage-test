import React, {Component} from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
        </thead>
    )
};

const TableBody = (props) => {
    return (
        <tbody>
            {props.characterData.map( (c,i) => {
                return (
                    <tr key={i}>
                        <td>{c.name}</td>
                        <td>{c.job}</td>
                        <td>
                            <button onClick={ ()=> props.removeCharacter(i)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
};

class Table extends Component{
    render(){

        const {characterData, removeCharacter} = this.props;

        return (
            <table border='1'>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}

export default Table;