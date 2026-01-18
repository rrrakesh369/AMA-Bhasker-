import React from 'react'

const Careers = () => {
  return (   
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-center">
    <div className="card bg-base-100 shadow-md w-full max-w-xl md:max-w-3xl lg:max-w-3xl my-8">
      
      <div className="card-body space-y-4">

        {/* Buttons */}
        <div className="card-actions flex flex-col sm:flex-row gap-3">
          <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none w-full sm:w-auto">
            Job
          </button>
          <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none w-full sm:w-auto">
            Internship
          </button>
        </div>

        {/* Title */}
        <h2 className="card-title text-lg md:text-xl">
          Job
        </h2>

        {/* Form Field */}
        {/* 10 Text Fields */}
        <input type="text" placeholder="Field 1" className="input input-bordered w-full" />
        <input type="text" placeholder="Field 2" className="input input-bordered w-full" />
        <input type="text" placeholder="Field 3" className="input input-bordered w-full" />
        <input type="text" placeholder="Field 4" className="input input-bordered w-full" />
        <input type="text" placeholder="Field 5" className="input input-bordered w-full" />
        <input type="text" placeholder="Field 6" className="input input-bordered w-full" />
        <input type="text" placeholder="Field 7" className="input input-bordered w-full" />
        <input type="text" placeholder="Field 8" className="input input-bordered w-full" />      
        <input type="text" placeholder="Field 10" className="input input-bordered w-full" />

        {/* Date Picker */}
        <input
          type="date"
          className="input input-bordered w-full"
        />

        {/* File Upload */}
        <input
          type="file"
          className="file-input file-input-bordered w-full"
        />

        {/* Submit Button */}
        <div className="pt-4">
          <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
            Submit
          </button>
        </div>

        <div className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
          <p>
             For any other query, please write to us at career@lahotiadvocates.com
          </p>
        </div>

      </div>
    </div>
  </div>
</div>


  )
}

export default Careers
