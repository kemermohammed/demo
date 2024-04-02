import IntroCard from "./IntroCard";
import { introCardLists } from "@constants";

const HomePage = () => {

    const IntroCardList = () => {
        return (
          <>
          <h1 className="head_text max-sm:text-3xl text-left flex-center"><span className="blue_gradient">Services Delivered</span></h1>
          <div className='mt-8 prompt_layout'>
            {introCardLists.map((intro, index) => (
              <IntroCard
                key={index}
                intro={intro}
                linkDesc= 'more details'
                className= 'transition duration-500 transform origin-center scale-100 rotate-0 hover:scale-110 hover:rotate-360'
              />
            ))}
          </div>
          </>
        );
      };
      
  return (
    <section className='feed'>
      <div className="mb-8">
        <IntroCardList/>
      </div>
    
    </section>
  )
}

export default HomePage