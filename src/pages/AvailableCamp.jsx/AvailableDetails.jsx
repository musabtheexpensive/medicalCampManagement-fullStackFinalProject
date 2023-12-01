import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AvailableDetails = () => {
    const details = useLoaderData();
    const {
      _id,
      campName,
      image,
      campFees,
      scheduledDateTime,
      venueLocation,
      specializedServices,
      healthcareProfessionals,
      targetAudience,
    } = details;
    console.log(campName);
    return (
        <div>
           <h1>what{campName}</h1>
        </div>
    );
};

export default AvailableDetails;