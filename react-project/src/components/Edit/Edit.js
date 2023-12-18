import { useState } from "react";

export const Edit = () => {
  const [car, setCar] = useState('');
  const [image, setImage] = useState('');
  const [owner, setOwner] = useState('');
  const [description, setDescription] = useState('');
  const [bestTime, setBestTime] = useState('');

  const onCarChange = (e) =>{
    setCar(e.target.value);
  }

  const onImageChange = (e) => {
    setImage(e.target.value)
  }

  const onOwnerChange = (e) => {
    setOwner(e.target.value)
  }

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const onBestTimeChange = (e) => {
    setBestTime(e.target.value)
  }

    const onSubmit = (e) => {
      e.preventDefault()
      console.log(car);
      console.log(image);
      console.log(owner);
      console.log(description);
      console.log(bestTime);
    }
    return (
        <section id="add-car">
            <div className="form">
              <h2>Edit Car</h2>
              <form className="add-car-form" onSubmit={onSubmit}>
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name"
                  className="car-name"
                  placeholder="Car name"
                  value={car}
                  onChange={onCarChange}
                />
                <label htmlFor="imageUrl"></label>
                <input
                  type="text"
                  name="imageUrl"
                  className="car-image"
                  placeholder="Car image"
                  value={image}
                  onChange={onImageChange}
                />
                <label htmlFor="owner"></label>
                <input
                  type="text"
                  name="owner"
                  className="car-owner"
                  placeholder="Car owner"
                  value={owner}
                  onChange={onOwnerChange}
                />
                <label htmlFor="car-description"></label>
                <textarea
                  name="car-description"
                  className="description"
                  placeholder="Description"
                  cols={30}
                  rows={5}
                  style={{ width: "80%", height: 40 }}
                  value={description}
                  onChange={onDescriptionChange}

                />
                <label htmlFor="best-time"></label>
                <input
                  type="text"
                  name="best-time"
                  className="best-time"
                  placeholder="Best-time"
                  value={bestTime}
                  onChange={onBestTimeChange}
                />
                <input className="submit" type="submit" value="Edit" />
              </form>
            </div>
          </section>
    )
}