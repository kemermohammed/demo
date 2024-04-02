import Image from "next/image";

const realTimeDataDetails = () => {
  return (
    <section>
      <div className='flex max-md:flex-col gap-2 flex-center'>
        <h1 className='text-4xl font-extrabold leading-[1.15] text-black max-lg:text-2xl max-sm:text-xl font-satoshi'>
        Showing  
        </h1>
        <h1 className='text-4xl font-extrabold leading-[1.15] max-lg:text-2xl max-sm:text-xl '><span className='orange_gradient'>Real-Time Data</span></h1>
      </div>
      
      <div className='flex max-lg:flex-col-reverse justify-between gap-10'>
        <div>
          <p className='desc max-lg:mt-0'>The real-time data functionality provides users with up-to-date information about the charging stations. Users can access details such as the available charge capacity of each station, indicating the amount of power currently available for charging electric vehicles. This information helps users make informed decisions about which charging station to visit, ensuring they can find a station with sufficient capacity to meet their charging needs. Additionally, the system can display the availability of free slots or charging ports at each station, allowing users to determine if a charging station has an open spot for their vehicle.</p>
        </div>
        <div className="flex mt-5 flex-center">
        <Image
              src= '/assets/images/real-time-data.jfif'
              width= {400}
              height= {400}
              className="items-center rounded-2xl rounded-tl-[30%] rounded-br-[30%]"
            />
        </div>
      </div>
    </section>
  )
}

export default realTimeDataDetails