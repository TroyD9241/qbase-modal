import React, { useState } from 'react'

import {BuyComponent, SellComponent} from '../ModalComponents'


const modalComponentMap = {
    BUY: BuyComponent,
    SELL: SellComponent
}

export const ComponentModal = (props) => {
    const [activeComponent, setActiveComponent] = useState('BUY');

    return (
        <div>
            <div activeTab={activeComponent} onChangeTab={(componentType) => setActiveComponent(componentType)}/>
                {modalComponentMap[activeComponent]}
        </div>
    )
}
