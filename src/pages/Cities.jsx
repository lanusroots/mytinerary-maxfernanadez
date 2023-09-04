import CardCities from "../components/CardCities"
import { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import city_actions from "../store/actions/cities"
const { read_cities } = city_actions

export default function Cities() {
  const [reEffect, setReEffect] = useState(true)
  const text = useRef()
  const dispatch = useDispatch()
  const cities = useSelector((store) => store.cities.cities)

  useEffect(() => {
    dispatch(read_cities({ text: text.current?.value }))
  }, [reEffect])

  function handlerFilter() {
    setReEffect(!reEffect)
  }

  return (
    <>
      <div className="absolute w-full min-h-[50%] bg-cover bg-center bg-[url('./img/bg-viajero.jpeg')] brightness-50 xl:bg-top"></div>
      <main className="w-full grow">
        <div className="p-4 h-[50vh] flex flex-col justify-center text-slate-100 xl:">
          <div className="relative max-w-[1291px] m-auto">
            <h1 className="text-4xl font-bold text-center mb-4">Cities</h1>
            <p className="text-center text-2xl max-w-sm">
              Collection of the most beautiful places and experience
            </p>
          </div>
        </div>
        <div className="flex p-4 justify-center bg-slate-200">
          <input
            ref={text}
            type="search"
            className="w-80 px-6 py-4 rounded-lg shadow-md"
            onKeyUp={handlerFilter}
            placeholder="🔍︎ Search your city"
          />
        </div>
        <div className="p-4 flex flex-wrap gap-8 justify-center bg-slate-200">
          {cities.length > 0 ? (
            cities.map((each) => (
              <CardCities
                key={each._id}
                id={each._id}
                className="w-80 h-60"
                src={each.photo}
                city={each.city}
              />
            ))
          ) : (
            <div className="text-center text-xl">
              <p className="pb-8">Not found !!</p>
              <p>
                Try using different keywords or checking for
                spelling mistakes.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
