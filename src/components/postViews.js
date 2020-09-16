import React from 'react';
import {Link} from 'react-router-dom';



const PostViews= (props)=>{
     
    const dispdata = ({data})=>{
        if(data){
            return data.map((json)=>{
                return (
                    <div key={json.id} className="mb-5 col-md-4">
                        <h2 className="mb-4">{json.name}</h2>
                        <Link className="btn btn-primary" to ={`/posts/${json.id}`}>Details</Link>
                    </div>
                )
            })
        }
          
    }

    return(
        <div className="ml-4 row">
            {dispdata(props)} 
        </div>
    )
}


export default PostViews;