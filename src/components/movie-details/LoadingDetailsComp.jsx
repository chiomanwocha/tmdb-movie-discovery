import React from 'react'

const LoadingDetailsComp = () => {
  return (
    <div className="text-black p-9 overflow-y-scroll max-h-[100vh] w-full">
      <div className="relative h-[50vh] w-full rounded-xl overflow-hidden bg-slate-200 animate-pulse"></div>
      <div className="flex flex-wrap flex-col lg:flex-row mt-8 gap-7">
        <div className="lg:w-[50vw]">
          <div className="flex gap-4 flex-wrap bg-slate-200 animate-pulse h-[20px] mb-10"></div>
          {[...Array(4)].map((_item, index) => (
            <p
              key={index}
              className="mt-2 text-[20px] text-gray-300 bg-slate-200 animate-pulse h-[10px]"
            ></p>
          ))}
          <div className="mt-10">
            {[...Array(3)].map((_item, index) => (
              <p
                key={index}
                className="mt-2 text-[20px] text-gray-300 bg-slate-200 animate-pulse h-[10px]"
              ></p>
            ))}
          </div>
          <div className="bg-slate-200 animate-pulse h-[30px] mt-10"></div>
        </div>
        <div className="lg:w-[45] flex-grow">
          <div className="flex justify-end mb-6 bg-slate-200 animate-pulse h-[20px]"></div>
          <div className="flex flex-col gap-4 mb-8">
            {[...Array(2)].map((_item, index) => (
              <div
                key={index}
                className="py-4 w-full bg-slate-200 animate-pulse h-[50px]"
              ></div>
            ))}
          </div>
          <div className=' bg-slate-200 animate-pulse h-[100px]'></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingDetailsComp
