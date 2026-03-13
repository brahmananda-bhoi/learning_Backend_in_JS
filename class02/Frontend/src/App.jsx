// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import axios from 'axios'

// function App() {
//   const [jokes, setJokes] = useState([]);
//   useEffect(()=>{
//     axios.get('/api/jokes')
//     .then((response)=>{
//       setJokes()
//     })
//     .catch((error)=>{
//       console.log(error);
//     })
//   },[])
//   return (
//     <>
//       <h1>Hello World!</h1>
//       <p>JOKES: {jokes.length}</p>

//       {
//         jokes.map((joke, index)=>(
//           <div key={joke.id}>
//             <h3>
//               {joke.title}
//             </h3>
//             <p>
//               {joke.content}
//             </p>
//           </div>
//         ))
//       }
//     </>
//   )
// }

// export default App











import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);        // good – start with empty array
  const [loading, setLoading] = useState(true);   // optional but recommended
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('/api/jokes')
      .then((response) => {
        // ──────────────── very important ────────────────
        setJokes(response.data);           // ← pass the actual data!
        // ───────────────────────────────────────────────
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error fetching jokes:', err);
        setError('Failed to load jokes');
        setLoading(false);
      });
  }, []);

  // Optional: nice loading & error states
  if (loading) {
    return <div>Loading jokes...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <>
      <h1>Hello World!</h1>
      <p>Jokes count: {jokes.length}</p>

      {jokes.length === 0 ? (
        <p>No jokes found 😢</p>
      ) : (
        jokes.map((joke, index) => (
          <div key={joke.id || index}>    {/* use joke.id if it exists, fallback to index */}
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
            <hr style={{ margin: '1.5rem 0' }} />
          </div>
        ))
      )}
    </>
  );
}

export default App;