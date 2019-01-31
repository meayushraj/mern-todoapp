// import React, { Component } from 'react';
// export default class DeleteTodo extends Component {
//     render() {
//         return (
//             <div>
//                 <p>Welcome to Delete Todo Component!!</p>
//             </div>
//         )
//     }
// }


import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteTodo extends Component {

    constructor(props) {
        super(props);
        // this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        // e.preventDefault();

        axios.delete('https://metodolist.herokuapp.com/todos/delete/' + this.props.match.params.id)
            .then(res => console.log(res.data));

    }
    render() {
        return (
            <div>
                <p>Welcome to Delete Todo Component!!</p>
            </div>
        )
    }
}