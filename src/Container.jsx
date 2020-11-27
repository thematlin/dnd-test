import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Dustbin } from "./Dustbin";
import { Box } from "./Box";

const Overlay = ({ children }) => (
  <div
    style={{
      width: "500px",
      height: "500px",
      position: "absolute",
      zIndex: 2
    }}
  >
    {children}
  </div>
);
export const Container = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Dustbin>
          <Box name="foobar" />
        </Dustbin>
      </DndProvider>
      <iframe
        style={{ width: "500px", height: "500px" }}
        src="https://example.com"
      />
    </>
  );
};
