import React from 'react';
import {IDriver} from "../../types/types";

interface Props {
    driver: IDriver
};

export const Driver = ({driver}: Props) => {
    return (
        <div className={'row text-center mb-3'}>
            <div className="mb-1" style={{textDecoration:"underline"}}>Driver info</div>
            <div className="">Driver {driver.name}</div>
            <div className="">ID: {driver.id}</div>
        </div>
    );
};