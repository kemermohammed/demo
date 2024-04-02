import Image from "next/image";

const bookingDetails = () => {
  return (
    <section>
      <div className='flex max-md:flex-col gap-2 flex-center'>
        <h1 className='text-4xl font-extrabold leading-[1.15] text-black max-lg:text-2xl max-sm:text-xl font-satoshi'>
        Online Automated
        </h1>
        <h1 className='text-4xl font-extrabold leading-[1.15] max-lg:text-2xl max-sm:text-xl '><span className='orange_gradient'>Booking System</span></h1>
      </div>
      
      
      <div className='flex max-lg:flex-col-reverse justify-between gap-10'>
        <div>
          <p className='desc max-lg:mt-0'>The online automated booking system enables users to reserve charging slots in advance. Users can select a desired charging station, specify a preferred date and time for their charging session, and make a booking through the system. This feature ensures that users have a guaranteed slot at their chosen station, reducing the likelihood of encountering fully occupied charging stations. The system can send confirmation notifications to users, including any necessary instructions. This functionality enhances convenience and helps users plan their charging activities efficiently.</p>
        </div>
        <div className="flex mt-5 flex-center">
        <Image
              src= '/assets/images/booking.png'
              width= {380}
              height= {380}
              className="items-center rounded-2xl rounded-tl-[30%] rounded-br-[30%]"
            />
        </div>
      </div>
    </section>
  )
}

export default bookingDetails