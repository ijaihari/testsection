import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../store/FilterSlice";

function MenuList({ activeTab, searchTerm }) {
    const dispatch = useDispatch();
    const { Components, Tags, Metrics } = useSelector((state) => state.filter);

    const tabMap = {
        Components,
        Tags,
        Metrics
    };

    const data = tabMap[activeTab] || [];

    const isComponentTab = activeTab === "Components";

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleBack = () => {
        setSelectedComponent(null);
    };

    const handleComponentClick = (component) => {
        setSelectedComponent(component);
    };

    const renderMainList = () => {
        if (isComponentTab) {
            // Render component.name list
            const filtered = data.filter(component =>
                component.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            return filtered.length > 0 ? (
                filtered.map((component, index) => (
                    <button
                        key={index}
                        onClick={() => handleComponentClick(component)}
                        className="menu-items"
                    >
                        {component.name}
                    </button>
                ))
            ) : (
                <p className="no-results">No results found</p>
            );
        } else {
            // Render plain strings for Tags / Metrics
            const filtered = data.filter(item =>
                item.toLowerCase().includes(searchTerm.toLowerCase())
            );

            return filtered.length > 0 ? (
                filtered.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => dispatch(addFilter(item))}
                        className="menu-items"
                    >
                        {item}
                    </button>
                ))
            ) : (
                <p className="no-results">No results found</p>
            );
        }
    };

    const renderSubList = () => {
        const filteredOptions = selectedComponent.options.filter(option =>
            option.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <>
                <button onClick={handleBack} className="menu-back-button">
                    <i class="fa-solid fa-arrow-left"></i> Back
                </button>
                {filteredOptions.length > 0 ? (
                    filteredOptions.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => dispatch(addFilter(option))}
                            className="menu-items"
                        >
                            {option}
                        </button>
                    ))
                ) : (
                    <p className="no-results">No options found</p>
                )}
            </>
        );
    };

    return (
        <div className="menu">
            {isComponentTab && selectedComponent ? renderSubList() : renderMainList()}
        </div>
    );
}

export default MenuList;
