import { useState } from "react";


function FeatureCard({ title, image ,description }) {
    const [showDesc ,setShowDesc]  = useState(false);
 
    return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
       { showDesc&&(<p className="text-gray-600">
          {description}
        </p>)}

        <button 
        className ={ 
            `mt-4 text-amber-50 font-medium w-30 h-10 rounded-2xl ${showDesc ?' bg-orange-600' :'bg-gray-600'}`
        }
        onClick={()=>{setShowDesc(prev=>!prev)}}
        >
        {showDesc ? "Hide Details" : "Show Details"}
        
     </button>
      </div>
    </div>
  );
}

export default FeatureCard;