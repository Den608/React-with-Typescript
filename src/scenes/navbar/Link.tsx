import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'
type Props = {
    page:string,
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
   
  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? ' text-primary-500' : ''} transition duration-150 ease-in-out hover:text-primary-500 text-gray-500  `}
    href={`#${page}`}
    onClick={() => setSelectedPage(lowerCasePage)}

    >
        {page}
    </AnchorLink>
  )
}

export default Link