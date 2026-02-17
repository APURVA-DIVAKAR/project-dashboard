const STATUS_OPTIONS = ["Active", "On Hold", "Completed"];

function Filters({
  searchTerm,
  setSearchTerm,
  selectedStatuses,
  setSelectedStatuses
}) {
  const handleStatusChange = (status) => {
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses(
        selectedStatuses.filter((s) => s !== status)
      );
    } else {
      setSelectedStatuses([...selectedStatuses, status]);
    }
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by project or client..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="status-filters">
        {STATUS_OPTIONS.map((status) => (
          <label key={status}>
            <input
              type="checkbox"
              checked={selectedStatuses.includes(status)}
              onChange={() => handleStatusChange(status)}
            />
            {status}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filters;
