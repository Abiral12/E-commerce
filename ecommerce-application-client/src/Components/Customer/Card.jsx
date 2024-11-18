// components/Card.jsx
 

const Card = ({ image, productName, description, price,quantity }) => {
  // const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <img src={image} alt={productName} className="w-full h-40 object-cover mb-4" />
      <h3 className="text-xl font-semibold">{productName}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-lg font-bold mt-2">{price}</p>
      <div className="flex items-center mt-4">
        <label className="mr-2">Qty:</label>
        {/* <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          className="w-12 border border-gray-300 p-1"
        /> */}
        <label className="mr-2" >{quantity}</label>

      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition" onClick={"/cart"}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
