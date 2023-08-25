import React, { useState, useEffect } from 'react';

import './RoadList.scss'
import arrowRight from './../../../assets/images/Arrow-right.png';

function RoadList({ items }) {
    return ( 
        <div className="road-list">
            {
                items.map((el, index) => {
                    let showArrow = index !== 0 && index !== el.length - 1;
                    
                    return (
                        <>  
                            {
                                showArrow ? 
                                    <img src={arrowRight} alt='>'/>
                                : ""
                            }
                            <div className='item'>
                                {el}
                            </div>
                        </>
                    )
                })
            }
        </div>
     );
}

export default RoadList;