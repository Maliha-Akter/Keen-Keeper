import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();
const FriendProvider = ({ children }) => {

    const [storedCalls, setStoredCalls] = useState([]);
    const [storedTexts, setStoredTexts] = useState([]);
    const [storedVideos, setStoredVideos] = useState([]);

    const handleCall = (currentCall) => {
        const isExistInTextList = storedTexts.find((text)=> text.id === currentCall.id);
        if(isExistInTextList){
            toast.error(`${currentCall.name} is already in Text`);
            return;
        }
        const isExistInVideoList = storedVideos.find((video)=> video.id === currentCall.id);
        if(isExistInVideoList){
            toast.error(`${currentCall.name} is already in Video Call`);
            return;
        }
        //   step-1 store id or object
        //  step-2 where to store
        //  step-3: array or collection
        //  step-4: check if it already exist show alert
        // step5: if not add its
        console.log(currentCall, 'call');
        const isExistCall = storedCalls.find((call) => call.id === currentCall.id);
        if (isExistCall) {
            toast.error('The person is already in Call');
        }
        else {
            toast.success(`Call With ${currentCall.name} Added`);
            setStoredCalls([...storedCalls, currentCall])
        }

    }
    const handleText = (currentText) => {

        const isExistInCallList = storedCalls.find((call)=> call.id === currentText.id);
        if(isExistInCallList){
            toast.error(`${currentText.name} is already in call`);
            return;
        }
        const isExistInVideoList = storedVideos.find((video)=> video.id === currentText.id);
        if(isExistInVideoList){
            toast.error(`${currentText.name} is already in Video Call`);
            return;
        }
        //   step-1 store id or object
        //  step-2 where to store
        //  step-3: array or collection
        //  step-4: check if it already exist show alert
        // step5: if not add its
        console.log(currentText, 'text');
        const isExistText = storedTexts.find((text) => text.id === currentText.id);
        if (isExistText) {
            toast.error('The person is already in Text');
        }
        else {
            toast.success(`Text With ${currentText.name} Added`);
            setStoredTexts([...storedTexts, currentText])
        }

    }
    const handleVideo = (currentVideo) => {
        const isExistInCallList = storedCalls.find((call)=> call.id === currentVideo.id);
        if(isExistInCallList){
            toast.error(`${currentVideo.name} is already in call`);
            return;
        }
        const isExistInTextList = storedTexts.find((text)=> text.id === currentVideo.id);
        if(isExistInTextList){
            toast.error(`${currentVideo.name} is already in Text`);
            return;
        }
        //   step-1 store id or object
        //  step-2 where to store
        //  step-3: array or collection
        //  step-4: check if it already exist show alert
        // step5: if not add its
        console.log(currentVideo, 'call');
        const isExistVideo = storedVideos.find((video) => video.id === currentVideo.id);
        if (isExistVideo) {
            toast.error('The person is already in Video Call');
        }
        else {
            toast.success(`Video Call With ${currentVideo.name} Added`);
            setStoredVideos([...storedVideos, currentVideo])
        }

    }

    const data = {
        storedCalls, setStoredCalls, handleCall,
        storedTexts, setStoredTexts, handleText,
        storedVideos,setStoredVideos,handleVideo,
    }
    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendProvider;