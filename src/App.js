import React from "react";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth"
const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
}

function App() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* NavBar */}
        <NavBar />
        {/* Chat Component */}
      </section>
    </div>
  );
}

export default App;
