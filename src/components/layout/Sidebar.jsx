"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";




const links = [

  {
    name: "Feed",
    href: "/",
  },

  {
    name: "Communities",
    href: "/communities",
  },

  {
    name: "Profile",
    href: "/profile",
  },

  {
    name: "Create Post",
    href: "/create-post",
  },

  {
    name: "Create Community",
    href: "/create-community",
  },
];




export default function Sidebar() {

  const pathname = usePathname();

  const { isSignedIn } = useUser();




  return (
    <aside className="w-65 h-screen border-r bg-[#fafafa] fixed left-0 top-0 p-6 flex flex-col">

      {/* LOGO */}

      <Link href="/">

        <h1 className="text-4xl font-black tracking-tight bg-linear-to-r from-teal-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
          NEZUS
        </h1>

      </Link>






      {/* NAVIGATION */}

      <div className="mt-14 flex flex-col gap-2">

        {links.map((link) => (

          <Link
            key={link.href}
            href={link.href}
            className={`text-gray-500 px-5 py-4 rounded-xl text-lg transition ${
              pathname === link.href
                ? "bg-black text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {link.name}
          </Link>

        ))}

      </div>






      {/* AUTH SECTION */}

      <div className="mt-auto pt-10">

        {!isSignedIn ? (

          <div className="flex flex-col gap-3 text-gray-600">

            <SignInButton >

              <button className="w-full bg-black text-white py-3 rounded-2xl font-semibold hover:scale-[1.02] transition">

                Login

              </button>

            </SignInButton>






            <SignUpButton >

              <button className="w-full border py-3 rounded-2xl font-semibold hover:bg-gray-100 transition text-gray-600">

                Sign Up

              </button>

            </SignUpButton>

          </div>

        ) : (

          <div className="flex items-center gap-4 border rounded-2xl p-4 bg-white">

            <UserButton />

            <div>

              <p className="font-semibold">
                Logged In
              </p>

              <p className="text-sm text-gray-500">
                Nezus Account
              </p>

            </div>

          </div>

        )}

      </div>

    </aside>
  );
}