import React from 'react'
import servImg from '../images/serv.jpg'

const Services = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col gap-10 max-w-7xl">

    {/* Heading */}
    <h3 className="text-3xl font-semibold">Why Us ?</h3>

    {/* First paragraph + Image side by side */}
    <div className="flex flex-col lg:flex-row gap-10 items-start">

      {/* Text */}
      <p className="py-4 text-justify leading-relaxed flex-1">
        Our ideal mix of experience, resources and knowledge needed to continue
        to deliver the proactive, industry-specific service that you deserve.
        Our Clients enjoy several distinct advantages of having us handle their
        professional service needs.
        <br /><br />
        ➤ We have the resources, specialized knowledge and expertise to serve any complex entities in India  
        <br />
        ➤ Our commitment to staff continuity means more personal attention  
        <br />
        ➤ Our client range covers small, mid, and large organizations across industries  
        <br /><br />
        We believe our commitment to quality and timely service will serve you well.
      </p>

      {/* Image */}
      <div className="flex justify-center lg:justify-end flex-1">
        <img
          src={servImg}
          className="max-w-md lg:max-w-lg rounded-lg shadow-2xl"
          alt="Business Discussion"
        />
      </div>
    </div>

    {/* Second Section */}
    <h3 className="text-3xl font-semibold mt-8">Services Rendered</h3>

    <p className="py-4 text-justify leading-relaxed">
      We provide various services to profit and not-for-profit organizations,
      individuals, partnership firms, private & public limited companies
      including HNI’s, NRI’s, IT companies, e-commerce, real estate,
      manufacturing companies, etc.
    </p>

    {/* Cards BELOW second paragraph */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-stretch">

  {/* CARD 1 */}
  <div className="card bg-base-100 shadow-sm h-full">
    <div className="card-body">
      <h2 className="card-title">ADVISORY SERVICES</h2>

      <ul className="space-y-2 leading-relaxed">
        {[
          "Company Formation (India & Overseas)",
          "FEMA & RBI Consulting",
          "FDI Investments",
          "Overseas Direct Investments",
          "Corporate Law Consulting",
          "Shares & Company Valuation",
          "NRI Services",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-orange-500">➤</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="card bg-base-100 shadow-sm h-full">
    <div className="card-body">
      <h2 className="card-title">AUDIT & ATTESTATION SERVICE</h2>

      <ul className="space-y-2 leading-relaxed">
        {[
          "Statutory Audit",
          "Internal Audit",
          "IFRS Audit",
          "Fraud & Forensic Audit",
          "System Audit",
          "Stock Audit",
          "Strategic Audit",
          "Financial Due Diligence",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-orange-500">➤</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>

   <div className="card bg-base-100 shadow-sm h-full">
    <div className="card-body">
      <h2 className="card-title">ADVISORY SERVICES</h2>

      <ul className="space-y-2 leading-relaxed">
        {[
          "Company Formation (India & Overseas)",
          "FEMA & RBI Consulting",
          "FDI Investments",
          "Overseas Direct Investments",
          "Corporate Law Consulting",
          "Shares & Company Valuation",
          "NRI Services",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-orange-500">➤</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>

   <div className="card bg-base-100 shadow-sm h-full">
    <div className="card-body">
      <h2 className="card-title">ADVISORY SERVICES</h2>

      <ul className="space-y-2 leading-relaxed">
        {[
          "Company Formation (India & Overseas)",
          "FEMA & RBI Consulting",
          "FDI Investments",
          "Overseas Direct Investments",
          "Corporate Law Consulting",
          "Shares & Company Valuation",
          "NRI Services",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-orange-500">➤</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
  
  </div>
</div>

  )
}

export default Services
