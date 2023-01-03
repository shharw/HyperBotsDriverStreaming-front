import React from 'react';
import {Header} from "./components/Header";
import {Bot} from "./components/content/Bot"
import {Driver} from "./components/content/Driver"
import {Route} from "./components/content/Route"
import {Task} from "./components/content/Task"
import {Compass} from "./components/navigation/Compass";
import {Map} from "./components/navigation/Map";
import {ControlPanel} from "./components/navigation/ControlPanel";
import {VideoStream} from "./components/navigation/VideoStream";
import './App.css'
import {useDriverWithAllData} from "./hooks/driver-with-all-data";

const App = () => {
    const {driver, bot, route, tasks} = useDriverWithAllData(2);

    return (
        <div className={'App container'}>
            <Header/>
            <div className="row pt-3">
                <div className="col-xl-3">
                    <Bot bot={bot}/>
                    <Driver driver={driver}/>
                    <Route route={route}/>
                    <Task tasks={tasks}/>
                </div>
                <div className="col-xl-6">
                    <VideoStream/>
                    <Map/>
                </div>
                <div className="col-xl-3">
                    <ControlPanel/>
                    <Compass/>
                </div>
            </div>
        </div>
    );
};

export default App;