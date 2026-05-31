
import TextImg from '/text.png'

const ListedTextList = ({ customItem ,sortingType}) => {
  const item = customItem;

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="flex items-center gap-4">
          <img src={TextImg} alt="" />

          <div>
            <h3 className="font-semibold">
              Text with {item?.name}
            </h3>

            <p>{item?.next_due_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedTextList;