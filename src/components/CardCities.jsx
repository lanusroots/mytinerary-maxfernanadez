export default function CardCities({item}) {
  return (
    <div key={item.id} className="w-[300px] h-[200px] relative">
        <img src={item.photo} alt={item.id} className="w-full h-full object-cover rounded-md" />
        <p className="absolute top-1 right-5 backdrop-blur text-white font-bold uppercase">{item.city}</p>
    </div>
  )
}