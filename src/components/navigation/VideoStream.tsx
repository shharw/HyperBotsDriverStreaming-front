import React, {useEffect, useRef} from 'react';
import { Peer } from "peerjs";

export const VideoStream = () => {
    const videoRefCall = useRef(null);
    const videoRefReceive = useRef(null);

    const call = () => {
        // @Todo use bot id
        const peer = new Peer('call');
        navigator.mediaDevices.getUserMedia(
            { video: true, audio: true })
            .then(stream => {
                const call = peer.call("receive", stream);
                call.on("stream", (remoteStream) => {
                    let video = videoRefCall.current;
                    // @ts-ignore
                    video.srcObject = remoteStream;
                    // @ts-ignore
                });
            })
    }

    const receive = () => {
        // @Todo use driver id
        const peer = new Peer('receive');
        peer.on("call", (call) => {
            navigator.mediaDevices.getUserMedia(
                { video: true, audio: true })
                .then(stream => {
                    call.answer(stream);
                    call.on("stream", (remoteStream) => {
                        let video = videoRefReceive.current;
                        // @ts-ignore
                        video.srcObject = remoteStream;
                        // @ts-ignore
                    });
                })
        });
    }

    useEffect(() => {
        call();
        receive();
    }, [videoRefCall, videoRefReceive]);

    return (
        <div className={'row mb-4'}>
            <div className="text-center">
                <div className="row">
                    <div className="col">
                        {/*@Todo https://stackoverflow.com/questions/1055214/is-there-a-way-to-make-html5-video-fullscreen*/}
                        <video ref={videoRefCall} className={'w-100'} autoPlay muted></video>
                    </div>
                    <div className="col">
                        <video ref={videoRefReceive} className={'w-100'} autoPlay muted></video>
                    </div>
                </div>
            </div>
        </div>
    );
};