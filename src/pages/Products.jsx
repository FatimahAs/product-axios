import { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition duration-300 border-[#0c522a] border-1">
            <img src={product.image} alt={product.title} className="h-40 mx-auto mb-4 object-contain " />
            
            <h2 className="text-md font-semibold text-gray-700">{product.title}</h2>
             <hr className='border-[#0c4b52] border-dashed'/>
            <p className="text-gray-500 text-sm mt-1 mb-2">{product.category}</p>
            <p className="text-[#4d532c] font-bold text-xl">${product.price}</p>
             <hr className='border-[#0c4b52] border-dashed'/>
            <p className="text-gray-600 text-sm mt-2 line-clamp-3">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
