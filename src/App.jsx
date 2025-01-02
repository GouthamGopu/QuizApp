import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Question from '@/components/Question';

const App = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleNext = (nextTab) => {
    setActiveTab(nextTab.toString());
  };

  return (
    <div className='h-screen'>
      <div>
        <h1 className='font-bold text-xl p-6'>Quiz App</h1>
      </div>
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)} className="w-[60%] px-4">
        <TabsList className='bg-black'>
          <TabsTrigger value="1">Question 1</TabsTrigger>
          <TabsTrigger value="2">Question 2</TabsTrigger>
          <TabsTrigger value="3">Question 3</TabsTrigger>
          <TabsTrigger value="4">Question 4</TabsTrigger>
          <TabsTrigger value="5">Question 5</TabsTrigger>
        </TabsList>
        <TabsContent value="1"><Question i={1} onNext={handleNext} /></TabsContent>
        <TabsContent value="2"><Question i={2} onNext={handleNext} /></TabsContent>
        <TabsContent value="3"><Question i={3} onNext={handleNext} /></TabsContent>
        <TabsContent value="4"><Question i={4} onNext={handleNext} /></TabsContent>
        <TabsContent value="5"><Question i={5} onNext={handleNext} /></TabsContent>
      </Tabs>
    </div>
  );
};

export default App;
