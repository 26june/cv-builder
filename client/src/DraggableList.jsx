import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const DraggableItem = ({ id, index, moveItem, children }) => {
  const [, ref] = useDrag({
    type: "CV_ITEM",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "CV_ITEM",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return <div ref={(node) => ref(drop(node))}>{children}</div>;
};

function DraggableList({ items, moveItem, renderItem }) {
  return (
    <div>
      {items.map((item, index) => (
        <DraggableItem key={item} id={item} index={index} moveItem={moveItem}>
          {renderItem(item)}
        </DraggableItem>
      ))}
    </div>
  );
}

export default DraggableList;

// import React, { useState } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const DraggableItem = ({ id, index, moveItem, children }) => {
//   const [, ref] = useDrag({
//     type: "CV_ITEM",
//     item: { index },
//   });

//   const [, drop] = useDrop({
//     accept: "CV_ITEM",
//     hover: (draggedItem) => {
//       if (draggedItem.index !== index) {
//         moveItem(draggedItem.index, index);
//         draggedItem.index = index;
//       }
//     },
//   });

//   return <div ref={(node) => ref(drop(node))}>{children}</div>;
// };

// function DraggableList({ items, moveItem, renderItem }) {
//   return (
//     <div>
//       {items.map((item, index) => (
//         <DraggableItem
//           key={item._id}
//           id={item._id}
//           index={index}
//           moveItem={moveItem}
//         >
//           {renderItem(item)}
//         </DraggableItem>
//       ))}
//     </div>
//   );
// }

// export default DraggableList;
