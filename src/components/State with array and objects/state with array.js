import { Component } from "react";

import './state with array.css'

class StateWithArray extends Component {

    state = {
        posts: [
            {
                id: 1,
                body: 'O corpo 1'
            },
            {
                id: 2,
                title: 'o titulo 2',
                body: 'O corpo 2'
            },
            {
                id: 3,
                title: 'o titulo  3',
                body: 'O corpo 3'
            },
            {
                id: 4,
                title: 'o titulo 4',
                body: 'O corpo 4'
            },
        ]
    }

    render() {
        const { posts } = this.state

        return (
            <div className="StateWithArray" >

                {posts.map(post => (
                    <div key={post.id}>
                        <h1 >{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))}

            </div>

        );
    }

}
export default StateWithArray 