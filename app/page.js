"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [text, settext] = useState("");
  const router = useRouter();

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
    settext("");
  }
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[120vh] md:p-0 grid md:grid-cols-2">
        <div className="flex flex-col justify-center p-5 md:p-0 items-start gap-4 ml-[5vw]">
          <p className="text-[#d2e823] font-bold text-5xl md:text-7xl">Everything you are. In one, simple link in bio.</p>
          <p className="text-white font-bold text-xl">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="flex w-full md:flex-row flex-col gap-4 py-10">
            <input value={text} onChange={(e)=>settext(e.target.value)} className="bg-white focus:outline-green-900 font-bold text-[#757575] rounded-lg text-lg py-4 w-[80%] md:w-[50%] px-2" type="text" placeholder="Your UserName" />
            <button onClick={() => createTree()} className="bg-[#e9c0e9] w-fit px-6 text-[#1e2330] rounded-full font-bold py-4">Claim Your LinkTree</button>
          </div>
        </div>
        <div className="flex justify-center items-center mx-[10vw] h-fit sm:h-full">
          <img src="/home.png" />
        </div>
      </section>
      <section className="bg-red min-h-[100vh]">
      </section>
    </main >
  );
}
