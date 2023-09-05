const Car = (props) => {

    console.log(props);
    // {make: 'BMW', year: '2003', models: Array(4)} - първо рендериране
    return (
        <article>
            <h2>{props.make}</h2>
            <ul>
                <h4>Models</h4>
                <li>{props.models[0]}</li>
                <li>{props.models[1]}</li>
                <li>{props.models[2]}</li>
                <li>{props.models[3]}</li>
            </ul>
            <p>Year: {props.year}</p>
        </article>

    )
};
export default Car;