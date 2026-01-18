import React from 'react'

const AboutUs = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">

        {/* Image Section */}
    <div className="flex justify-center lg:justify-end">
      <img
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
        className="max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-2xl"
        alt="Business Discussion"
      />
    </div>


    {/* Text Content */}
    <div className="max-w-3xl">
      <h3 className="text-3xl font-semibold mb-4">About Us</h3>

      <p className="py-4 text-justify leading-relaxed">
        Vidit Jain & Co. is an ISO 9001:2015 & ISO 27001:2013 certified Chartered Accountants firm based in New
        Delhi, India. It is one of the leading organizations of independent assurance, tax, and advisory firms.
        The firm provides robust compliance services and growth navigation solutions on complex business and
        financial matters through focused practice groups.
        The firm has extensive experience across a wide range of industries, market segments, and geographical
        corridors. With shorter decision-making chains, senior personnel involvement, and empowered client
        service teams, the firm operates in a coordinated manner and responds with agility.
        Over the years, Vidit Jain & Co. has developed specialist services including Financial Statement Audit and
        Attestation, Corporate Finance and Taxation, Governance Risk & Operations, Forensic & Investigation,
        IT Advisory, and Cyber Security.
      </p>

      <h3 className="text-3xl font-semibold mt-8 mb-4">Our Values</h3>

      <p className="py-4 text-justify leading-relaxed">
        As our motto “Perceive to Perform ©” signifies, we believe that commitment to quality, timely service,
        and depth of experience are central to delivering excellence. We focus on getting the job done right
        and on time without compromising on quality.
        Our clients deserve the best, and we consistently deliver value by building trusted relationships and
        offering practical advice, ideas, and tailored solutions.
        Our strong Subject Matter Expertise enables us to create bespoke solutions aligned with client needs
        while making a meaningful difference to our clients, colleagues, and communities.
      </p>
    </div>

  </div>
</div>

  )
}

export default AboutUs
