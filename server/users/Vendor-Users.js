import { useEffect } from 'react';

export const VendorUsers = () => {

    const getAllVendorsData = async() => {
        try{
            const reponse = await fetch("http://localhost:5000/api/getAllVendors",{
            method : "GET",
            headers : {
                // Authorization:
            },
        }); 
    } catch (error) {
        console.log(error);
    } 
};

    useEffect(() => {
        getAllVendorsData();
    }, []);

    return <h1>admin users panel </h1>;
};


