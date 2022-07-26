import { Component } from "react";
import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import {TextInput} from'../../components/TextInput'
export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 10,
    searchValue:''
  };
  componentDidMount() {
    this.loadPosts();
  }
  loadPosts = async () => {
    const { page, postPerPage } = this.state;
    const postAndPhotos = await loadPosts();
    this.setState({
      posts: postAndPhotos.slice(page, postPerPage),
      allPosts: postAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postPerPage, posts, allPosts } = this.state;
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);
    this.setState({posts, page:nextPage });
  };

  handleChange =(e)=>{
      const {value} =  e.target;
      this.setState({searchValue:value})

  }

  render() {
    const { posts,page,postPerPage,allPosts,searchValue } = this.state;
    const noMorePosts = page+postPerPage >= allPosts.length;
    const filteredPosts = !!searchValue ?
    allPosts.filter(post =>{
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      )
    })
    :posts
    
    return (
      <section className="container">
        <div className="search-container">
         {!!searchValue &&(
            <h1>Search value:{searchValue} </h1>
          )}
         <TextInput  searchValue={searchValue} handleChange={this.handleChange}/> 
        </div>


        {filteredPosts.length > 0 &&(
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0  &&(
          <p>Não existem posts =(</p>
        )}
    

        <div className="button-container">
          {!searchValue && (
            <Button 
              disabled={noMorePosts}      
              text="Load more posts" 
              onClick={this.loadMorePosts} 
              />
          )}
        </div>
      </section>
    );
  }
}
