import React from 'react'

const Industries = () => {
  return (
    <div className="container mx-auto px-4 py-8">

  {/* Title Section */}
  <div className="text-center mb-6">
    <p className="mt-2 text-sm font-semibold text-gray-800 mx-auto">
      Our experience ranges across industrial sectors and varies from mid to large domestic and multi-national organizations. Though we are sector agnostic across our four core service verticals, some key sectors of interest are as under
    </p>
  </div>

  {/* Outer Border */}
  <div className="border-2 border-base-300 rounded-xl p-4">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {[
    { header: "FINANCE & BANKING", name: "Asset Financing" },
    { header: "FINANCE & BANKING", name: "Asset Management Companies" },
    { header: "FINANCE & BANKING", name: "Financial Services" },
    { header: "FINANCE & BANKING", name: "Portfolio Management Services" },
    { header: "FINANCE & BANKING", name: "Term Lending Institutions" },
    { header: "MANUFACTURING", name: "Apparels" },
    { header: "MANUFACTURING", name: "Beverage & Soft Drinks" },
    { header: "MANUFACTURING", name: "Construction Supplies" },
    { header: "MANUFACTURING", name: "Jewellery" },
    { header: "MANUFACTURING", name: "Electricals & Electronics" },
    { header: "MANUFACTURING", name: "Paper" },
    { header: "SERVICE SECTOR", name: "Business Process Outsourcing" },
    { header: "SERVICE SECTOR", name: "Financial Products & Insurance Distribution" },
    { header: "SERVICE SECTOR", name: "Hospitality" },
    { header: "SERVICE SECTOR", name: "Telecom" },
    { header: "SERVICE SECTOR", name: "Travel & Tourism" },
    { header: "SERVICE SECTOR", name: "Insurance – General and Life" },
    { header: "SERVICE SECTOR", name: "Registrars and Transfers Agency" },
    { header: "SERVICE SECTOR", name: "Software & Hardware Development" },
    { header: "SERVICE SECTOR", name: "Stocks and Shares" },
    { header: "SERVICE SECTOR", name: "Media & Communication" },
    { header: "OTHERS", name: "Charitable trusts" },
    { header: "OTHERS", name: "Exports/Imports" },
    { header: "OTHERS", name: "Educational Institutions" },
    { header: "OTHERS", name: "High Net worth Individuals" },
    { header: "OTHERS", name: "Professionals" },
    { header: "OTHERS", name: "FMCG" },
    { header: "OTHERS", name: "NRI’s" },
  ].map((item, index) => {
    const isColored = index % 2 === 1;

    return (
      <div
        key={index}
        className={`min-h-[200px] rounded-lg shadow-sm p-5 flex flex-col items-center justify-center text-center transition
          ${isColored
            ? "bg-orange-500 text-white"
            : "bg-base-100 border border-base-300"}
        `}
      >
        {/* Header */}
        <span className={`text-sm uppercase tracking-wide mb-2
          ${isColored ? "text-white/80" : "text-orange-500"}`}>
          {item.header}
        </span>

        {/* Name */}
        <h3 className="text-lg font-semibold">
          {item.name}
        </h3>
      </div>
    );
  })}
</div>

  </div>
</div>

  )
}

export default Industries
