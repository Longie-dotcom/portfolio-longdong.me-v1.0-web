// Assets
import "./ExperimentPage.css";

// Components
import ExperimentCard from "../../component/ExperimentCard/ExperimentCard";
import TEXT from "../../assets/TEXT";

function ExperimentPage({ action }) {
  const experimentCount = 3;
  const startX = vwToPx(10);
  const startY = vhToPx(10);
  const offsetX = vwToPx(20);
  const offsetY = vhToPx(0);

  const experiments = Array.from({ length: experimentCount }, (_, index) => ({
    id: index,
    x: startX + index * offsetX,
    y: startY + index * offsetY,
  }));

  return (
    <div id="ExperimentPage">
        <div className="title">
            {TEXT.experiment_description}
        </div>

      {experiments.map((exp) => (
        <ExperimentCard
          key={exp.id}
          defaultX={exp.x}
          defaultY={exp.y}
          action={action}
        />
      ))}
    </div>
  );
}

function vwToPx(vw) {
  return (vw / 100) * window.innerWidth;
}

function vhToPx(vh) {
  return (vh / 100) * window.innerHeight;
}

export default ExperimentPage;
