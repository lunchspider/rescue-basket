import { museo } from "@/font";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className=" text-center papa bg-[url('/bg.png')] bg-center bg-cover bg-repeat-y ">
      <Navbar />
      <div className="h-[60vh] items-center flex justify-center relative ">
        <div className={`${museo.className} space-y-5 relative`}>
          <h1 className="text-6xl ">ZERO WASTE</h1>
          <div className="border-2 border-green-500"></div>
          <h1 className="text-6xl ">A LOT OF MONEY</h1>
          <button className="bg-green-500 border-2 border-green-500 p-2 mt-10 text-white">
            Start Contributing
          </button>
          <Image
            src={"/tick.svg"}
            height={400}
            width={200}
            alt="trash"
            className="absolute -bottom-28 -right-28 scale-[0.4]"
          />
        </div>
        <div className=""></div>
        <Image
          src={"/hash.svg"}
          height={400}
          width={200}
          alt="trash"
          className="absolute top-20 left-20 scale-75"
        />
        <Image
          src={"/pant.svg"}
          height={400}
          width={200}
          alt="trash"
          className="absolute top-32 right-20 scale-75"
        />
      </div>
      <div className="flex justify-center">
        <div className="flex space-x-10">
          <Image src={"/trash1.svg"} height={400} width={200} alt="trash" />
          <Image src={"/trash2.svg"} height={400} width={200} alt="trash" />
        </div>
      </div>
    </main>
  );
}
