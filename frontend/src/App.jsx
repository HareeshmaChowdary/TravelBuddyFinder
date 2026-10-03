import { useState } from 'react';

const buddies = [
  { id: 1, name: "Arjun", age: 24, location: "Munnar", interests: "Trekking", bio: "Tea lover, trekking expert in Munnar hills", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400" },
  { id: 2, name: "Priya", age: 22, location: "Goa", interests: "Beach", bio: "Beach vibe, loves sunset at Baga", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400" },
  { id: 3, name: "Rahul", age: 26, location: "Wayanad", interests: "Wildlife", bio: "Wildlife photographer, Wayanad explorer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400" },
  { id: 4, name: "Sneha", age: 23, location: "Coorg", interests: "Coffee", bio: "Coffee plantation guide in Coorg", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
  { id: 5, name: "Vikram", age: 25, location: "Ooty", interests: "Mountains", bio: "Toy train lover, Ooty local guide", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
  { id: 6, name: "Anjali", age: 24, location: "Hampi", interests: "History", bio: "History buff, Hampi ruins expert", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" },
];

function App() {
  const [search, setSearch] = useState("");
  const filtered = buddies.filter(b => b.location.toLowerCase().includes(search.toLowerCase()));
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>🧳 Travel Buddy Finder - 6 Places</h1>
      <input type="text" placeholder="Search Munnar, Goa..." value={search} onChange={(e)=>setSearch(e.target.value)} style={{ width: '100%', padding: '12px', margin: '20px 0', borderRadius: '10px', border: '1px solid #ccc' }} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {filtered.map(buddy => (
          <div key={buddy.id} style={{ background: 'white', borderRadius: '15px', padding: '15px', width: '280px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            <img src={buddy.image} alt={buddy.name} style={{ width: '100%', height: '180px', borderRadius: '10px', objectFit: 'cover' }} />
            <h3>{buddy.name}, {buddy.age}</h3>
            <p>📍 {buddy.location}</p>
            <p>❤️ {buddy.interests}</p>
            <p>{buddy.bio}</p>
            <button style={{ width: '100%', padding: '10px', background: '#3498db', color: 'white', border: 'none', borderRadius: '8px' }}>Connect</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;