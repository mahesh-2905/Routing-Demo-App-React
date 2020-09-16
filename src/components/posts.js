import React,{Component} from 'react';
import PostViews from './postViews';

const url = "http://localhost:4000/languages/";
class Post extends Component{

    constructor(){
        super()
        this.state={
            langdata:''
        }
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) =>
            res.json()
        )
        .then((data)=>{
            this.setState({langdata:data});
        })
    }
    
    render(){
        return(
           
            <div className="container mt-3">
                <div className="card">
                    <div className="card-header bg-warning">
                      <div className="display-4 text-center ">
                          <h1>Post Component</h1>
                      </div>
                    </div>
                    <div className="card-body">
                        <div className="jumbotron">
                        <hr className="my-4"/>
                        <PostViews  data={this.state.langdata}></PostViews>
                    </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Post;