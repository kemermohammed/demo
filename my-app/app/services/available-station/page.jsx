
import { GoogleMapView } from "@components/GoogleMapView";
const availableStation = () => {
  return (
    <div>
      <h1 className='head_text text-center'>
      Available Stations
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> in Your Location</span>
    </h1>
    <div className='mt-8 max-sm:ml-2 mr-2'>
    </div>
    <GoogleMapView/>
    </div>
  )
}
export default availableStation;