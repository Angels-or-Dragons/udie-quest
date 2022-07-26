import React, { useEffect, useState } from 'react'

import '@discretize/gw2-ui-new/dist/default_style.css';
import '@discretize/gw2-ui-new/dist/index.css';
import '@discretize/typeface-menomonia';

import { TraitLine } from '@discretize/gw2-ui-new';

import { Buildtemplate } from '../../../utils/BuildCodeConverter';
import axios from 'axios';

const BuildTraits = ({code}) => {
  const [build, setBuild] = useState();
  const buildTemplate = new Buildtemplate();
  const [traitsIds, setTraitsIds] = useState([]);
  
  useEffect(() => {
    buildTemplate.parse(code);
    axios.get('https://api.guildwars2.com/v2/specializations?ids=' + buildTemplate.specializations.map(s => s.id).join(','))
      .then(res => {
        buildTemplate.specializations.forEach((spe, i) => {
          spe.traits.forEach((trait, index) => {
            if (trait !== 0) {
              let position = buildTemplate.specializations[i].traits[index]
              buildTemplate.specializations[i].traits[index] = res.data[i].major_traits[position+(index*3)-1];
            }
          })
        })
      })
      .catch(err => {
        console.log(err)
      })
    setBuild(buildTemplate);
  }, []);

  return (
    <div>
      {build && 
        build.specializations.map((specialization, index) => {
          console.log(specialization.traits)
        return (
          <TraitLine
            key={index}
            defaultSelected= {specialization.traits}
            id= {specialization.id}
          />
        )
      })}
    </div>
      


  )
}
export default BuildTraits