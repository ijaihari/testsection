import { useDispatch, useSelector } from "react-redux";
import { deleteFilter } from "../store/FilterSlice";

function Filter() {
    const AddedFilter = useSelector((state) => state.filterSlice.AddedFilter);
    const dispatch = useDispatch();
    return (
        <div className="filter-section">
            <h1>Filter Feature </h1>
            <section className="filter-container" >
                <button className="btn-filter add-filter"><i class="add-i fa-solid fa-plus"></i>Add Filter</button>
                {
                    AddedFilter.map((add, index) => <button  key={index} className="btn-filter">{add}<button onClick={() => dispatch(deleteFilter(add))} className="del-filter"><i class="del-i fa-solid fa-xmark"></i></button></button>)
                }

            </section>
        </div>
    );
}

export default Filter;