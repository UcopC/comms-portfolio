import { useState } from 'react';
import Projects from './Projects';

interface HereProps {
  name: string;
  text: string;
  filter: string;
}
function Hero(props: HereProps) {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h1>{props.name}</h1>
      <p> {props.text}</p>
      <p>Currently Viewing: {props.filter}</p>
      <button onClick={() => setLikes(likes + 1)}>Likes: {likes}</button>
      <button onClick={() => setLikes(0)}>Reset</button>
    </div>
  );
}

export default Hero;
