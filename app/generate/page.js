"use client";
import React, { useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { Spinner } from '@/components/Spinner';

const Page = () => {
  const input = "bg-white focus:outline-pink-900 font-bold text-[#757575] rounded-full text-lg py-4 w-[80%] md:w-[50%] px-4 mb-4";
  const steps = "font-semibold text-xl";
  const inputBox = "mx-4 w-full flex items-center justify-center";
  const btn = "bg-slate-900 hover:scale-110 transition-all duration-150 ease-in-out active:scale-90 text-white w-fit px-6 rounded-full font-bold py-4";

  const [link, setlink] = useState("")
  const [linktext, setlinktext] = useState("");
  const [handle, setHandle] = useState("");
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);

  const showtoast = () => {
    return {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    }
  };

  const addLink = async (text, link, handle) => {

    setLoading(true);

    if (!text || !link || !handle) {
      toast.warn("Please fill all fields", {
        ...showtoast()
      });
      setLoading(false);
      return;
    }

    let req = await fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "handle": handle,
        "link": link,
        "linktext": text
      }),
    });
    let res = await req.json();
    if (res.success) {
      toast.success(res.message, {
        ...showtoast()
      });
    } else {
      toast.error(res.message, {
        ...showtoast()
      });
    }
    setlink("");
    setLoading(false);
    setlinktext("");
    return res;
  }
  return (
    <>
      <ToastContainer />

      <div className='bg-[#254f1a] sm:min-h-screen sm:grid sm:grid-cols-2'>
        <div className="col1 bg-purple-300 min-h-[80vh] sm:h-[110vh] flex gap-8 sm:pt-20 flex-col justify-center items-center">
          <h1 className='text-4xl font-bold'>Create Your Link Tree</h1>
          <div className='flex w-full flex-col items-center gap-2'>
            <h2 className={steps}>Step 1 - Claim Your Handle</h2>
            <div className={inputBox}>
              <input
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                tabIndex={1}
                type="text"
                placeholder="Choose a Handle"
                className={input}
              />
            </div>
            <h2 className={steps}>Step 2 - Add Links</h2>
            <div className={`flex-col ${inputBox}`}>
              <input
                value={linktext}
                tabIndex={2}
                onChange={(e) => setlinktext(e.target.value)}
                type="text"
                placeholder="Enter your link text"
                className={input}
              />
              <input
                tabIndex={3}
                value={link}
                onChange={(e) => setlink(e.target.value)}
                type="text"
                placeholder="Enter your link URL"
                className={`${input}`}
              />
            </div>
            <button onClick={() => addLink(linktext, link, handle)} className={btn}>Add Link</button>
            <h2 className={steps}>Step 3 - Add Picture</h2>
            <input
              onChange={(e) => setPic(e.target.value)}
              value={pic}
              tabIndex={4}
              type="text"
              placeholder="Enter your Image URL"
              className={input}
            />
            <button disabled={loading} className={btn}>{loading ? (
              <div className='flex items-center justify-center gap-4'>
                <Spinner />
                Loading...
              </div>
            ) : (
              "Create Your Link Tree"
            )}</button>
          </div>
        </div>
        <div className="col2 hidden w-full sm:h-[110vh] bg-[#e9c0e9] sm:flex justify-center">
          <img className='h-full object-contain' src="/generate.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Page;
