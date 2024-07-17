import React from 'react'

const BookNow = ({handleOpen}) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg relative small:w-[310px] xs:w-[350px]  md:w-[550px]">
            <button
              onClick={handleOpen}
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-700"
            >
              X
            </button>
            <h2 className="text-xl font-semibold mb-4">Enquiry</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded shadow"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default BookNow
