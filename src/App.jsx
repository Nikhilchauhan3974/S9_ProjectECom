import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Clean ARMS & Ammunition Dataset (Optimized Images)
    const armsData = [
      {
        id: 1,
        title: "AK-47 Assault Rifle",
        price: 1200,
        rating: 4.8,
        thumbnail: "https://www.bbc.com/staticarchive/6c5b364efb8a146723db9fdc7d2df1bc0bd85b10"
      },
      {
        id: 2,
        title: "M4 Carbine Rifle",
        price: 1500,
        rating: 4.7,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfS4vkRBJ1jgO62eLHCspCcTVu3DXCvu5LIQ&s"
      },
      {
        id: 3,
        title: "Sniper Rifle (M24)",
        price: 2500,
        rating: 4.9,
        thumbnail: "https://2.bp.blogspot.com/_femhrxbNtS0/TQSpxzmIQ7I/AAAAAAAAI2g/z7TGnxBTMkU/s1600/XM2010_03.jpg"
      },
      {
        id: 4,
        title: "9mm Ammunition Box",
        price: 60,
        rating: 4.5,
        thumbnail: "https://i.etsystatic.com/48203913/r/il/ab4347/5777670602/il_fullxfull.5777670602_n7sc.jpg"
      },
      {
        id: 5,
        title: "Shotgun (Remington 870)",
        price: 900,
        rating: 4.7,
        thumbnail: "https://5.imimg.com/data5/SELLER/Default/2025/6/518111419/YU/EA/KR/247472474/authentic-original-remington-870-short-barrel-shotgun-12-gauge-500x500.jpg"
      },
      {
        id: 6,
        title: "5.56mm NATO Rounds",
        price: 120,
        rating: 4.4,
        thumbnail: "https://lh4.googleusercontent.com/tt9REfgLXwAhjKS-HYheaoFkrP_1q9N4ieagF-CwF6N8oAys5eIu6D36w8XSCH8LLVwJWAGrtQtWztW27PVBIxQlLGBdJhKn715PezuDIjQG8uDlPcA8Nu8L8m9rezfM4SBkLxCZGOag_q7pBwK7cQ"
      },
      {
        id: 7,
        title: "Desert Eagle",
        price: 1800,
        rating: 4.8,
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/b/b1/DesertEagle_50AE.jpg"
      },
      {
        id: 8,
        title: "Tactical Combat Knife",
        price: 150,
        rating: 4.3,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRshrBaPNu2UT8jkDm1z1ujg1atawJwlSoA&s"
      }
    ];

    setProducts(armsData);
  }, []);

  return (
    <div className="app">
      <h1>ARMS & Ammunition Management System</h1>

      <div className="table-wrapper">
        <table className="lux-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Weapon Name</th>
              <th>Price ($)</th>
              <th>Rating</th>
              <th>Thumbnail</th>
              <th>Status</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.title}</td>
                <td>${prod.price}</td>
                <td>{prod.rating} ⭐</td>

                <td>
                  <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    width="80"
                    height="60"
                    style={{ cursor: "pointer", borderRadius: "8px", objectFit: "cover" }}
                    onClick={() => window.open(prod.thumbnail, "_blank")}
                  />
                </td>

                <td
                  style={{
                    color: prod.price > 1000 ? "green" : "orange",
                    fontWeight: "bold"
                  }}
                >
                  {prod.price > 1000 ? "High Power" : "Standard"}
                </td>

                <td>
                  {prod.price > 1500 ? "Military Grade" : "Civilian Grade"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App