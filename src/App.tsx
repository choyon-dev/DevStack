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
  return (
    <>
      <Header />
      <Hero />
      <Stack techPromise={techPromise} />
      <Footer />
    </>
  );
}

export default App;
