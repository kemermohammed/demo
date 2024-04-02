import IntroCard from "@components/IntroCard";
import { servicesCard } from "@constants";

const Services = () => {
  return (
    <div >
      <h1 className="head_text max-sm:text-3xl max-lg:text-4xl text-left flex-center"><span className="orange_gradient">Services Delivered</span></h1>
      <div className="mt-8 prompt_layout">
        {servicesCard.map((services, index) =>(
          <IntroCard
            key={index}
            intro={services}
            linkDesc= 'Click here to go!'
            className= 'hover:shadow-2xl transition-shadow duration-700'
          />
        ))}
      </div>
    </div>
  )
}

export default Services