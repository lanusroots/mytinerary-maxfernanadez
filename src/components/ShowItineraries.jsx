import CityItineraries from "./CityItineraries"
import { Link as Anchor } from "react-router-dom"

export default function ShowItineraries({ data }) {
  return (
    <>
      {data.length > 0 ? (
        <CityItineraries data={data} />
      ) : (
        <div
          id="itinerary"
          className="flex min-h-screen w-full flex-col justify-center items-center text-3xl"
        >
          <img
            src="https://i.im.ge/2023/09/01/w73EfY.no-itineraries.png"
            alt="Not Found"
          />
          <p>There are no itineraries</p>
          <Anchor to="/cities">
            <button className="mt-4 bg-primary text-white px-3 py-1 rounded-md hover:opacity-80">
              Go Back
            </button>
          </Anchor>
        </div>
      )}
    </>
  )
}
