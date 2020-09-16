import React,{Component} from 'react';

const url = "http://localhost:4000/languages/";

class Form extends Component{

    constructor(){
        super()
        this.state={
             topic:'',
             description:''
        }
       this.HandleTopicName = this.HandleTopicName.bind(this);
       this.HandleTopicDescp = this.HandleTopicDescp.bind(this);
       this.HandleSubmit = this.HandleSubmit.bind(this)
    }

    HandleTopicName(event){
      this.setState({topic:event.target.value})
    }
    HandleTopicDescp(event){
        this.setState({description:event.target.value})
    }
    HandleSubmit(){
        var id = Math.floor(Math.random()*1000);
        var data = {
            id : id,
            name : this.state.topic,
            description : this.state.description
        }
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(this.props.history.replace('/posts'));
    }
    render(){
        return(
            <div className="card container mt-5">
                <div className="card-header">
                    <h1 className="text-center">Forms Component</h1>
                </div>
                <div className="card-body">
                    <div className="form-group">
                      <label >Language Name :</label>
                      <input type="text"
                        className="form-control" name="name" id="name" aria-describedby="helpId" placeholder="Enter the language name" onChange={this.HandleTopicName}/>
                    </div>
                    <div className="form-group">
                        <label >Description :</label>
                        <input type="text"
                            className="form-control" name="" id="descp" aria-describedby="helpId" placeholder="Description of the language" onChange={this.HandleTopicDescp}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.HandleSubmit}>Submit</button>
                </div>
           </div>
        )
    }
}

export default Form;