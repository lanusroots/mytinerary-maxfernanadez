import Arrow from "../components/Arrow";
import Card from "./Card";
import { useState } from "react";

export default function Carousel({data}) {
    let [counter, setCounter] = useState(0)
    let [counterTo, setCounterTo] = useState(4)

    function next_slide() {
        if (data.length <= counterTo){
            setCounter(0)
            setCounterTo(4)
    }   else {
            setCounter(counter + 4)
            setCounterTo(counterTo + 4)
            console.log(counter)
            console.log(counterTo)
    }
}

    function prev_slide() {
        if (counter <= 0){
            setCounter(data.length - 4)
            setCounterTo(data.length)
    }   else {
            setCounter(counter - 4)
            setCounterTo(counterTo - 4)
    }
}

  return (
    <>
      <div>
        <h1 className="font-bold text-center text-gray-600
         italic text-xl pb-2">Popular MYTINERARIES!</h1>
        <div className="flex justify-center items-center">
          <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={prev_slide} />
          <div className="flex flex-wrap justify-center items-center gap-2">
            {data.slice(counter, counterTo).map((each, index) => (<Card key={index} src={each.photo} alt={each.city} city={each.city} /> ))}
          </div>
          <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide} />
        </div>
      </div>
    </>
  )
}
