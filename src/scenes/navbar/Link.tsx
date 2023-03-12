import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page:string,
}

const Link = ({page}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "")
  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? ' text-primary-500' : ''} transition duration-150 ease-in-out hover:text-primary-500 text-gray-500  `}
    href={`#${page}`}

    >
        {page}
    </AnchorLink>
  )
}