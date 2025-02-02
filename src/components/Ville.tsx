import { useState } from "react";
import Alert from "./Alert";
import VilleDetail from "./VilleDetail";

interface VilleProps {
  elements: string[];
  titre: string;
}

function Ville({ elements, titre }: VilleProps) {
  const [villeSelectionnee, setVilleSelectionne] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const elementSelectionne = (ville: string) => {
    setVilleSelectionne(ville);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">{titre}</h1>
      <ul className="list-group">
        {elements.map((item, index) => (
          <li
            key={item}
            onClick={() => elementSelectionne(item)}
            className={
              item === villeSelectionnee
                ? "list-group-item active"
                : "list-group-item"
            }
            style={{ cursor: "pointer" }}
          >
            {item}
          </li>
        ))}
      </ul>
      {showAlert && (
        <Alert
          message={`Vous avez sélectionné ${villeSelectionnee}`}
          onClose={() => setShowAlert(false)}
        />
      )}
      {villeSelectionnee && <VilleDetail ville={villeSelectionnee} />}
    </div>
  );
}

export default Ville;