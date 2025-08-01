// Assets
import "./Workspace.css";

// Components
import Email from "../Email/Email";

function Workspace({ action }) {
  const emailCount = 1;
  const startX = vwToPx(15);
  const startY = vhToPx(20);
  const offsetX = vwToPx(0);
  const offsetY = vhToPx(0);

  const emails = Array.from({ length: emailCount }, (_, index) => ({
    id: index,
    x: startX + index * offsetX,
    y: startY + index * offsetY,
  }));

  return (
    <div id="Workspace">
        {emails.map((email) => (
            <Email action={action} key={email.id} defaultX={email.x} defaultY={email.y} />
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

export default Workspace;