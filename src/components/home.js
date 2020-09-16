import React,{Component} from 'react';


class Home extends Component{

    constructor(){
        super()
        this.state={

        }
       
    }
    render(){
        return(
            <div class="jumbotron text-center container">
                <h1 class="display-3">Home Component</h1>
                <hr class="my-2"/>
                <p class="lead">Here is th another new component...!</p>
            </div>
        )
    }
}

export default Home;