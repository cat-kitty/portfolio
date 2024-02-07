import { useEffect, useState } from "react";
import stars1 from "../images/stars1.png";
import stars2 from "../images/stars2.png";

export const Star = () => {
    const [count, setCount] = useState(1)
    // useEffect(() => {
    //     const getCount = () => {
    //         const height = document.querySelectorAll(".SussyBaka")[0].clientHeight
    //         const starHeight = document.querySelectorAll(".stars1")[0].clientHeight
    //         const starContainer = document.querySelectorAll(".flicker")[0]
    //         starContainer.style.height = height + "px"
    //         setCount(Math.ceil(height / starHeight / 2))
    //     }
    //     getCount()
    // })

    useEffect(() => {
        const getCount = () => {
          const start = performance.now(); // Start the timer
    
          const height = document.querySelectorAll(".SussyBaka")[0].clientHeight;
          const starHeight = document.querySelectorAll(".stars1")[0].clientHeight;
          const starContainer = document.querySelectorAll(".flicker")[0];
          starContainer.style.height = height + "px";
          setCount(Math.ceil(height / starHeight / 2));
    
          const end = performance.now(); // End the timer
          console.log(`getCount execution time: ${end - start} milliseconds`);
        };
    
        getCount();
      }, []);

    const drawStars = () => {
        const result = []
        console.log(count)
        for (let i = 0; i < count; i++) {
            result.push(<img className="stars1" src={stars1} />)
            result.push(<img className="stars2" src={stars2} />)
        }

        return result
    }

    return (
        <div className="flicker">
            {drawStars()}
        </div>
    )
}
