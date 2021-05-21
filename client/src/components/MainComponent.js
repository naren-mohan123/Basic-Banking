import React, {useEffect,useState} from "react"
import { useSelector } from "react-redux";
import Header from "./header";
import Home from "./HomeComponent";
import CreateUser from "./CreateUserComponent";
import User from "./UserComponent";
import Transaction from "./transHistroyComponent";
import PostDetail from "./postDetail";
import Transfer from "./transferComponent";
import { Switch, Route,Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsers } from "../Redux/ActionCreators";
import { getTransactions } from "../Redux/ActionCreators";
// import { Provider } from "react-redux";

const Main = () => {

  const dispatch = useDispatch();

  const [amount,setAmount] = useState(0);
  const [senderId,setSenderId] = useState(0);
  const [receiverId,setReceiverId] = useState(0);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getTransactions());
  }, []);

  const users = useSelector((state) => state.users);

  const detailWithId = ({match}) => {
    return(
      <PostDetail senderId = {senderId} userId = {match.params.postId} setSenderId = {setSenderId} setAmount = {setAmount}
        receiverId = {receiverId} setReceiverId = {setReceiverId} 
        />
    )
  }

    return (
          <div className="App">
              <Header />
              <Switch>
                  <Route path = "/home" component = {() => <Home />} />
                  <Route exact path="/create" component = {() => <CreateUser />} />
                  <Route exact path="/users" component = {() => <User senderId = {senderId} setSenderId = {setSenderId}/>}/>
                  <Route path="/users/:postId" component = {detailWithId}/>
                  <Route path="/transfer" component = {() => <Transfer senderId = {senderId} receiverId = { receiverId} amount = {amount} />}/>
                  <Route path = "/transaction" component = {() => <Transaction/>} /> 
                  <Redirect to="/home" />
              </Switch>
          </div>
    );
}

export default Main;
