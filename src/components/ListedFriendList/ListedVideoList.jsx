
import videoImg from '/video.png'

const ListedVideoList = ({ customItem }) => {
  const item = customItem;

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="flex items-center gap-4">
          <img src={videoImg} alt="" />

          <div>
            <h3 className="font-semibold">
              Video with {item?.name}
            </h3>

            <p>{item?.next_due_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedVideoList;