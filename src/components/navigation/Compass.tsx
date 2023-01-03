import React from 'react';
import compass from '../../img/compass.png';

type Props = {

};
export const Compass = (props: Props) => {
    return (
        <div className={'row'}>
            <div className="text-center" style={{marginTop:'60%'}}>
                <img className="w-75 " src={compass} alt=""/>
            </div>
        </div>
    );
};