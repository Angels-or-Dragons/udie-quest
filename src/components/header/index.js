import React from 'react';
import BreadCrumb from '../breadcrumb';
import { StaticImage } from 'gatsby-plugin-image';

const Header = ({location, pageTitle}) => {
  return (
    <div className="bg-cover bg-center bg-[url('https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/wallpapers/af6953a10506-1920x1200.jpg')]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-48">
          <div className="w-full flex justify-between h-32 bg-primary/[.83]">
            <div className='p-4'>
              <BreadCrumb location={location}/>
              <h1 className='text-6xl'>{pageTitle}</h1>
            </div>
            <StaticImage
              src="https://wiki.guildwars2.com/images/3/30/Guardian_icon_%28highres%29.png"
              alt="Guardian"
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header