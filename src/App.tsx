import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import { Header } from "./components/nav/Header";
import Stack from "./components/stack/Stack";
import type { Technology } from "./types/Types";

const techFetch = async (): Promise<Technology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const techPromise = techFetch();

function App() {
  const [selectedStacks, setSelectedStacks] = useState<Technology[]>([]);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = selectedStacks.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStacks([...selectedStacks, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (tech: Technology) => {
    setSelectedStacks(selectedStacks.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack!`);
  };

  const handleRemoveAll = () => {
    if (selectedStacks.length === 0) return;
    setSelectedStacks([]);
    toast.error("Removed all technologies from your stack!");
  };

  return (
    <>
      <Header
        selectedStacks={selectedStacks}
        onRemoveFromStack={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />
      <Hero />
      <Stack
        techPromise={techPromise}
        selectedStacks={selectedStacks}
        onAddToStack={handleAddToStack}
        onRemoveFromStack={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}

export default App;
