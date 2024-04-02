import HomePage from "@components/HomePage";
//import Feed from "@components/RealTimeData";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Use
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Electric Car Solutions</span>
    </h1>
    <p className='desc text-center'>
    IMFECS is an advanced system designed to streamline electric car charging at solar stations. It offers real-time information on available stations, battery capacity, and open slots, while enabling convenient online bookings. Simplify your charging experience with IMFCS.
    </p>
    <HomePage/>
  </section>
);
export default Home;
