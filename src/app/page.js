import Image from "next/image";
import LandingPage from './landingPage/page'
import SignIn from "./signUp/page";
import SignUp from "./signUp/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LandingPage />
      {/* <SignIn /> */}
      {/* <SignUp /> */}
    </main>
  );
}
