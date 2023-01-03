import axios from "axios";
import {useEffect, useState} from "react";
import {IBot, IDriver, IDriverWitAllData, IRoute, ITask, setInitialState} from "../types/types";

export const useDriverWithAllData = (id: number) => {
    const {initialStateDriver, initialStateBot, initialStateRoute} = setInitialState()

    const requestLink = `http://localhost:5000/api/v1/driver-streaming/all-data/${id}`

    const [driver, setDriver] = useState<IDriver>(initialStateDriver)
    const [bot, setBot] = useState<IBot>(initialStateBot)
    const [route, setRoute] = useState<IRoute>(initialStateRoute)
    const [tasks, setTasks] = useState<ITask[]>([])

    useEffect(() => {
        fetchData().catch(e => console.log(e))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    async function fetchData() {
        const {data} = await axios.get<IDriverWitAllData>(requestLink)
        setDriver(data.driver[0])
        setBot(data.driver[0].bot)
        setRoute(data.driver[0].bot.route)
        setTasks(data.driver[0].tasks)
    }
    return {driver, bot, route, tasks};
}