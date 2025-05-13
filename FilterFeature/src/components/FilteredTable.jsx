import { useSelector } from "react-redux";

function FilteredTable() {
    const { mockData, AddedFilter } = useSelector(state => state.filter);

    // Create a mapping from component names to selected values
    const filterMap = {};
    AddedFilter.forEach(({ componentName, value }) => {
        filterMap[componentName] = value;
    });

    // Filter logic
    const filteredData = AddedFilter.length === 0
        ? mockData // No filter, show everything
        : mockData.filter(item =>
            Object.entries(filterMap).every(([key, val]) => {
                // Ensure item matches all selected filters
                return item[key] === val;
            })
        );

    return (
        <div className="table-container">
            <h2 className="table-title">Filtered Data</h2>
            {filteredData.length > 0 ? (
                <table className="data-table">
                    <thead>
                        <tr>
                            {Object.keys(filteredData[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {Object.values(row).map((value, colIndex) => (
                                    <td key={colIndex}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No matching data found.</p>
            )}
        </div>
    );
}

export default FilteredTable;
