import React, { useEffect } from "react";
import SingleLorem from "../SingleLorem/SingleLorem";



const LoremList = ({ lorem }) => {
    useEffect(()=>{}, [lorem])
	return <SingleLorem lorem={lorem} />;
};

export default LoremList;
