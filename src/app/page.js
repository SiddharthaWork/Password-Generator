import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import State from "@/components/State";
import Astate from "@/components/AddDeleteState";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero number={10}/>
      <Astate/>
      <State />
    </div>
  );
}
