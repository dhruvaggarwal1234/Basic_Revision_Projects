
function FeatureCard({ title, image, description, isOpen, onToggle }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {isOpen && (
          <p className="text-gray-600">{description}</p>
        )}

        <button
          className={`mt-4 text-white px-4 py-2 rounded 
            ${isOpen ? "bg-orange-600" : "bg-gray-600"}`}
          onClick={onToggle}
        >
          {isOpen ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </div>
  );
}


export default FeatureCard;