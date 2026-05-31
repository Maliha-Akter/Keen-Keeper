import { useContext } from "react";
import { FriendContext } from "../../../context/FriendContext";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const colors = ["#7C3AED", "#1F4D3D", "#34A853"];

const Stats = () => {
    const { storedCalls, storedTexts, storedVideos } =
        useContext(FriendContext);

    const data = [
        { name: "Text", value: storedTexts.length },
        { name: "Call", value: storedCalls.length },
        { name: "Video", value: storedVideos.length },
    ];

    if (
        storedCalls.length === 0 &&
        storedTexts.length === 0 &&
        storedVideos.length === 0
    ) {
        return (
            <div className="text-center py-10 mt-15 bg-green-200 container mx-auto">
                <h2 className="text-3xl font-bold ">
                    No statistics available yet
                </h2>
                <p className="mt-7">
                    Please interact with a friend first. Statistics will appear here after you add a call, text, or video interaction.
                </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-4xl font-bold mb-8 text-center md:text-left px-4 ">
                Friendship Analytics
            </h2>

            <div className="bg-white rounded-xl shadow-lg mx-14 p-6">
                <h3 className="font-semibold mb-4 text-center md:text-left px-5">
                    By Interaction Type
                </h3>

                <div className="h-87.5">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={70}
                                outerRadius={100}
                                paddingAngle={5}
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={index}
                                        fill={colors[index]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Stats;