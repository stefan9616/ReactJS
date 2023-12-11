import { DashboardItem } from "./DashboardItem"

export const Dashboard = ({
  cars,
}) => {
  return (
    <div id="dashcontainer">
      <h1>All Racers</h1>

      {
        cars.length === 0 && (
          <h3 className="empty">No Cars Yet</h3>
        )
      }

      {
        cars.map(car => <DashboardItem key={car._id} {...car} />)
      }



    </div>
  )
}