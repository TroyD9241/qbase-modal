import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BuyComponent } from '../ModalComponents/BuyComponent'
import {SellComponent} from '../ModalComponents/SellComponent'
import { SearchComponent } from '../ModalComponents/SearchComponent'
import { BuyReviewComponent } from '../ModalComponents/BuyReviewComponent'
import {SellReviewComponent} from '../ModalComponents/SellReviewComponent'


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
                            <button variant="primary" onClick={setActiveComponent.bind(null, "BUY")}>Buy</button>

                            <button variant="primary" onClick={setActiveComponent.bind(null, "SELL")}>Sell</button>

                            <button variant="primary" onClick={setActiveComponent.bind(null, "SEARCH")}>Ticker</button>

                            <button variant="primary" onClick={setActiveComponent.bind(null, "BUYREVIEW")}>Purchase</button>

                            <button variant="primary" onClick={setActiveComponent.bind(null, "SELLREVIEW")}>Sell</button>

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
