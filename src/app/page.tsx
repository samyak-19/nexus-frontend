import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">Reddit Clone</h1>

      <SignedOut>
        <div className="flex gap-4">
          <SignInButton mode="modal">
            <button className="bg-black text-white px-5 py-2 rounded-md">
              Sign In
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="bg-blue-500 text-white px-5 py-2 rounded-md">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex flex-col items-center gap-4">
          <UserButton afterSignOutUrl="/" />

          <p className="text-lg font-medium">
            You are logged in
          </p>
        </div>
      </SignedIn>
    </main>
  );
}