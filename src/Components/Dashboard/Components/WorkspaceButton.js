import Dropdown from "react-bootstrap/Dropdown";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";

function WorkspaceButton() {
  const [drop, setDrop] = useState(false);
  return (
    <>
      <Button onClick={() => setDrop(!drop)} style={{ width: "100%" }} variant="contained" color="secondary">
        Ajax
      </Button>
      {drop && (
        <div
          style={{
            width: "100%",
            position: "position",
          }}
        >
          <div>Hero</div>
          <div>Hero</div>
          <div>Hero</div>
        </div>
      )}
    </>
  );
}

export default WorkspaceButton;
