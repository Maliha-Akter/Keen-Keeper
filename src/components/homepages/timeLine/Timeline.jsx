import { useContext, useState } from "react";
import { FriendContext } from "../../../context/FriendContext";
import ListedCallList from "../../ListedFriendList/ListedCallList";
import ListedVideoList from "../../ListedFriendList/ListedVideoList";
import ListedTextList from "../../ListedFriendList/ListedTextList";
import { FaAngleDown } from "react-icons/fa";

const Timeline = () => {
    const { timeline } = useContext(FriendContext);

    if (timeline.length === 0) {
        return (
            <div className="container mx-auto py-10 text-center font-bold text-2xl">
                No History in Timeline
            </div>
        );
    }

    const [sortingType, setSortingType] = useState("");
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold mb-6">Timeline</h1>
            <div className="dropdown dropdown-bottom mb-6">
                <div tabIndex={0} role="button" className="btn m-1"><span>Filtered By</span><FaAngleDown></FaAngleDown></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Call</a></li>
                    <li><a>Texting</a></li>
                    <li><a>Video</a></li>
                </ul>
            </div>
            <div className="space-y-4">
                {timeline.map((item, index) => {

                    if (item.type === "call") {
                        return (
                            <div key={index}>
                                <ListedCallList customItem={item} />
                            </div>
                        );
                    }

                    if (item.type === "video") {
                        return (
                            <div key={index}>
                                <ListedVideoList customItem={item} />
                            </div>
                        );
                    }

                    if (item.type === "text") {
                        return (
                            <div key={index}>
                                <ListedTextList customItem={item} />
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Timeline;