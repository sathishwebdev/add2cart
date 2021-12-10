import React, {useState} from 'react';
import './App.css';
import * as mui from '@mui/material'
import * as Icons from '@mui/icons-material'

const Button = mui.styled(mui.Button)(({ theme }) => ({
    color: theme.palette.getContrastText(mui.colors.purple[500]),
    backgroundColor: "#000000",
    margin: "3%",

    '&:hover': {
      backgroundColor: "#a5a5a5",
      color: "black",
      boxShadow: "0px 0px 15px 1px"
    },
  }));

var orders = []
 const datas=[]
  for(let i = 0; i <10; i++){
    datas.push({id: `itemNo-${i+1}`, name: `Item-${i+1}`})
  }
function App() {

  const [orderCount, setOrderCount] = useState(0)
  
 
  console.log(datas);
  return (
    <div className="App">
      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          margin:"2%",
          padding:'1%'
        }}
      >
        <h1>Add to Cart</h1>
          <mui.Badge
            badgeContent={orderCount}
            color="success"
          >
            <Icons.ShoppingCart
            size="large" />
          </mui.Badge>
      </div>
      
      <div className="App-header" >
        {datas.map((data, id)=>(<div key={id} className="card" >
         
          <div>
            <Icons.AddShoppingCartOutlined
            sx={{fontSize:"100px", color:"gray"}}
            />
          </div> 
          <div 
            style={{
              display:"flex",
              alignItems:"center",
              justifyContent:"space-between",
            }}
          >
            <div><h4>{data.name}</h4></div>
            <div>{OrderButton(orderCount, setOrderCount, data.id)}</div>
          </div>
        </div>))}
      </div>
    </div>
  );
}

export default App;

const OrderButton = (orderCount, setOrderCount, itemId)=>{
  const [status, setStatus] = useState(false)

  const makeOrder = () =>{
    let [item] = datas.filter(data=> data.id===itemId)
    orders.push(item)
    console.log(orders)
    setOrderCount(orderCount+1)
  }

  const removeOrder = () =>{
    orders = orders.filter(data=> data.id !== itemId)
    console.log(orders)
    setOrderCount(orderCount-1)
  }

  return <Button
    onClick={() => {
      !status? makeOrder() : removeOrder()
     setStatus(!status? true : false)
    }}
    >
     {status? "Remove " : " Add to Cart"}
    </Button>
}