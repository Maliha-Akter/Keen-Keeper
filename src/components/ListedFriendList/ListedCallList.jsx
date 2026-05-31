
import { FaPhoneAlt } from "react-icons/fa";

const ListedCallList = ({ customItem }) => {
  const item = customItem;

  
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="flex items-center gap-4">
          <FaPhoneAlt size={30} className="text-gray-600" />

          <div>
            <h3 className="font-semibold">
              Call with {item?.name}
            </h3>

            <p>{item?.next_due_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListedCallList;