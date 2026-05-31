import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();
const FriendProvider = ({ children }) => {

    const [storedCalls, setStoredCalls] = useState([]);
    const handleCall = (currentCall) => {
        //   step-1 store id or object
        //  step-2 where to store
        //  step-3: array or collection
        //  step-4: check if it already exist show alert
        // step5: if not add its
        console.log(currentCall, 'call');
        const isExistCall = storedCalls.find((call) => call.id === currentCall.id);
        if (isExistCall) {
            toast('The person is already in Call');
        }
        else {
            toast(`${currentCall.name} is already in call`);
            setStoredCalls([...storedCalls, currentCall])
        }

    }
    const data = {
        storedCalls, setStoredCalls, handleCall,
    }
    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendProvider;