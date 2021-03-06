import { useState, useEffect } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!
  console.log("what are these?", numLikes, set_numLikes);
  const reset = () => {
    set_numLikes(initial_numLikes);
  };

  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
  };
  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);

  return (
    <div>
      This post has <b>{numLikes}</b> likes!
      <button onClick={() => increment()}>Like</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
