import React, { useEffect, useRef } from 'react';

const VideoCall = () => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const peerConnection = useRef(null);

    useEffect(() => {
        const init = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            localVideoRef.current.srcObject = stream;
            peerConnection.current = new RTCPeerConnection();
            stream.getTracks().forEach(track => peerConnection.current.addTrack(track, stream));

            peerConnection.current.onicecandidate = (event) => {
                if (event.candidate) {
                    // Send the candidate to the remote peer
                }
            };

            peerConnection.current.ontrack = (event) => {
                remoteVideoRef.current.srcObject = event.streams[0];
            };
        };

        init();
    }, []);

    const startScreenShare = async () => {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        screenStream.getTracks().forEach(track => peerConnection.current.addTrack(track, screenStream));
    };

    return (
        <div>
            <video ref={localVideoRef} autoPlay muted style={{ width: '300px' }}></video>
            <video ref={remoteVideoRef} autoPlay style={{ width: '300px' }}></video>
            <button onClick={startScreenShare}>Share Screen</button>
        </div>
    );
};

export default VideoCall;