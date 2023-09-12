import React from 'react'

const LoadingMovieCard = () => {
  return (
    <div className="animate-pulse max-[640px]:w-full lg:max-w-[250px] cursor-pointer hover:scale-105 hover:drop-shadow-xl">
      <div className="relative">
        <div className="h-[370px] bg-slate-200"></div>
        <div className="absolute top-0 p-4 flex justify-between w-full">
          <p className="bg-slate-200 w-4 px-2 py-1 rounded-2xl font-bold text-xs flex items-center"></p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 mt-3">
        {[1, 2].map((item) => (
          <p className="h-2 bg-slate-200 rounded" key={item}></p>
        ))}
        <div className="bg-slate-200 flex flex-wrap w-full gap-2 lg:gap-8 text-xs">
          <div className="flex gap-2 flex-wrap">
            {[1, 2].map((item) => (
              <div key={item} className="h-2 bg-slate-200 rounded"></div>
            ))}
          </div>
        </div>
        <p className="h-2 bg-slate-200 rounded"></p>
      </div>
    </div>
  )
}

export default LoadingMovieCard
