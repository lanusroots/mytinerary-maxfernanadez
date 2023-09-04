import { Link as Anchor } from "react-router-dom"

export default function CardCities({ id, src, alt, city }) {
  return (
    <div className="w-[300px] h-[200px] relative">
      <Anchor to={"/city/" + id}>
        {" "}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-md"
        />{" "}
      </Anchor>
      <p className="absolute top-1 right-5 backdrop-blur text-black font-bold uppercase">
        {city}
      </p>
    </div>
  )
}
