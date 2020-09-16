import React,{Component} from 'react';

const url = "http://localhost:4000/languages"
class PostNews extends Component{
       
       constructor(props){
           super()
           this.state={
                topic:''
           }
       }
       
       componentDidMount(){
           fetch(`${url}/${this.props.match.params.topic}`,{method:'GET'})
           .then((res)=>res.json())
           .then((data)=>{
               this.setState({topic:data})
           })
       }
       render(){
            return(
                
                <div className="jumbotron">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">{this.state.topic.name}</h1>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{this.state.topic.description}</p>
                        </div>
                    </div>
                </div>
            )
       }
        

}

export default PostNews;