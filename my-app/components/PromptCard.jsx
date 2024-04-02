import Image from "next/image"

const PromptCard = ({post}) => {
  return (
    <div>
    <div className="flex justify-between max-lg:flex-col items-start max-lg:gap-10 gap-28">
            {/* Real time Data */}
        <div className="flex flex-col">
          <div>
            <h1 className="max-sm:text-3xl text-4xl font-semibold font-satoshi">
              <span className="orange_gradient">
                Station Name
              </span>
            </h1>
          </div>
          <div className="flex items-center flex-center gap-2" >
            <Image
              src= '/assets/icons/station.png'
              width={50}
              height={50}
              className="items-center rounded-full"
            />
            <p className="items-center green_gradient max-sm:text-2xl text-3xl">AAiT NECA</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <h1 className="max-sm:text-3xl text-4xl font-semibold font-satoshi">
              <span className="orange_gradient">
                Charge Capacity
              </span>
            </h1>
          </div>
          <div className="flex items-center flex-center gap-2">
            <Image
              src= '/assets/icons/charge.png'
              width={85}
              height={85}
              className="items-center rounded-full"
            />
            <p className="green_gradient max-sm:text-2xl text-4xl">
            {/*{post.capacity}*/}
            80%
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <h1 className="max-sm:text-3xl text-4xl font-semibold font-satoshi">
              <span className="orange_gradient">
                Free Slot
              </span>
            </h1>
          </div>
          <div className="flex items-center flex-center gap-2">
            <Image
              src= '/assets/images/slot.png'
              width={75}
              height={85}
              className="items-center rounded-full"
            />
            <p className="green_gradient max-sm:text-2xl text-4xl">
            {/*{post.slot}*/}
            10
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromptCard