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
                <p className="title">{title}</p>
                <img src={imageUrl} alt="pic" />
                <p className="racer">{name}</p>
                <p className="desc">
                    {description}
                </p>
                <p className="time">{bestTime}</p>
                <Link to={`/dashboard/${_id}`} className="details-btn">Details</Link>
                <button className="delete-btn">Delete</button>
            </div>
        </section>
    )
}