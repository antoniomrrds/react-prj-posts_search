import { Component } from "react";
import './lifeCycle.css'

class LifeCycle extends Component {

    state = {
        counter: 0,
        posts: [
            {
                id: 1,
                title: 'o titulo 1',
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
            }

        ]
    }
    timeoutUpdate = null;
 

    componentDidMount() {
        this.handleTimeout();
     
    }

    componentDidUpdate(){
        this.handleTimeout();
    }
    componentWillUnmount(){
        clearTimeout(this.timeoutUpdate)
    }

    handleTimeout = () =>{
        const {posts ,counter} = this.state
        posts[0].title = 'New title One !!!'
      this.timeoutUpdate = setTimeout(()=>{
            this.setState({posts,counter:counter +1});
        },1000)
      
    }

    render() {
        const { posts, counter } = this.state

        return (
            <div className="lifeCycle">
                <p>{counter}</p>

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
export default  LifeCycle 