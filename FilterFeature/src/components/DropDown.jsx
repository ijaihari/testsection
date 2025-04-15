import { useDispatch } from "react-redux";
import { toogleDropDown } from "../store/FilterSlice";

function DropDown() {
    const dispatch = useDispatch();
    return (
        <div>
            <section className="dropdown">
                <input type="text" name="" id="" placeholder="Select the category" />
                <section className="menu">
                    <button onClick={()=>{console.log(object)}} className="menu-items">Animals</button>
                    <button className="menu-items">Animals</button>
                    <button className="menu-items">Animals</button>
                    <button className="menu-items">Animals</button>
                    <button className="menu-items">Animals</button>
                    <button onClick={()=> dispatch(toogleDropDown())} className="menu-items">Close</button>
                </section>
            </section>
        </div>
    );
}

export default DropDown;