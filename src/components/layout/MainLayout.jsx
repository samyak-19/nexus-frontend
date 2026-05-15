"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";

import RightSidebar from "./RightSidebar";

import MobileSidebar from "./MobileSidebar";




export default function MainLayout({

  children,
}) {

  const [open, setOpen] = useState(false);




  return (
    <div className="min-h-screen bg-[#f3f4f6]">

      {/* DESKTOP SIDEBAR */}

      <div className="hidden lg:block">

        <Sidebar />

      </div>






      {/* MOBILE SIDEBAR */}

      <MobileSidebar
        open={open}
        setOpen={setOpen}
      />






      {/* RIGHT SIDEBAR */}

      <div className="hidden xl:block">

        <RightSidebar />

      </div>






      {/* MAIN CONTENT */}

      <main className="lg:ml-[260px] xl:mr-[320px] min-h-screen">

        {/* MOBILE TOPBAR */}

        <div className="lg:hidden sticky top-0 z-40 bg-white border-b px-5 py-4 flex items-center justify-between text-gray-600">

          <button
            onClick={() => setOpen(true)}
            className="text-3xl"
          >
            ☰
          </button>




          <h1 className="text-4xl font-black tracking-tight bg-linear-to-r from-teal-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            NEZUS
          </h1>

        </div>






        {/* PAGE CONTENT */}

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-6 lg:py-10">

          {children}

        </div>

      </main>

    </div>
  );
}