import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import { BuyComponent } from '../ModalComponents/BuyComponent'
import {SellComponent} from '../ModalComponents/SellComponent'


const modalComponentMap = {
    BUY: BuyComponent,
    SELL: SellComponent
}

export const ComponentModal = (props) => {
    const [activeComponent, setActiveComponent] = useState(modalComponentMap['BUY']);

    return (
        <div className='component-container'>
            <div className='button-container'>
                <Button variant="primary" onClick={setActiveComponent.bind(this, "BUY")} >Buy</Button>
                <Button variant="primary" onClick={setActiveComponent.bind(this, "SELL")}>Sell</Button>
            </div>
            {activeComponent}

        </div>
    )
}
