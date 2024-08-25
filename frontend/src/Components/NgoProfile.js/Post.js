import React,{useState} from 'react'

const Post = () => {

  const [Ngopost,setPost] = useState({
    name:"",category:"",description:""
    });

    let name,value;
    const onChangeHandler = (e)=> {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setPost({...Ngopost,[name]:value});

    }



    const handleUpClick = async (e) => {
        e.preventDefault();
      
        const {name,category,description} = Ngopost;
      
         const  res = await fetch("http://localhost:4000/api/postcategory",{
          method:"POST",
         
        headers: { 'Content-Type' : 'application/json' 
      },
         body:JSON.stringify({
      
          name,category,description
      
             })
         });
         const data = await res.json();
         if(res.status === 422 || !data )
         {
      
          window.alert("Invalid Registration!");
          console.log("Invalid Registration!");
         } else {
          window.alert("Category addded sucessfully!");
          console.log("Category added successfull!");
         }
        }   
  return (
    <div>
      <form>
      <div className="form-group">
          <label htmlFor="name" className="form-label">Name of your NGO</label>
          <input className="form-control" name="name"onChange={onChangeHandler} value={Ngopost.name} />
        </div>
        <div className="form-group">
          <label htmlFor="categories" className="form-label">Select Campaign </label>
          <select className="form-select" name="category" onChange={onChangeHandler}value={Ngopost.category}>
            <option value="Food">Food</option>
            <option value="Books">Books</option>
            <option value="clothes">clothes</option>
            <option value="shelter"> shelter for animals</option>
          </select>
          <div className="form-group">
          <label htmlFor="description" className="form-label">Description/</label>
          <input className="form-control" name="description"onChange={onChangeHandler} placeholder="Describe your campaign here" value={Ngopost.description} />
          <button type="submit" onClick={ handleUpClick}> Post</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Post
