import React, { useContext } from 'react';
import { FriendContext } from '../../../context/FriendContext';

const Timeline = () => {
    const {handleCall,storedCalls} = useContext(FriendContext);
        console.log(handleCall,storedCalls);
    return (
        <div>
            timeline
        </div>
    );
};

export default Timeline;