import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import activity_actions from "../store/actions/activities";
const { read_activities } = activity_actions;

export default function Activity({ itinerary_id }) {
  const dispatch = useDispatch();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    dispatch(read_activities({ itinerary_id })).then((response) =>
      setActivities(response.payload.activities)
    );
  }, []);

  return (
    <div>
      <div className="w-[260px] h-[300px] flex flex-row items-center justify-start mb-4v rounded-md sm:w-[750px]">
        {activities.map((activity) => (
          <div key={activity._id} className="w-5/12 flex flex-col rounded-xl h-[190px] items-center p-2">
            <div className="p-[20px] rounded-lg">
              <img
                src={activity.photo}
                alt={activity.name}
                className="w-full h-[100px] object-cover rounded-md mb-2"
              />
              <p className="font-bold text-[20px] text-sm text-black">{activity.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}