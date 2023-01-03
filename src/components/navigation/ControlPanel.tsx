import React, {KeyboardEvent} from 'react';
import arrowTop from '../../img/arrow-top.png'
import arrowBottom from '../../img/arrow-bottom.png'
import arrowLeft from '../../img/arrow-left.png'
import arrowRight from '../../img/arrow-right.png'

type Props = {

};
export const ControlPanel = (props: Props) => {

    const onKeyDown = (event: KeyboardEvent) => {
        console.log(event.key);
    }

    return (
        <div className={'row'}>
            <div className="text-center" style={{marginTop:'30%'}}>
                <h1 className={'mb-5'} style={{textDecoration:'underline'}}>Control panel</h1>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <button onKeyDown={onKeyDown} className={'btn border border-danger rounded-pill border-5'}>
                            <img src={arrowTop} alt=""/>
                        </button></div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className={'btn border border-danger rounded-pill border-5'}>
                            <img src={arrowLeft} alt=""/>
                        </button></div>
                    <div className="col"></div>
                    <div className="col">
                        <button className={'btn border border-danger rounded-pill border-5'}>
                            <img src={arrowRight} alt=""/>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <button className={'btn border border-danger rounded-pill border-5'}>
                            <img src={arrowBottom} alt=""/>
                        </button>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
};