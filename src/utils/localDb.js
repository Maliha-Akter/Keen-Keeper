
const getAllCallListFromLocalDB = () => {
    const allCallList = localStorage.getItem("callList");
    console.log(allCallList, 'CallList From Local DB')

    if (allCallList) return JSON.parse(allCallList);
    return [];

}

const addCallListToLocalDB = (friend) => {
    const allCall = getAllCallListFromLocalDB();
    const isAlreadyExist = allCall.find(frnd => frnd.id === friend.id);
    if (!isAlreadyExist) {
        allCall.push(friend);
        localStorage.setItem("callList", JSON.stringify(allCall))
    }
    
}

export { getAllCallListFromLocalDB, addCallListToLocalDB };