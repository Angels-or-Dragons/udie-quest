import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BuildRow = ({profession, buildInfos}) => {
  return (
    <Link to={`/raids/builds/${buildInfos.childMdx.slug}`}>
      <article key={buildInfos.childMdx.slug} className={`w-full items-center justify-between px-4 py-1 rounded-sm bg-secondary mb-2 border-l-4 border-solid flex border-${profession.jsonId} hover:scale-[1.02] hover:bg-gradient-to-r hover:from-secondary hover:to-${profession.jsonId}/30`}>
      <div className='flex items-center'>
        <GatsbyImage
          image= {getImage(buildInfos.profession.image)}
          alt={profession.name}
          className={`h-6 w-6 m-2 mr -4`}
        />
        <span className='uppercase font-semibold '>{buildInfos.childMdx.frontmatter.title}</span>
        
        <div className='hidden md:block ml-4'>
          {buildInfos.childMdx.frontmatter.tags.map(tag => {
            return (
              <span key={tag} className="inline-block bg-primary primary-text px-2 py-1 text-sm rounded-sm mx-1 capitalize font-semibold font-light">{tag}</span>
              )
            })}
        </div>

      </div>
      <div className='text-end'>
        <span className="inline-block secondary-text text-xs">Mis à jour</span>
        <span className="block primary-text font-bold text-sm">{buildInfos.childMdx.frontmatter.date}</span>
      </div>

    </article>
  </Link>
  )
}

export default BuildRow