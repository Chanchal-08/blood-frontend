import React, { useEffect, useState } from "react";
import axios from "axios";

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/donors");
        setDonors(response.data);
      } catch (error) {
        console.error("Error fetching donors", error);
      }
    };

    fetchDonors();
  }, []);

  return (
    <div>
      <h2>List of Donors</h2>
      <ul>
        {donors.map((donor) => (
          <li key={donor._id}>
            <strong>{donor.name}</strong> - {donor.bloodGroup} - {donor.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonorList;
