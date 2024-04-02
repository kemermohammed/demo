import Image from "next/image"

const stationDetails = () => {
  return (
    <section>
      <div className='flex max-md:flex-col gap-2 flex-center'>
        <h1 className='text-4xl font-extrabold leading-[1.15] text-black max-lg:text-2xl max-sm:text-xl font-satoshi'>
          Showing Available 
        </h1>
        <h1 className='text-4xl font-extrabold leading-[1.15] max-lg:text-2xl max-sm:text-xl '><span className='orange_gradient'>Charging Stations</span></h1>
      </div>
      
      <div className='flex max-lg:flex-col-reverse justify-between gap-10'>
        <div>
          <p className='desc max-lg:mt-0'>This functionality allows users to easily locate available charging stations in their vicinity. By utilizing location-based services, the system determines the user's current location and provides a list or map view of nearby charging stations. Users can view information such as the station's address, distance from their current location, and the types of charging connectors supported. This feature helps users quickly identify the nearest charging options and plan their routes accordingly.</p>
        </div>
        <div className="flex mt-5 flex-center">
        <Image
              src= '/assets/images/station.jfif'
              width= {360}
              height= {360}
              className="items-center rounded-2xl rounded-tl-[30%] rounded-br-[30%]"
            />

        </div>
      </div>
    </section>
  )
}

export default stationDetails