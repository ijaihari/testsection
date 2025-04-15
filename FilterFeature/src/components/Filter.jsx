import { useDispatch, useSelector } from "react-redux";
import { deleteFilter } from "../store/FilterSlice";

function Filter() {
    const AddedFilter = ['Animals', 'Birds', 'Cats', 'Dogs'];
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.filterSlice.value)
    return (
        <div className="filter-section">
            <h1>Filter Feature {count}</h1>
            <section className="filter-container" >
                <button onClick={() => dispatch(deleteFilter())} className="btn-filter add-filter"><i class="add-i fa-solid fa-plus"></i>Add Filter</button>
                {
                    AddedFilter.map((add, index) => <button key={index} className="btn-filter">{add}<button className="del-filter"><i class="del-i fa-solid fa-xmark"></i></button></button>)
                }

            </section>
        </div>
    );
}

export default Filter;