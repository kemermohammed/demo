
import Link from "next/link";

const IntroCard = ({intro, linkDesc, className}) => {
  return (
    <div className={`prompt_card ${className}`}>
        <div className="flex justify-between items-start gap-10">

            <div className=""> 
                <div className="flex flex-col">
                    <h3 className="font-satoshi flex-center font-semibold text-3xl green_gradient">
                        {intro.title}
                    </h3>

                    <p className="my-4 font-satoshi desc text-sm text-gray-700">
                        {intro.desc}
                    </p>
                </div>         

                <div className="mt-5 flex-center border-t border-gray-100 pt-3">
                    <Link href={intro.link}>
                        <p 
                        className="font-inter text-sm blue_gradient cursor-pointer">
                        {linkDesc}
                        </p>
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default IntroCard;