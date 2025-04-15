import React, { useEffect, useState } from "react";
import FormComponent from "./components/FormComponent/FormComponent";
import PlanContainer from "./components/PlanContainerComponent/PlanContainer";
function App() {
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("data");
    return localData ? JSON.parse(localData) : [];
  });

  const [formData, setFormData] = useState({
    subject: "",
    hour: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const [editId, setEditId] = useState(null);

  useEffect(()=>{
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])
  return (
    <main className="bg-[#0C1E1B] min-h-screen container mx-auto flex flex-col justify-start items-center p-4">
      <h2 className="font-bold text-[#29B475] text-2xl md:text-4xl w-[100%] text-center p-4 rounded-lg">
        Geekster Education Planner
      </h2>
      <FormComponent
        data={data}
        formData={formData}
        setFormData={setFormData}
        setData={setData}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editId={editId}
        setEditId={setEditId}
      />
      <PlanContainer
        data={data}
        setData={setData}
        setFormData={setFormData}
        setIsEditing={setIsEditing}
        setEditId={setEditId}
      />
    </main>
  );
}

export default App;
