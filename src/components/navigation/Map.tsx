import React from 'react';
import { Marker } from "pigeon-maps"
import { Map as PigeonMap} from "pigeon-maps"

type Props = {

};

export const Map = (props: Props) => {
    const coordinatesInit: [number, number] = [46.966113, 32.003515]
    const coordinatesFrom: [number, number] = [46.967504, 31.990318]
    const coordinatesTo: [number, number] = [46.962751, 32.012516]
    return (
        <div className={'row'}>
            <div className="text-center">
                <PigeonMap boxClassname={"border border-3"} height={300} defaultCenter={coordinatesInit} defaultZoom={13}>
                    <Marker width={50} anchor={coordinatesFrom} color={'blue'} />
                    <Marker width={50} anchor={coordinatesTo} color={'red'} />
                </PigeonMap>
            </div>
        </div>
    );
};