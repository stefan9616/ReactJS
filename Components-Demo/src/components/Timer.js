import { useState } from "react";
const Timer = (props) => {
    const [seconds, setSeconds] = useState(props.start);

    console.log(`seconds - ${seconds}`);
    setTimeout(() => {
        // setSeconds(seconds + 1);
        setSeconds(seconds => seconds + 1)
    }, 1000);

    return (
        <div>
            <p>Time: {seconds}s</p>
        </div>
    )
}
export default Timer;