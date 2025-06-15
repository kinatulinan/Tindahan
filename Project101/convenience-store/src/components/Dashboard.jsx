import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

import Sidebar from './Sidebar';
import NavigationBar from './NavigationBar';


export default function Dashboard() {
  const [productCount, setProductCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
  });

  useEffect(() => {
    fetchProductCount();
  }, []);

  async function fetchProductCount() {
    const { count, error } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true });
    if (!error) setProductCount(count);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, price, stock } = formData;

    if (!name || !price || !stock) {
      alert('Please fill in all fields');
      return;
    }

    const { error } = await supabase.from('products').insert([
      {
        name,
        price: parseFloat(price),
        stock: parseInt(stock),
      },
    ]);

    if (error) {
      console.error('Insert error:', error.message, error.details);
      alert('Failed to add product');
    } else {
      alert('Product added successfully!');
      setFormData({ name: '', price: '', stock: '' });
      fetchProductCount(); // update count
    }
  }

  return (
    <div>
        <div>
            <NavigationBar />
        </div>

        <div className="flex text-gray-800">
        <Sidebar />

      <main className="flex-1 bg-gray-100 p-8">
        <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>

        {/* Add Product Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6 space-y-4 w-full max-w-md">
          <h3 className="text-xl font-bold">Add New Product</h3>

          <input
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Stock"
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
            className="w-full border px-3 py-2 rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Add Product
          </button>
        </form>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-bold">Total Products</h3>
            <p className="text-2xl">{productCount}</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-bold">Sales</h3>
            <p className="text-2xl">₱5,300</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-bold">Users</h3>
            <p className="text-2xl">10</p>
          </div>
        </div>
      </main>
        </div>
    </div>
  );
}
