import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setSearchTerm } from '../store/SearchSlice';
import { addFilter } from "../store/FilterSlice";

function DropDown() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.search.term);
    const { Components, Tags, Metrics } = useSelector((state) => state.filter);

    const [activeTab, setActiveTab] = useState("Components");

    const tabMap = {
        Components,
        Tags,
        Metrics
    };

    const dataList = tabMap[activeTab] || [];

    // Filter results based on search term
    const filteredSearch = dataList.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="dropdown-container">
            {/* Search Input */}
            <section className="dropdown">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                    placeholder={`Search ${activeTab.toLowerCase()}`}
                    autoFocus
                    className="search-input"
                />
 
                {/* Tabs */}
                <div className="tabs">
                    {["Components", "Tags", "Metrics"].map(tab => (
                        <button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? "active-tab" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Dropdown Menu */}
                <section className="menu">
                    {filteredSearch.length > 0 ? (
                        filteredSearch.map((item, index) => (
                            <button
                                onClick={() => dispatch(addFilter(item))}
                                key={index}
                                className="menu-items"
                            >
                                {item}
                            </button>
                        ))
                    ) : (
                        <p className="no-results">No results found</p>
                    )}
                </section>
            </section>
        </div>
    );
}

export default DropDown;
