import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';

type Props = {
    children:React.ReactNode
    setSelectedPage:(value:SelectedPage) => void;
}

const ActionButton = ({
    children,
    setSelectedPage,
}: Props) => {
    return (
        <AnchorLink
            className="bg-primary-500 text-white px-6 py-2 rounded-md transition duration-150 ease-in-out hover:bg-primary-600 cursor-pointer"
            onClick={() => setSelectedPage(SelectedPage.CONTACT)}
            href={`#${SelectedPage.CONTACT}`}
        >
        
            {children}
        </AnchorLink>

    )
}
export default ActionButton