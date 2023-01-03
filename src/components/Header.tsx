import React from 'react';
import {Logo} from "./Logo";
import '../App.css'

export const Header = () => {
    return (
        <header>
            <div className={'d-flex mt-3 border-bottom border-danger border-3'}>
                <Logo/>
                <h3 className={'text-danger logo-text'} onClick={() => alert('Click')}>HyperBots</h3>
            </div>
        </header>
    );
}
