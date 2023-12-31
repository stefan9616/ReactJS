import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import * as carService from "../../services/carService"

export const Details = () => {

  const { racerId } = useParams();

  const [car, setCar] = useState({});

  useEffect(() => {
    carService.getOne(racerId)
      .then(result => {
        setCar(result);
      });

  }, [racerId])

  return (
    <section id="details">
      <div id="details-container">
        <img src={car.imageUrl} alt="pic" />
        <p className="title">Име на автомобила: {car.title}</p>
        <p className="details-name">Собствено име: {car.name}</p>
        <p className="details-description"></p>
        <h3>Описание</h3>
        <p>{car.description}</p>
        <p>
          Най-добро време: {car.bestTime}
        </p>
        <p>Уникален номер за пистата: {car._id}</p>
        <div id="action-buttons">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </section>
  )
}