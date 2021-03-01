import React, { useState } from 'react';
import Cricketers from '../Cricketers/Cricketers';
import Myteam from '../Myteam/Myteam';

const Section = () => {
    const [playerCart, setPlayerCart] = useState([]);
    const addPlayer = (cricketer) => {
        const newPlayerCart = [...playerCart, cricketer];
        let onlyUnique = (value, index, self) => {
            return self.indexOf(value) === index;
        }
        const uniquePlayerCart = newPlayerCart.filter(onlyUnique);
        setPlayerCart(uniquePlayerCart);
    }
    
    return (
        <div className="row mt-3">

            <div className="col-8">
                <Cricketers addPlayer={addPlayer} ></Cricketers>
            </div>

            <div className="col-4 mt-3">
                <Myteam playerCart={playerCart}></Myteam>
            </div>

        </div>
    );
};

export default Section;