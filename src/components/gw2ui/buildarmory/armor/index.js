import React from 'react'

import '@discretize/gw2-ui-new/dist/default_style.css';
import '@discretize/gw2-ui-new/dist/index.css';
import '@discretize/typeface-menomonia';

import { Item } from '@discretize/gw2-ui-new';

const Armor = ({infos}) => {

  return (
    <div>
      <Item
        className='[&>*]:h-16'
        disableText
        id={48087}
        stat="Swashbuckler"
        upgrades={[
          [ 24836, 6]
        ]}
      />
    </div>
      


  )
}
export default Armor