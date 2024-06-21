
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = {
  todo: ['Task 1', 'Task 2'],
  inProgress: ['Task 3'],
  done: ['Task 4'],
};

const Kanban = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const [removed] = tasks[source.droppableId].splice(source.index, 1);
    tasks[destination.droppableId].splice(destination.index, 0, removed);
    setTasks({ ...tasks });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h1>Kanban Board</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {Object.keys(tasks).map((key) => (
          <Droppable droppableId={key} key={key}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  margin: '0 10px',
                  padding: '10px',
                  width: '30%',
                  minHeight: '300px',
                  backgroundColor: '#f4f4f4',
                }}
              >
                <h2>{key}</h2>
                {tasks[key].map((task, index) => (
                  <Draggable key={task} draggableId={task} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          margin: '0 0 8px 0',
                          padding: '10px',
                          backgroundColor: 'white',
                          ...provided.draggableProps.style,
                        }}
                      >
                        {task}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;
