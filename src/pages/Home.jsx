import Carousel from "../components/Carousel"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link as Anchor } from 'react-router-dom'
import apiUrl from '../apiUrl'
//Icons
import { RiCheckboxBlankCircleFill } from "react-icons/ri"


export default function Home() {
    const [data, setData] = useState([])

    useEffect(
        ()=>{
            axios(apiUrl + 'cities/carousel')
                .then( res => setData(res.data.data_carousel))
                .catch( err => console.log(err))
        },
        []
    )

  return (
    <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
        <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
            <div className="flex flex-col gap-8">
                <h1 className="text-5xl xl:text-7xl font-bold leading-[4rem] xl:leading-[7.5rem]">
                    Find the perfect {" "}
                    <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block">
                        destination
                        <RiCheckboxBlankCircleFill className="text-base absolute -left-5 -top-5 p-1.5 text-white bg-primary rounded-full box-content" />
                        <RiCheckboxBlankCircleFill className="text-base absolute -right-5 -top-5 p-1.5 text-white bg-primary rounded-full box-content" />
                        <RiCheckboxBlankCircleFill className="text-base absolute -left-5 -bottom-5 p-1.5 text-white bg-primary rounded-full box-content" />
                        <RiCheckboxBlankCircleFill className="text-base absolute -right-5 -bottom-5 p-1.5 text-white bg-primary rounded-full box-content" />
                    </span>
                </h1>   
                <p className="text-gray-500 text-2xl leading-[2.5rem]">
                    Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <Anchor to='/cities' className="w-full xl:w-auto bg-primary text-white text-center py-2 px-8 rounded-xl text-xl hover:opacity-80">
                        View More...
                    </Anchor>
                </div>
            </div>
        </div>
        <div className="md:col-span-3 flex items-center justify-center relative">
            <Carousel data={data}/>
        </div>
    </section>
  )
}