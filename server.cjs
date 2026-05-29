const [searchQuery, setSearchQuery] = useState("");

// Make sure your clear handler explicitly targets the input state variable!
const handleClearInput = () => {
  setSearchQuery(""); // This clears the string instantly from the input box
};

return (
  <div className="search-container">
    <input 
      type="text" 
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)} 
      placeholder="Query telemetry network..."
    />
    
    {/* Ensure your clear action triggers the handler function on click */}
    <button onClick={handleClearInput} className="clear-btn">
      ✕
    </button>
  </div>
);