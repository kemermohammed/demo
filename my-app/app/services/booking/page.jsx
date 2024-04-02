import React from 'react'

const booking = () => {
  return (
    <section>
      <h1 className='head_text text-center'>
      Book Your slot now!
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> Easily access our services</span>
      </h1>
      <div className='mt-8 flex-col'>
        <div>
          <h1 className='desc'>Vehicle Identification Number (VIN)</h1>
          <input 
              value= ''
              onChange= ''
              placeholder="insert VIN here..."
              required
              className="form_input"
          />
        </div>

        <div className='mt-4'>
          <h1 className='desc'>Your phone number</h1>
          <input 
              value= ''
              onChange= ''
              placeholder="Phone number..."
              required
              className="form_input"
              type=''
          />
        </div>
      </div>
    </section>
  )
}

export default booking;