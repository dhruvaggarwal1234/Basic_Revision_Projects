import { useCallback, useEffect, useState } from "react"

export default function useFeatures(){

    const [loading , setLoading] = useState(true);
    const [activeFeatureId , setActiveFeatureId] = useState(null);
    
    
    useEffect(()=>{
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    },[])



    const toggleFeature =useCallback((id) => {

        setActiveFeatureId(prev=>
            prev===id? null :id
        );
    },[]);

       


    return {

        loading,
        activeFeatureId,
        toggleFeature
    }
}