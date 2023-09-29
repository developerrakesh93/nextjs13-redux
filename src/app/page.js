import Image from "next/image";
import AddProducts from "./components/AddProducts";
import DisplayProducts from "./components/DisplayProducts";

export default function Home() {
  return (
    <main>
      <AddProducts></AddProducts>
      <DisplayProducts></DisplayProducts>
    </main>
  );
}
