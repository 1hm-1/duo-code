import { useState } from 'react'
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to DuoCode!</h1>
      <header>
        <Show when="signed-out">
          <SignInButton mode='modal'>Please Sign in</SignInButton>
          <SignUpButton mode='modal'/>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>

      
    </>
  );
}

export default App
