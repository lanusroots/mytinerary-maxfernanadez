import { useState } from "react"
import Activity from "./Activity"

export default function CardItineraries({ data, index }) {
  const [show, setShow] = useState(false)
  const [viewMore, setViewMore] = useState(false)

  return (
    <div
      key={index}
      className="flex flex-col items-center my-6 max-w-3xl max-h-fit shadow-lg bg-white rounded-xl"
    >
      <h1 className="py-5 text-center text-3xl font-semibold">{data.name}</h1>
      <img
        className="w-11/12 aspect-video object-cover"
        src={data.photo}
        alt="itinerary photo"
      />
      <div className="flex justify-between items-center w-11/12 px-1 py-6">
        <div>
          <svg
            className="w-6 h-6 inline cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span> {data.likes}</span>
        </div>
        <svg
          onClick={() => setShow(!show)}
          className="w-6 h-6 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              show
                ? "M4.5 15.75l7.5-7.5 7.5 7.5"
                : "M19.5 8.25l-7.5 7.5-7.5-7.5"
            }
          />
        </svg>
      </div>
      {show && (
        <div className="flex flex-col items-center w-11/12">
          <div className="flex w-full flex-wrap justify-between py-3">
            <div className="flex flex-col items-center">
              <p className="font-semibold text-base">User:</p>
              <img
                className="object-cover w-12 h-12 rounded-full border-2 border-primary"
                src={data.city_id.admin_id.photo}
                alt="User photo"
              />
              <p>
                {data.city_id.admin_id.name +
                  " " +
                  data.city_id.admin_id.lastName}
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-base">Price:</p>
              <p>{data.price} usd</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-base">Duration:</p>
              <p>{data.duration} hrs</p>
            </div>
            <div className="flex flex-col sm:block sm:text-center">
              <p className="font-semibold">Hashtags:</p>
              {data.tags.map((tag, index) => (
                <span key={index}>{tag} </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => setViewMore(!viewMore)}
            className="w-36 bg-primary py-2 my-6 rounded-lg hover:opacity-80 text-xl text-white"
          >
            {viewMore ? "Hide" : "Activities"}
          </button>
          {viewMore && (
            <Activity itinerary_id={data._id} />
          )}
        </div>
      )}
    </div>
  )
}
