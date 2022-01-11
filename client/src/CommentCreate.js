// @flow
import React ,{useState} from 'react';
import axios from 'axios';
// type Props = {
  
// };
export default ()=> {
    const [content,setContent]=useState('');
    const onSubmit =async (event) =>{
        event.preventDefault();
        await axios.post('http://localhost:5000/posts',{
            content
        })
    }
  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
          <div className='form-group'>
              <label>Title</label>
              <input 
              value={content} 
              onChange={e =>{setContent(e.target.value)}} 
              className='form-control'/>
          </div>
          <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}