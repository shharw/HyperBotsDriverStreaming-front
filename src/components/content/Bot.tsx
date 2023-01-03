import React from 'react';
import {IBot} from "../../types/types";

interface Props {
    bot: IBot
};

export const Bot = ({bot}: Props) => {
    return (
        <div className={'row text-center mb-3'}>
            <div className="mb-1" style={{textDecoration:"underline"}}>HyperBot info</div>
            <div className="">{bot.name}</div>
            <div className="">Speed: {bot.speed} km/h</div>
            <div className="">Battery charge: {bot.charge}%</div>
        </div>
    );
};