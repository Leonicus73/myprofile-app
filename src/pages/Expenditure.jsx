import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid"; // Import UUID generator

function Expenditure() {
  const [items, setItems] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);
  const [product, setProduct] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/expenditures")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  // Function to fetch data manually
  const loadData = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/expenditures");
    if (!response.ok) throw new Error("Failed to fetch");

    const data = await response.json();
    setItems(data);
    setDeletedItems([]);
  } catch (err) {
    console.error("Load failed:", err);
    alert("Failed to load data from backend");
  }
};

  // Add item function
  const addItem = () => {
    if (product.trim() && cost.trim()) {
      // const newItem = { id: uuidv4(), name: product, price: parseFloat(cost) }; // Generate UUID
      const newItem = {name: product, price: parseFloat(cost) };
      setItems([...items, newItem]);
      setProduct("");
      setCost("");
    }
  };

  // Save item function
  const saveItems = async () => {
    const filteredItems = items.filter(item => !deletedItems.includes(item.id));
    
    // Save remaining items
    for (const item of filteredItems) {
      await fetch("http://localhost:8080/api/expenditures", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
      });
    }
  
    // Delete removed items from backend
    for (const id of deletedItems) {
      await fetch(`http://localhost:8080/api/expenditures/${id}`, {
        method: "DELETE"
      });
    }
  
    alert("Items saved!");
    setDeletedItems([]);
  };


  // Delete item function
 const deleteItem = (itemId) => {
    setDeletedItems([...deletedItems, itemId]); // Track deleted item IDs
    setItems(items.filter(item => item.id !== itemId));
  };

  // Calculate total expenditure
  const totalExpenditure = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-lg mx-auto bg-blue-400 shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-700">💳 Expenditure Tracker/Year</h2>

      {/* Input Fields */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter Product Name"
        />
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter Cost"
        />
        <button onClick={addItem} className="p-2 bg-blue-500 text-white rounded-lg">
          Add
        </button>
      </div>

      {/* Expenditure List */}
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.id} className="p-2 bg-gray-300 text-black shadow-md rounded-lg flex justify-between items-center">
            <span>{item.name} - <strong>${item.price.toFixed(2)}</strong></span>
            <button onClick={() => deleteItem(item.id)} className="p-1 bg-red-500 text-white rounded-md">
              ❌
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-2">
        <button onClick={saveItems} className="p-2 bg-green-500 text-white rounded-lg">Save to Database</button>
        <button onClick={loadData} className="p-2 bg-purple-500 text-white rounded-lg">Load Data</button>
      </div>

      {/* Total Expenditure */}
      <div className="mt-4 p-4 bg-green-500 text-black rounded-lg text-lg font-bold">
        Total: ${totalExpenditure.toFixed(2)}
      </div>

      {/* Home Button */}
      <div className="mt-6">
        <Link to="/Profile" className="p-2 bg-blue-500 text-white rounded-lg">
          🔙 Back to Profile
        </Link>
      </div>
    </div>
  );
}

export default Expenditure;