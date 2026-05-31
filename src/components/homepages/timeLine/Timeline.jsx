import { useContext, useState } from "react";
import { FriendContext } from "../../../context/FriendContext";
import ListedCallList from "../../ListedFriendList/ListedCallList";
import ListedVideoList from "../../ListedFriendList/ListedVideoList";
import ListedTextList from "../../ListedFriendList/ListedTextList";
import { FaAngleDown } from "react-icons/fa";

const Timeline = () => {
    const { timeline } = useContext(FriendContext);

    const [filterType, setFilterType] = useState("");
    const [sortType, setSortType] = useState("");

    if (timeline.length === 0) {
        return (
            <div className="container mx-auto py-10 text-center font-bold text-2xl">
                No History in Timeline
            </div>
        );
    }

    const filteredTimeline =
        filterType === ""
            ? timeline
            : timeline.filter(item => item.type === filterType);

    const sortedTimeline = [...filteredTimeline].sort((a, b) => {
        if (sortType === "date") {
            return new Date(b.next_due_date) - new Date(a.next_due_date);
        }
        return 0;
    });

    return (
        <div className="container mx-auto py-10 ">
            <h1 className="text-4xl text-center md:text-left font-bold mb-6">Timeline</h1>

            <div className="text-center md:text-left">
                {/* Filter dropdown*/}
            <div className="dropdown dropdown-bottom mb-6 ">
                <div tabIndex={0} role="button" className="btn m-1">
                    <span>Filter By</span> <FaAngleDown />
                </div>

                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                    <li onClick={() => setFilterType("")}><a>All</a></li>
                    <li onClick={() => setFilterType("call")}><a>Call</a></li>
                    <li onClick={() => setFilterType("text")}><a>Texting</a></li>
                    <li onClick={() => setFilterType("video")}><a>Video</a></li>
                </ul>
            </div>
            {/* sort dropdown */}
            <div className="dropdown dropdown-bottom mb-6">
                <div tabIndex={0} role="button" className="btn m-1">
                    <span>Sort By</span> <FaAngleDown />
                </div>

                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                    <li onClick={() => setSortType("")}><a>By Default</a></li>
                    <li onClick={() => setSortType("date")}><a>Date</a></li>
                </ul>
            </div>
            </div>

            {/* list showing */}
            <div className="space-y-4 px-10 md:px-5">
                {sortedTimeline.map((item, index) => {
                    if (item.type === "call") {
                        return <ListedCallList key={index} customItem={item} />;
                    }

                    if (item.type === "video") {
                        return <ListedVideoList key={index} customItem={item} />;
                    }

                    if (item.type === "text") {
                        return <ListedTextList key={index} customItem={item} />;
                    }

                    return null;
                })}
            </div>
        </div>
    );
};

export default Timeline;