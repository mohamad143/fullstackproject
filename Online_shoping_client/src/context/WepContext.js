import { createContext, useContext, useEffect, useReducer, useState } from "react";
import ShoppingCart from "../components/store/ShoppingCart";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
  loading: true,
  error: "",
  post: {},
  };
  
  const reducer = (state, action) => {
  switch (action.type) {
  case "FETCH_SUCCESS":
  return {
  loading: false,
  error:"",
  post: action.payload,
  };
  case "FETCH_ERROR":
  return {
  loading: false,
  error: "Something went wrong",
  post: {},
  };
  default:return state;
  
  

  }
}
  



const WepContext = createContext({});
const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];
  const initialUser = localStorage.getItem("useremail")
  ? JSON.parse(localStorage.getItem("useremail"))
  : "";


const WepProvider = ({ children }) => {
  const [state, dispatch] = useReducer (reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [nameItem, setNameItem] = useState("");
  const [urlItem, seturl] = useState("");
  const [companyItem, setcompanyItem] = useState("");
  const [color, setcolor] = useState("");
  const [barcode, setbarcode] = useState("");
  const [productionYear, setproductionYear] = useState("");
  const [priceItem, setprice] = useState("");
  const [details,setdetails]=useState("")
  const [orderItems, setorderItems] = useState("");
  const [orderLocation, setorderLocation] = useState("");
  const [tPriceItem, setTpriceItem] = useState("");
  const [orderDate, setorderDate] = useState("");
  const [CategoryItem, setCategory] = useState("");
  const [password, setpassworduser] = useState("");
  const [email, setnemail] = useState("");
  const [rank, setrank] = useState("");
  const [StoreitemData, setStoreitemData] = useState("");
  const [InformationsData,setInInformationsData]=useState("")
  const [OrdersData, setOrdersData] = useState("");
  const [UserData, setUserData] = useState("");
  const [url, setUrllocal] = useState('https://localhost:44325/');
  const [information,setinfortion]=useState("")
  const [updateItem,setUpdate]=useState("")
  const [itemForUpdate,setItemForUpdate]=useState("")
  

  const navigate = useNavigate();
 
  
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    getUserdata()
    getInformtionItems()
  }, [cartItems]);
  
 

  const x = () => {
    return (Array.isArray(cartItems) ? cartItems.map((cartItem) => 
    { return Array.isArray(StoreitemData) ? StoreitemData.find((i) => i.id === cartItem.id).name_Item + " * " + cartItem.quantity+" barcode: " +StoreitemData.find((i) => i.id === cartItem.id).item_Barcode: [] }) : [])
  }

  const cartQuantity = Array.isArray(cartItems) ? (cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0)) : 0;

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  const getItemQuantity = (id) => {
    return Array.isArray(cartItems) ? cartItems.find((item) => item.id === id)?.quantity || 0 : 0;
  };
  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };
  const NameItem = (name) => {
    setNameItem(name)
  }
  const urlitem = (url) => {
    seturl(url)
  }
  const priceitem = (price) => {
    setprice(price)
  }
  const Category = (price) => {
    setCategory(price)
  }
  const CompanyItem=(company)=>{
    setcompanyItem(company)
  }
  const Barcode=(barcode)=>{
    setbarcode(barcode)

  }
  const Color=(color)=>{
    setcolor(color)
  }
  const ProductionYear=(year)=>{
    setproductionYear(year)
  }
  const Details=(details)=>{
    setdetails(details)
  }

  const  Add = () => {
    
      const storeItem = {
        ID: 0,
        Name_Item: nameItem,
        Price_Item: parseFloat(priceItem),
        Img_Url: urlItem.toString(),
        Category: CategoryItem,
        Item_Barcode:barcode
      }
      axios.post(url + 'api/StoreItems/', storeItem).then(x=>toast.success(x.data)).catch((error)=>toast.error(error))
      
 
  };
  const Edit=()=>{
    const storeItem = {
      ID: 0,
      Name_Item: nameItem,
      Price_Item: parseFloat(priceItem),
      Img_Url: urlItem.toString(),
      Category: CategoryItem,
      Item_Barcode:barcode
    }
    axios.put(url + 'api/StoreItems/', storeItem).then(x=>toast.success(x.data)).catch((error)=>toast.error(error))


  }
 
  

  const AddInformations = () => {

      const storeItemInformations = {
        ID: 0,
        Company :companyItem,
        Barcode:barcode,
        Price:parseFloat(priceItem),
        Color:color,
        Production_year:productionYear,
        Details:details,
        Name:nameItem

      }
      axios.post(url + 'api/DeviceInformations/', storeItemInformations).then(x=>toast.success(x.data)).catch((error)=>toast.error(error))
   
  };
  const EditInformations=()=>{
    const storeItemInformations = {
      ID: 0,
      Company :companyItem,
      Barcode:barcode,
      Price:parseFloat(priceItem),
      Color:color,
      Production_year:productionYear,
      Details:details,
      Name:nameItem

    }
    axios.put(url + 'api/DeviceInformations/', storeItemInformations).then(x=>toast.success(x.data)).catch((error)=>toast.error(error))

  }
 
 
  const passwodruser = (x) => {
    setpassworduser(x)

  }
  const emailuser = (y) => {
    setnemail(y)
  }
  const rankuser = (z) => {
    setrank(z)
  }
  const Adddatauser = () => {
    

    var userModel = {
      ID: 0,
      User_Name: null,
      User_Email: email,
      User_Pass: password,
      User_Status: "true",
      User_Rank: rank
    }
    axios.post(url + 'api/UserModels/', userModel).then(x=>(toast.success(x.data), setTimeout(()=>{window.location.reload()}, 2000))).catch((error)=>toast.error(error),navigate("/store"))
    
    
   
    
    
   


  }
  const getUserdata = () => {
    axios.get(url + 'api/UserModels').then((response) => {
      const AllUser = response.data; setUserData(AllUser)
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    }).catch((error)=>{
      dispatch({ type: "FETCH_ERROR" });
    }
    )

  }
  const getStoreIteams = () => {
    axios.get(url + 'api/StoreItems').then((response) => {
      const AllItems = response.data; setStoreitemData(AllItems)
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    }).catch((error)=>{
      dispatch({ type: "FETCH_ERROR" });
    }
    )

  }
  const getInformtionItems=()=>{
    axios.get(url + 'api/DeviceInformations').then((response) => {
      const AllInformations = response.data; setInInformationsData(AllInformations)
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    }).catch((error)=>{
      dispatch({ type: "FETCH_ERROR" });
    }

    )
  }
  const informationforitem=(x)=>{
    setinfortion(x)
   


  }
  const UpdateItem=(x)=>{
    setUpdate(x)
   


  }
  
  
  const getOrders = () => {
    axios.get(url + 'api/OrderModels').then((x) => {
     
      const Orders = x.data;setOrdersData(Orders)
    })
    

  }
  const DeleteUser = (ID) => {
    if (window.confirm("Are you sure?") == true && ID) {
      axios.delete(url + 'api/UserModels/' + ID);
     
    }else if(!ID){
      toast.error("your email or password are no rong")
    }else{
      alert("you need to login agine")
    }
    
    
    

  };
  const DeleteOrder = (ID) => {

    if (window.confirm("Are you sure?")  == true) {
      axios.delete(url + 'api/OrderModels/' + ID);
    }
   
  };
  const removeFromStore = (ID) => {
    if (window.confirm("Are you sure?") == true) {
      axios.delete(url + 'api/StoreItems/' + ID)
      const barcode = Array.isArray(StoreitemData) ? StoreitemData.find((i) => i.id === ID).item_Barcode.toString() : []
      const id=Array.isArray(InformationsData) ? InformationsData.find((i) => i.barcode === barcode)?.id : []
      if(id){
        axios.delete(url + 'api/DeviceInformations/'+id)
      }
      localStorage.removeItem("shopping-cart")
      
    }
   


  };
  const BuyItems =() => {

    const date = new Date()
    setDate(date.toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' }))
    setItems(x())
    {
      Array.isArray(cartItems) ? cartItems.reduce((total, cartItem) => {
        const item = Array.isArray(StoreitemData) ? StoreitemData.find((i) => i.id === cartItem.id) : [];
        setTpriceItem(total + (item?.price_Item || 0) * cartItem.quantity)
        return total + (item?.price_Item || 0) * cartItem.quantity;
      }, 0) : console.error()
    }
    if(orderLocation==""){
      setLocation()

    }



if (orderItems!="") {
  const userid = user()
  const useremail = userEmail()
  const orderModel = Object.create(null);

  orderModel.ID = 0;
  orderModel.User_ID = userid
  orderModel.Order_Items = orderItems.toString()
  orderModel.Order_Price = parseFloat(tPriceItem)
  orderModel.Order_Date = new Date(orderDate)
  orderModel.Order_Location = orderLocation
  orderModel.Order_Status = "false"
  orderModel.Order_Email = useremail.toString()
 

  axios.post(url + 'api/OrderModels/', orderModel)

  localStorage.removeItem("shopping-cart")
  alert("Purchase completed successfully")
  window.location.reload()
 

}


navigate("/store")

  }

  const setItems = (x) => {
    setorderItems(x)
  }
  const setTprice = (x) => {

    setTpriceItem(x)

  }
  const setDate = (x) => {
    setorderDate(x)

  }
  const setLocation = (position) => {
    const location=prompt("Please enter your location")
    setorderLocation(location)
  }
  const user = () => {
    return Array.isArray(UserData) ? UserData.find((x) => (x.user_Status === "true"))?.id : []
  }
  const userEmail = () => {
    return Array.isArray(UserData) ? UserData.find((x) => (x.user_Email === initialUser))?.user_Email : []
  }
  
  const IsArrived=(id)=>{

    axios.put(url+'api/OrderModels/'+id);
   
  }
  const ItemForUpdate=(item1)=>{
    setItemForUpdate(item1)
  }






  return (
    <WepContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartQuantity,
        cartItems,
        NameItem,
        urlitem,
        priceitem,
        Category,
        Add,
        passwodruser,
        emailuser,
        rankuser,
        Adddatauser,
        DeleteUser,
        removeFromStore,
        BuyItems,
        url,
        StoreitemData,
        UserData,
        setItems,
        setTprice,
        setDate,
        setLocation,
        OrdersData,
        DeleteOrder,
        IsArrived,
        userEmail,
        CompanyItem,
        Barcode,
        Color,
        ProductionYear,
        Details,
        AddInformations,
        InformationsData,
        informationforitem,
        information,
        getOrders,
        getStoreIteams,
        getUserdata,
        getInformtionItems,
        UpdateItem,
        updateItem,
        ItemForUpdate,
        itemForUpdate,
        Edit,
        EditInformations,
        state
       


      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
      <ToastContainer position="top-center" closeButton={true} /> 
    </WepContext.Provider>
  );
};

export default WepProvider;
export const useWepContext = () => {
  return useContext(WepContext);
};
