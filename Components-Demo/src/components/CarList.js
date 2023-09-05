import Car from "./Car";

const CarList = (props) => {
    console.log(props);
    // cars Array(3)
    // 0: {make: 'BMW', year: '2003', models: Array(4)}
    // 1: {make: 'Audi', year: '2002', models: Array(4)}
    // 2: {make: 'Mercedes', year: '2004', models: Array(4)}

    return (
        <div>
            <h1>React Demo</h1>

            <Car //props, който се подава на компонента Car 
                make={props.cars[0].make}
                year={props.cars[0].year}
                models={props.cars[0].models} />

            <Car //props, който се подава на компонента Car 
                make={props.cars[1].make}
                year={props.cars[1].year}
                models={props.cars[1].models} />

            <Car //props, който се подава на компонента Car 
                make={props.cars[2].make}
                year={props.cars[2].year}
                models={props.cars[2].models} />


        </div>

    )

}
export default CarList;