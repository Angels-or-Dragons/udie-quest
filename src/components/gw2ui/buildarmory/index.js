import React from 'react'

import Armor from './armor'

const BuildArmory = ({armor, weapons, trinkets, consumables}) => {

  return (
    <div>
      <Armor infos={armor}/>
    </div>
  )
}
export default BuildArmory