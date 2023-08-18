
import styled from 'styled-components'


const allProducts = [{
  id: 1,
  name: "EvilDead",
  img: "./Evil_Dead_The_Game_Cover_Art.jpg",
  cost: "RS50",
},
{
  id: 2,
  name: "GTA - 6",
  img: "./Grand_Theft_Auto_V.png",
  cost: "RS20",
},
{
  id: 3,
  name: "Hitman",
  img: "./HitmanAbsolutionPackArt.jpg",
  cost: "RS10",
},
{
  id: 4,
  name: "Mario90s",
  img: "./MARIO.jpg",
  cost: "RS40",
},
{
  id: 5,
  name: "Nfs" ,
  img: "./Need_for_Speed_Most_Wanted_Box_Art.jpg",
  cost: "RS50",
}
]


const Products = () => {
  return (
    <div><h1>list</h1>
      {allProducts.map((product)=>{
        return (
         <div className="dimensions">
          <img  src={product.img} alt={product.name} className="one"/>
          <h3>{product.name}</h3>
          <h4>{product.cost}</h4>
          <p><button>Buy Now</button>Add to Cart<input type='checkbox'/></p>
          </div>
        )
      })}

    </div>
  )
};

export default Products
