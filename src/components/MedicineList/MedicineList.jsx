import React from "react";

const medicines = [
  {
    name: "Paracetamol",
    cure: "Fever, Pain Relief",
    price: 25,
    company: "Cipla",
  },
  {
    name: "Amoxicillin",
    cure: "Bacterial Infections",
    price: 120,
    company: "Sun Pharma",
  },
  {
    name: "Cetirizine",
    cure: "Allergy Relief",
    price: 45,
    company: "Dr. Reddy's",
  },
  {
    name: "Metformin",
    cure: "Type 2 Diabetes",
    price: 80,
    company: "Glenmark",
  },
  {
    name: "Ibuprofen",
    cure: "Pain, Inflammation",
    price: 30,
    company: "Zydus",
  },
  {
    name: "Omeprazole",
    cure: "Acidity, Ulcers",
    price: 60,
    company: "Torrent Pharma",
  },
];

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center",
    padding: "2rem",
  },
  card: {
    background: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    padding: "1.25rem",
    minWidth: "220px",
    maxWidth: "260px",
    flex: "1 1 220px",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  },
  cardHover: {
    transform: "translateY(-4px) scale(1.03)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.13)",
  },
  name: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    marginBottom: "0.5rem",
    color: "#2a3b4c",
  },
  cure: {
    fontSize: "0.98rem",
    marginBottom: "0.5rem",
    color: "#4a6fa5",
  },
  price: {
    fontWeight: "500",
    color: "#388e3c",
    marginBottom: "0.5rem",
  },
  company: {
    fontSize: "0.95rem",
    color: "#757575",
  },
};

function MedicineCard({ medicine }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={styles.name}>{medicine.name}</div>
      <div style={styles.cure}>Cure: {medicine.cure}</div>
      <div style={styles.price}>Price: ₹{medicine.price}</div>
      <div style={styles.company}>Company: {medicine.company}</div>
    </div>
  );
}

const MedicineList = () => (
  <div style={styles.container}>
    {medicines.map((med, idx) => (
      <MedicineCard key={idx} medicine={med} />
    ))}
  </div>
);

export default MedicineList;
