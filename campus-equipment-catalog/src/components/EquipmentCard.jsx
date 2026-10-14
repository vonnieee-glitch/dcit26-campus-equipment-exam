import { Link } from "react-router-dom";

export default function EquipmentCard({ item }) {
  return (
    <article className="equipment-card">
      <div className="card-top">
        <span className="badge">{item.category}</span>
        <span className={`status ${item.available ? "available" : ""}`.trim()}>
          {item.available ? "Available" : "In use"}
        </span>
      </div>
      <h3>{item.name}</h3>
      <p className="muted">Location: {item.location}</p>
      <p className="muted">Condition: {item.condition}</p>
      <Link className="text-link" to={`/equipment/${item.id}`}>
        View details
      </Link>
    </article>
  );
}
