import { useState } from "react"

export const CreateRacer = ({
  onCreateRacerSubmit,
}) => {

  const [values, setValues] = useState({
    title: '',
    imageUrl: '',
    name: '',
    description:'',
    bestTime:'',

  })

  const onChangeHandler = (e) =>{
    setValues(state => ({...state, [e.target.name]: e.target.value}))
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    onCreateRacerSubmit(values)
  }


  return (
    <section id="add-car">
      <div className="form">
        <h2>Add Car</h2>
        <form className="add-car-form" onSubmit={onSubmit}>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="title"
            className="car-name"
            placeholder="Car name"
            value={values.title}
            onChange={onChangeHandler}
          />
          <label htmlFor="imageUrl"></label>
          <input
            type="text"
            name="imageUrl"
            className="car-image"
            placeholder="Car image"
            value={values.imageUrl}
            onChange={onChangeHandler}
          />
          <label htmlFor="owner"></label>
          <input
            type="text"
            name="name"
            className="car-owner"
            placeholder="Car owner"
            value={values.name}
            onChange={onChangeHandler}
          />
          <label htmlFor="carDescription"></label>
          <textarea
            name="description"
            className="description"
            placeholder="Description"
            cols={30}
            rows={5}
            style={{ width: "80%", height: 40 }}
            value={values.description}
            onChange={onChangeHandler}
          />
          <label htmlFor="bestTime"></label>
          <input
            type="text"
            name="bestTime"
            className="best-time"
            placeholder="Best-time"
            value={values.bestTime}
            onChange={onChangeHandler}
          />
          <input className="submit" type="submit" value="Create" />
        </form>
      </div>
    </section>
  )
}