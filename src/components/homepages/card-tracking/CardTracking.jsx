import { use } from 'react';


const friendsPromise = fetch('/data.json').then(res => res.json());
const CardTracking = () => {
    const friends = use(friendsPromise);
    console.log(friends, "friends");

    const onTrack = friends.filter((friend) => friend.status == "On-Track").length;
    // const almostDue = friends.filter((friend) => friend.status == "almost due").length;
    const overdue = friends.filter((friend) => friend.status == "Overdue").length;
    const interactionsThisMonth = friends.filter(
        friend => friend.days_since_contact <= 30
    ).length;

    return (
        <div className='container mx-auto lg:flex lg:flex-wrap justify-evenly items-center space-y-4 '>
            <div className='text-center space-y-2 rounded-xl p-14 shadow-lg hover:shadow-xl transition'>
                <h2 className='font-bold text-3xl'>{friends.length}</h2>
                <p className='text-2xl'>Total Friends</p>
            </div>
            <div className='text-center space-y-2 rounded-xl p-14 shadow-lg hover:shadow-xl transition'>
                <h2 className='font-bold text-3xl'>{onTrack}</h2>
                <p className='text-2xl'>On Track</p>
            </div>
            <div className='text-center space-y-2 rounded-xl p-14 shadow-lg hover:shadow-xl transition'>
                <h2 className='font-bold text-3xl'>{overdue}</h2>
                <p className='text-2xl'>Need Attention</p>
            </div>
            <div className='text-center space-y-2 rounded-xl p-14 shadow-lg hover:shadow-xl transition'>
                <h2 className='font-bold text-3xl'>{interactionsThisMonth}</h2>
                <p className='text-2xl'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default CardTracking;