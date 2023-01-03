import React from 'react';
import {IRoute} from "../../types/types";

type Props = {
    route: IRoute;
};
export const Route = ({route}: Props) => {
    return (
        <div className={'row mb-3'}>
            <p className={"{task.description} text-center"} style={{textDecoration:"underline"}}>Delivery address</p>
                <div>
                    <ul>
                        <li>
                            From: {route.fromAddress}
                        </li>
                        <li>
                           To: {route.toAddress}
                        </li>
                    </ul>
                </div>
        </div>
    );
};