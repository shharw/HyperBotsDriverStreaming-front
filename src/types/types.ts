export interface IBot {
    name: string;
    charge: number;
    speed: number;
}
export interface IDriver {
    id: number;
    name: string;
}
export interface ITask {
    id: number;
    description: string;
}
export interface IRoute {
    fromAddress: string;
    toAddress: string;
}

export interface IDriverWitAllData {
    "driver": [
        {
            "id": number,
            "name": string,
            "tasks": [
                {
                    "id": number,
                    "description": string,
                },
            ],
            "bot": {
                "name": string,
                "charge": number,
                "speed": number,
                "route": {
                    "fromAddress": string,
                    "toAddress": string,
                }
            }
        }
    ]
}
export function setInitialState() {
    const initialStateDriver = {id: 0, name: ""};
    const initialStateBot = {name: "", speed: 0, charge: 0};
    const initialStateRoute = {fromAddress: "", toAddress: ""};
    return {initialStateRoute, initialStateDriver, initialStateBot};
}
