import React, { use } from 'react';
import { Link } from 'react-router';

const friendsPromise = fetch('/data.json').then(res => res.json());

const AllFriends = () => {
    const friends = use(friendsPromise);
    console.log(friends, "friends")
  
    return (
        <div className="mx-auto container my-20">
            <h2 className="text-2xl font-bold pl-22">Your Friends</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 p-20">
                {friends.map((friend, index) => (
                    <div key={index}>
                        <Link to={`cardInfoDetails/${friend.id}`} className="card bg-base-100 shadow-lg">

                            <figure className="px-10 pt-10 flex justify-center">
                                <img
                                    src={friend.picture}
                                    alt={friend.name}
                                    className="w-24 h-24 object-cover rounded-full"
                                />
                            </figure>

                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{friend.name}</h2>
                                <p>{friend.days_since_contact} days ago</p>

                                <div className="flex flex-wrap gap-2 justify-center">
                                    {friend.tags.map((tag, i) => (
                                        <div key={i} className="bg-green-200 px-2 py-1 rounded-xl font-bold">
                                            {tag}
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className={`px-3 py-1 rounded-full text-white text-sm font-semibold w-fit
              ${friend.status === "overdue"
                                            ? "bg-red-500"
                                            : friend.status === "almost due"
                                                ? "bg-yellow-500"
                                                : "bg-green-500"
                                        }`}
                                >
                                    {friend.status}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllFriends;