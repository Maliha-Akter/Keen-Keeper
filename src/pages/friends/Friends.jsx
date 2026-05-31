import React, { Suspense } from 'react';
import AllFriends from '../../components/homepages/allfriends/AllFriends';
import { Oval } from 'react-loader-spinner';

const Friends = () => {
    return (
        <Suspense
            fallback={
                <div className="flex justify-center mt-10 h-screen">
                    <Oval
                        height={100}
                        width={100}
                        color="#4fa94d"
                        visible={true}
                        ariaLabel="oval-loading"
                    />
                </div>
            }
        >
            <AllFriends />
        </Suspense>
    );
};

export default Friends;