import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { BuyComponent } from '../ModalComponents/BuyComponent'
import {SellComponent} from '../ModalComponents/SellComponent'
import { SearchComponent } from '../ModalComponents/SearchComponent'
import { BuyReviewComponent } from '../ModalComponents/BuyReviewComponent'
import {SellReviewComponent} from '../ModalComponents/SellReviewComponent'

import './ComponentModal.css'

const modalComponentMap = {
    BUY: BuyComponent,
    SELL: SellComponent,
    SEARCH: SearchComponent,
    BUYREVIEW: BuyReviewComponent,
    SELLREVIEW: SellReviewComponent

}

export const ComponentModal = ({ show }) => {
    const root = document.getElementById('modal-root')
    const [activeComponent, setActiveComponent] = useState("BUY");
    const Component = modalComponentMap[activeComponent]
    if (root) {
        return ReactDOM.createPortal(
            <div>
                {show ?
                    <div className='component-container'>

                        <div className='button-container'>
                            <Button variant="primary" onClick={setActiveComponent.bind(null, "BUY")}>Buy</Button>

                            <Button variant="primary" onClick={setActiveComponent.bind(null, "SELL")}>Sell</Button>

                            <Button variant="primary" onClick={setActiveComponent.bind(null, "SEARCH")}>Ticker</Button>

                            <Button variant="primary" onClick={setActiveComponent.bind(null, "BUYREVIEW")}>Purchase</Button>

                            <Button variant="primary" onClick={setActiveComponent.bind(null, "SELLREVIEW")}>Sell</Button>

                        </div>
                        <Component />

                    </div> : null
                }
            </div>, root
        )
    } else {
        return null
    }
}
