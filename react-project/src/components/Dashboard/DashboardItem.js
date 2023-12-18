import { Link } from "react-router-dom"
export const DashboardItem = ({
    _id,
    name,
    title,
    description,
    imageUrl,
    bestTime
}) => {
    return (
        <section id="dashboard">
            <div className="car-card">
                <p className="title">Име на автомобила: {title}</p>
                <img src={imageUrl} alt="pic" />
                <p className="racer">Собствено име: {name}</p>
                <p className="desc">Описание: {description}</p>
                <p className="time"></p>
                <Link to={`/dashboard/${_id}`} className="details-btn">Details</Link>
            </div>
        </section>
    )
}