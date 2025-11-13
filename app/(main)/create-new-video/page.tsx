"use client";
import { useState } from "react";
import Topic from "./_components/Topic";

const CreateNewVideo = () => {
  const [formData, setFormData] = useState<any>();

  const onHandleInputChange = (name: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <h2 className="text-3xl">Create New Video</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8">
        <div className="col-span-3 p-7 border rounded-xl">
          <Topic onHandleInputChange={onHandleInputChange}/>
        </div>
      </div>
    </div>
  );
};

export default CreateNewVideo;
