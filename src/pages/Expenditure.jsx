import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API_BASE_URL from "../config/apiConfig";

function Expenditure() {
  const [items, setItems] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);
  const [product, setProduct] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/expenditures`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/expenditures`);
      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      setItems(data);
      setDeletedItems([]);
    } catch (err) {
      console.error("Load failed:", err);
      alert("Failed to load data from backend");
    }
  };

  const addItem = () => {
    if (product.trim() && cost.trim()) {
      const newItem = { name: product, price: parseFloat(cost) };
      setItems([...items, newItem]);
      setProduct("");
      setCost("");
    }
  };

  const saveItems = async () => {
    const filteredItems = items.filter((item) => !deletedItems.includes(item.id));

    for (const item of filteredItems) {
      await fetch(`${API_BASE_URL}/api/expenditures`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }

    for (const id of deletedItems) {
      await fetch(`${API_BASE_URL}/api/expenditures/${id}`, {
        method: "DELETE",
      });
    }

    alert("Items saved!");
    setDeletedItems([]);
  };

  const deleteItem = (itemId) => {
    setDeletedItems([...deletedItems, itemId]);
    setItems(items.filter((item) => item.id !== itemId));
  };

  const totalExpenditure = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 text-left">
      <h2 className="text-2xl font-bold text-blue-600">💳 Expenditure Tracker</h2>
      <p className="mt-2 text-gray-600">Track your yearly spending and manage expenses effectively.</p>

      {/* Input Fields */}
      <div className="mt-6 flex gap-2">
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="flex-1 p-2 border rounded-lg text-sm"
          placeholder="Enter Product Name"
        />
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="w-32 p-2 border rounded-lg text-sm"
          placeholder="Cost"
        />
        <button
          onClick={addItem}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 w-fit"
        >
          Add
        </button>
      </div>

      {/* Expenditure List */}
      <ul className="mt-6 space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="p-2 bg-gray-100 text-black shadow-sm rounded-lg flex justify-between items-center text-sm"
          >
            <span>
              {item.name} - <strong>${item.price.toFixed(2)}</strong>
            </span>
            <button
              onClick={() => deleteItem(item.id)}
              className="px-2 py-1 bg-red-500 text-white rounded-md text-xs hover:bg-red-600"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={saveItems}
          className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 w-fit"
        >
          Save to Database
        </button>
        <button
          onClick={loadData}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 w-fit"
        >
          Load Data
        </button>
      </div>

      {/* Total Expenditure */}
      <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-lg font-semibold">
        Total: ${totalExpenditure.toFixed(2)}
      </div>

      {/* Home Button */}
      <div className="mt-6">
        <Link
          to="/Profile"
          className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm hover:bg-gray-600 w-fit"
        >
          🔙 Back to Profile
        </Link>
      </div>
    </div>
  );
}

export default Expenditure;