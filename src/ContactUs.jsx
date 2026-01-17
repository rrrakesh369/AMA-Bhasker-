import React from 'react'

const ContactUs = () => {
  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-30 lg:gap-60">
  
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
        <strong>Office 1:</strong> B-23, Sector 14<br />
        Noida – 201301, U.P., India.<br /><br />

        <strong>Office 2:</strong> 13, M.C. Setalvad Lawyers Chamber<br />
        Supreme Court of India<br />
        New Delhi – 110001, India.<br /><br />

        <strong>Office 3:</strong> B-56, Sector 14<br />
        Noida – 201301, U.P., India.<br /><br />

        <strong>Office 4:</strong> “Kanchan”, Roshni Ghar Road<br />
        Near Achleshwar Temple, Lashkar<br />
        Gwalior – 474001, M.P., India.<br /><br />

        <strong>Telefax:</strong> (+91) 120 410 5444<br />
        <strong>Email:</strong> office@lahotiadvocates.com<br />
        <strong>Website:</strong> www.lahotiadvocates.com
      </p>

    </div>

  </div>
</div>


  )
}

export default ContactUs
