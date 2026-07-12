import TabBar from "./components/TabBar";
import AddressBar from "./components/AddressBar";
import SidePanel from "./components/SidePanel";
import WebPage from "./components/WebPage";


export default function App(){


return (

<div className="app">


<TabBar/>


<AddressBar/>


<div className="layout">

<SidePanel/>

<WebPage/>

</div>


</div>

);

}