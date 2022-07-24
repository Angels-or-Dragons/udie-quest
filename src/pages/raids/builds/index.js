import React, { useEffect, useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../../components/layout'
import BuildRow from '../../../components/buildrow'

const RaidBuildsPage = ({ location }) => {

  const [buildsList, setBuildsList] = useState([]);
  const [professionsList, setProfessionList] = useState([]);

  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "raids_builds"}, name: {eq: "index"}}) {
      nodes {
        childMdx {
          slug
          frontmatter {
            profession
            specialization
            title
            code
            date(formatString: "DD-MM-YYYY", locale: "fr")
            tags
          }
        }
      }
    }
    allProfessionsJson(sort: {fields: [order, name], order: ASC}) {
      nodes {
        order
        jsonId
        name
        armor
        image {
          childImageSharp {
            gatsbyImageData(placeholder: NONE)
          }
        }
        specializations {
          image {
            childImageSharp {
              gatsbyImageData(placeholder: NONE)
            }
          }
          id
          name
        }
  
      }
    }
  }
  `);

  let params = new URLSearchParams(location.search);
  let profession = params.get('profession')
  // Creation des listes
  useEffect(() => {
    // Ajout d'information sur les professions dans chaque build
    let buildFabric = [];
    data.allFile.nodes.forEach(build => {
      let professionInfos = data.allProfessionsJson.nodes.find(profession => profession.jsonId === build.childMdx.frontmatter.profession);
      let newBuild = build;
      newBuild.profession = {
        order: professionInfos.order,
        armor: professionInfos.armor,
        image: build.childMdx.frontmatter.specialization ? professionInfos.specializations.find(spec => spec.id === build.childMdx.frontmatter.specialization).image : professionInfos.image
      };
      buildFabric.push(newBuild);
    });
    // Tri grace aux paramètres de l'url & sort
    buildFabric.sort((a, b) => {
      return a.profession.order - b.profession.order || a.childMdx.frontmatter.profession.localeCompare(b.childMdx.frontmatter.profession)
    })
    if(profession) {
      let filteredBuilds = buildFabric.filter(build => build.childMdx.slug.includes(profession));
      setBuildsList(filteredBuilds);
    } else{
      setBuildsList(buildFabric);
    }
    
    setProfessionList(data.allProfessionsJson.nodes);
  },[profession, data.allProfessionsJson.nodes, data.allFile.nodes]);


  return (
    <Layout pageTitle="Liste des builds" location={location}>
      <div className="container mx-auto flex-wrap md:flex-nowrap flex justify-around items-center mt-3 px-4 sm:px-6 lg:px-8 ">
        {
          professionsList.map(prof => {
            let image = getImage(prof.image)
            return (
            <Link to={`?profession=${profession !== prof.jsonId ? prof.jsonId : ''}`} key={prof.jsonId} className={`w-16 hover:scale-125 m-2 hover:rotate-6  ${profession === prof.jsonId && 'rotate-6 scale-110'}`}>
              <GatsbyImage
                image= {image}
                alt={prof.name}
                className={`h-full ${profession === prof.jsonId ? 'filter-none' : 'grayscale-[80%]'} hover:filter-none`}
              />
            </Link>
          )})
          }
      </div>
      <div className="container mx-auto flex flex-col mt-3 px-4 sm:px-6 lg:px-8 ">
      {
        buildsList.map(node => {
          let buildProfession = professionsList.find(prof => prof.jsonId === node.childMdx.frontmatter.profession);
          return (
            <BuildRow key={node.childMdx.slug} profession={buildProfession} buildInfos={node} />
          )
        })
      }
      </div>
    </Layout>
  )
}

export default RaidBuildsPage