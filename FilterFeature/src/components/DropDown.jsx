import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from '../store/SearchSlice';
import { addFilter } from "../store/FilterSlice";

function DropDown() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.search.term);
    const FilterTags = useSelector((state) => state.filter.FilterTags);

    const filteredSearch = FilterTags.filter(user =>
        user.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <section className="dropdown">
                <input type="text" name="" id="" value={searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))} placeholder="Search the category" autoFocus />
                <section className="menu">
                    {
                        filteredSearch.length > 0 ?
                            (filteredSearch.map((item, index) =>
                                (<button onClick={() => dispatch(addFilter(item))} key={index} className="menu-items">{item}</button>))) :
                            (<p>No results found</p>)
                    }

                </section>
            </section>
        </div>
    );
}

export default DropDown;