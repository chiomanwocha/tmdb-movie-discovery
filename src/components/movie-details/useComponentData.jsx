import React from 'react'
import ticket from '../../assets/svgs/icons/Two Tickets.svg'
import list from '../../assets/svgs/icons/List.svg'

const useComponentData = (directors, writers, stars) => {
  const creditsData = [
    { title: 'Director', value: directors },
    {
      title: 'Writers',
      value: writers
    },
    {
      title: 'Stars',
      value: stars
    }
  ]

  const buttonObj = [
    { title: 'See Showtimes', icon: ticket },
    { title: 'More watch options', icon: list }
  ]

  const displayItems = (arr, showButton, setShowMore, showMore) => {
    return (
      <>
        {arr?.map((value, index) => (
          <span className="text-rose" key={value?.id}>
            {value?.name}
            {arr?.length - 1 !== index ? ', ' : ' '}
          </span>
        ))}
        {showButton
          ? (
          <span
            className="text-rose underline cursor-pointer font-bold"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show less' : 'Show more'}
          </span>
            )
          : null}
      </>
    )
  }
  return { displayItems, creditsData, buttonObj }
}

export default useComponentData
