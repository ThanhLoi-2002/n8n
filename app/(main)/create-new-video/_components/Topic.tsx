"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { SparklesIcon } from "lucide-react";
import { FC, useState } from "react";
import axios from "axios";

const suggestions = [
  "Historic Story",
  "Kids Story",
  "Movie Stories",
  "AI Innovation",
  "Space Mysteries",
  "Horor Stories",
  "Mythological Tales",
  "Tech Breakthroughs",
  "True Crime Stories",
  "Fantasy Adventures",
  "Science Experiments",
  "Motivational Stories",
];

interface Props {
  onHandleInputChange: (name: string, value: string) => void;
}

const Topic: FC<Props> = ({ onHandleInputChange }) => {
  const [selectTopic, setSelectTopic] = useState<string>("");
  const generateScript = async () => {
    const result = await axios.post("/api/generate-script", {
      topic: selectTopic,
    });
  };
  return (
    <div>
      <h2 className="mb-1">Project Title</h2>
      <Input
        placeholder="Enter project title"
        onChange={(e) => onHandleInputChange("title", e.target.value)}
      />
      <div className="mt-5">
        <h2>Video Topic</h2>
        <p className="text-sm text-gray-600">Select topic form</p>
        <Tabs defaultValue="account" className="w-full mt-2">
          <TabsList>
            <TabsTrigger value="suggestion">Suggestion</TabsTrigger>
            <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
          </TabsList>
          <TabsContent value="suggestion">
            <div>
              {suggestions.map((suggestion, index) => {
                return (
                  <Button
                    variant={"outline"}
                    key={index}
                    className={`m-2 ${suggestion == selectTopic && "bg-black"}`}
                    onClick={() => {
                      setSelectTopic(suggestion);
                      onHandleInputChange("topic", suggestion);
                    }}
                  >
                    {suggestion}
                  </Button>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="your_topic">
            <div>
              <h2>Enter your own topic</h2>
              <Textarea
                placeholder="Enter your topic"
                onChange={(e) => onHandleInputChange("topic", e.target.value)}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Button className="mt-3" size="sm" onClick={generateScript}>
        <SparklesIcon />
        Generate Script
      </Button>
    </div>
  );
};

export default Topic;
