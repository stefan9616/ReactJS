import { DashboardItem } from "./DashboardItem"

export const Dashboard = ({
  cars,
}) => {
  return (
    <div id="dashcontainer">
      <h1>All Racers</h1>

      {
        cars.map(car => <DashboardItem key={car._id} {...car} />)
      }

    </div>
  )
}