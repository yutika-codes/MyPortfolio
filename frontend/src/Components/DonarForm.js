import "../styles/DonarForm.css"
import { useState } from 'react';

function Form() {

  const [formData, setFormData] = useState({
    username: 'default',
    email: 'default@gmail.com',
    occupation: 'student',
    gender: 'male',
    languages: ['html'],
  })

  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'languages') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  }
  return (
    <div className="Form">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Name</label>
          <input className="form-control" name="username" placeholder='Name' onChange={onChangeHandler} value={formData.username} />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="form-label">Age</label>
          <input className="form-control" name="age" placeholder='Age' onChange={onChangeHandler} value={formData.age} />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" placeholder='xyz@gmail.com' onChange={onChangeHandler} value={formData.email} />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number:</label>
          <input type="number" className="form-control" name="email" placeholder='98238....' onChange={onChangeHandler} value={formData.phone} />
        </div>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="gender" className="form-label">Gender</label>
            <div>
              <div>
                <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea className="form-control" name="address" onChange={onChangeHandler} value={formData.address} />
          </div>
          <label htmlFor="category" className="form-label">Item you want to donate</label>
          <select className="form-select" name="category" onChange={onChangeHandler} value={formData.category}>
            <option value="student">Food</option>
            <option value="employee">Books</option>
            <option value="clothes">clothes</option>
            <option value="shelter"> shelter for animals</option>
          </select>
        </div>




        <div className="form-group">
          <label htmlFor="address" className="form-label">Why you chose this website </label>
          <textarea className="form-control" name="content" onChange={onChangeHandler} value={formData.content} />
        </div>
        <div className="form-group">
          <label htmlFor="Breif" className="form-label">Brief discription about the quantity and the product to be donated</label>
          <textarea className="form-control" name="Brief" onChange={onChangeHandler} value={formData.Brief} />
        </div>
        <div className="form-group">
          <button className="btn" type="submit" >Submit</button>
        </div>
      </form>
    </div>

  );
}

export default Form;
