import React from 'react'

const ContactUs = () => {
  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-25 lg:gap-60">
  
    {/* Map Card */}
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body justify-start space-y-4">

        <h2 className="card-title text-base">
          Office Location
        </h2>

        {/* Google Map */}
        <div className="w-full h-64 rounded-lg overflow-hidden border">
          <iframe
            title="Office Location"
           src="https://www.google.com/maps?q=Nehru%20Place%20New%20Delhi&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Optional Button */}
        <button className="btn btn-neutral btn-sm w-full">
          View on Google Maps
        </button>

      </div>
    </div>

    {/* Address Section */}
    <div className="text-center lg:text-left justify-end max-w-xl">

      <p className="py-6 text-sm leading-relaxed">
        <strong>For any assistance, please contact us:</strong> <br />
        <br />

        <strong>Vidit Jain & Co</strong> <br />
       <br />
        <br />

        <strong>Corp Office:</strong><br />

        <strong>Delhi:</strong> 4697/3 FF 21A Nepal Carrier Building, Ansari Road,<br/>
         Daryaganj, New Delhi -110002,<br />
         New Delhi, India.<br /><br />

        <strong>Office:</strong> (+91) 11 41617269<br />
        <strong>Mobile:</strong> 9811490401, 9810672828<br />
        <strong>Email:</strong>  info@vjco.co.in<br />
        <strong>Website:</strong> www.vjco.co.in
      </p>

    </div>

  </div>
</div>


  )
}

export default ContactUs
