export default function Card({src, alt, city}) {
    return (
      <div className="w-[300px] h-[200px] relative">
          <img src={src} alt={alt} className="w-full h-full object-cover rounded-md" />
          <p className="absolute top-1 right-5 backdrop-blur text-black font-bold uppercase">{city}</p>
      </div>
    )
  }