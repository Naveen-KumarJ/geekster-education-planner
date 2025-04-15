import React from "react";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function PlanContainer({
  data,
  setData,
  setFormData,
  setIsEditing,
  setEditId,
}) {
  function handleEvent(task, id) {
    console.log(task, id);
    // Increment and Decrement Logic
    if (task === "+" || task === "-") {
      const modifiedData = data.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            hour:
              task === "+"
                ? Number(obj.hour) + 1
                : Math.max(0, Number(obj.hour) - 1),
          };
        }
        return obj;
      });
      // localStorage.setItem('data',JSON.stringify(modifiedData));
      setData(
        modifiedData
      );
    }

    // Delete Logic
    if (task === "delete") {
      const modifiedData = data.filter((obj) => obj.id != id);
      // localStorage.setItem('data',JSON.stringify(modifiedData));
      setData(modifiedData);
    }

    // edit task
    if (task === "edit") {
      const obj = data.find((obj) => obj.id === id);
      setFormData({
        subject: obj.subject,
        hour: obj.hour,
      });
      setEditId(obj.id);
      setIsEditing(true);
    }
  }
  return (
    data.length > 0 && (
      <section className="bg-[#FFFFFF] mt-16 w-full px-2 md:px-4 py-6 rounded-lg flex flex-col gap-5">
        {data.map((obj) => (
          <div
            key={obj.id}
            className="w-full md:w-2/3 border-1 border-[#29b475] mx-auto flex flex-col gap-2.5 md:flex-row items-center justify-around p-4 rounded"
          >
            <div className="text-left w-full flex justify-around gap-2">
              <span className="md:flex-1 font-semibold underline">
                {obj.subject}
              </span>
              <span className="md:flex-1 font-semibold underline">
                {obj.hour} Hours
              </span>
            </div>
            <div className="flex gap-3">
              <span
                onClick={() => handleEvent("+", obj.id)}
                className="border-[#29b475] text-[#29b475] bg-[#0C1E1B] p-2 rounded font-bold cursor-pointer"
              >
                <IoIosAdd />
              </span>
              <span
                onClick={() => handleEvent("-", obj.id)}
                className="border-[#29b475] text-[#29b475] bg-[#0C1E1B] p-2 rounded font-bold cursor-pointer"
              >
                <GrFormSubtract />
              </span>
              <span
                onClick={() => handleEvent("edit", obj.id)}
                className="border-1 border-[#29b475] text-[#29b475] bg-[#0C1E1B] p-2 rounded font-bold cursor-pointer"
              >
                <FaEdit />
              </span>
              <span
                onClick={() => handleEvent("delete", obj.id)}
                className="border-1 border-[#29b475] text-[#29b475] bg-[#0C1E1B] p-2 rounded font-bold cursor-pointer"
              >
                <MdDelete />
              </span>
            </div>
          </div>
        ))}
      </section>
    )
  );
}

export default PlanContainer;
