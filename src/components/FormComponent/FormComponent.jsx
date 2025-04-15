import React from "react";

function FormComponent({
  data,
  formData,
  setFormData,
  setData,
  isEditing,
  setIsEditing,
  editId,
  setEditId,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    if (isEditing) {
      const modifiedData = data.map((obj) => {
        if (obj.id === editId) {
          return {
            ...formData,
            id: editId,
          };
        }
        return obj;
      })
      setData(
        modifiedData
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      const obj = { ...formData, id: Date.now() };
      setData((prev) => {
        const arr = [...prev, obj];
        return arr;
      });
    }

    setFormData({
      subject: "",
      hour: "",
    });
  }
  return (
    <section className="bg-[#FFFFFF] mt-10 w-full px-4 py-6 rounded-lg">
      <form
        className="w-full lg:w-2/3 flex flex-col lg:flex-row gap-6 mx-auto lg:h-10"
        onSubmit={handleSubmit}
      >
        <input
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className="rounded border-1 flex-1 p-2 border-gray-500 focus:border-[#0c1e1b]"
          type="text"
          name="name"
          placeholder="Enter Subject"
          required
          autoComplete="off"
        />
        <input
          value={formData.hour}
          onChange={(e) => setFormData({ ...formData, hour: e.target.value })}
          className="rounded border-1 flex-1 p-2 border-gray-500 focus:border-[#0c1e1b]"
          type="number"
          name="hour"
          placeholder="Enter Hour"
          required
          autoComplete="off"
          min={1}
        />
        <input
          className="px-10 py-1 font-semibold rounded bg-[#29b475] text-white cursor-pointer"
          type="submit"
          value={isEditing ? "Edit" : "Add"}
        />
      </form>
    </section>
  );
}

export default FormComponent;
