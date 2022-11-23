import Header from "./components/header/Header.jsx";
import BlockList from "./components/blockList/BlockList.jsx";
import { useState } from 'react'

function App() {
  const [blocks, setBlocks] = useState([
    { id: 1, title: 'ReactExample1', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae assumenda, minus perferendis amet error cum similique libero quis recusandae, adipisci eum itaque nemo aspernatur nobis quo. Illum, eius ipsum unde omnis eos mollitia in! Quidem excepturi optio quos!' },
    { id: 2, title: 'ReactExample2', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae assumenda, minus perferendis amet error cum similique libero quis recusandae!' },
    { id: 3, title: 'ReactExample3', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae assumenda, minus perferendis amet error cum similique libero quis recusandae, adipisci eum itaque nemo aspernatur nobis quo. Illum, eius ipsum unde omnis eos mollitia in!' }
  ])

  const [rating, setRating] = useState([
    { id: 1, likes: 23, dislikes: 4 },
    { id: 2, likes: 12, dislikes: 2 },
    { id: 3, likes: 30, dislikes: 8 }
  ])

  const removeBlock = ((block) =>
  (setBlocks(blocks.filter(b => b.id !== block.id)),
    setRating(rating.filter(r => r.id !== block.id)))
  )

  return (
    <div className="App">
      <Header />
      <BlockList blocks={blocks} remove={removeBlock} rating={rating} />
    </div>

  );
}

export default App;
