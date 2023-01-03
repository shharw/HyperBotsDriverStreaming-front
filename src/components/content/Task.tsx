import React from 'react';
import {ITask} from "../../types/types";

type Props = {
    tasks: ITask[];
};
export const Task = ({tasks}: Props) => {
    return (
        <div className={'row mb-3'}>
            <p className={"mb-1 text-center"} style={{textDecoration:"underline"}}>Tasks</p>
            <div>
                <ul>
                    {tasks.map(task => <li key={task.id}>{task.description}</li>)}
                </ul>
            </div>
        </div>
    );
};