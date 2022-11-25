import Header from "./components/header/Header.jsx";
import BlockList from "./components/blockList/BlockList.jsx";
import { useEffect, useState } from 'react'

function App() {
  const [blocks, setBlocks] = useState([
    { id: 4, title: 'title', body: 'body' }
  ])

  const [rating, setRating] = useState([
    { id: 1, likes: 23, dislikes: 4 },
    { id: 2, likes: 23, dislikes: 4 },
    { id: 3, likes: 23, dislikes: 4 },
    { id: 4, likes: 23, dislikes: 4 }
  ])

  const removeBlock = ((block) =>
  (setBlocks(blocks.filter(b => b.id !== block.id)),
    setRating(rating.filter(r => r.id !== block.id)))
  )


  const addNewBlock = ((block) =>
  (setBlocks([...blocks, block]),
    setRating([...rating, { id: block.id, likes: 0, dislikes: 0 }]))
  )

  async function fetchBlocks() {
    const response = await fetch('https://localhost:44396/block')
    if (response.ok) {
      let getBlocks = await response.json()
      setBlocks([...blocks, ...getBlocks])
    }
    else {
      console.log(response.statusText)
    }
  }

  useEffect(() => {
    fetchBlocks()
  }, [])

  return (
    <div className="App">
      <Header />
      <BlockList blocks={blocks} remove={removeBlock} rating={rating} create={addNewBlock} />
    </div>

  );
}

export default App;
