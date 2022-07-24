import React from 'react';
import BreadCrumb from '../breadcrumb';

const Header = ({location, pageTitle, baseline}) => {
  return (
    <div className="bg-cover bg-center bg-[url('https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/wallpapers/af6953a10506-1920x1200.jpg')]">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 border-solid border-b-2 border-sky-500">
        <div className="flex items-center justify-between h-24 primary-gradient ">
          <div className="container mx-auto flex justify-center items-center h-24 px-4 sm:px-6 lg:px-8">
            <div>
            <h1 className='text-3xl md:text-5xl text-center'>{pageTitle}</h1>
            <p className='text-center'>{baseline}</p>


            </div>
          </div>
        </div>
      </div>
      {
        location && location.pathname !== '/' &&
        <div className="flex items-center bg-secondary justify-between h-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BreadCrumb location={location}/>
          </div>
        </div>
    }
    </div>
  )
}

export default Header