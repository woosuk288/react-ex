import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import { Box } from "@material-ui/core";

class column extends Component {
  render() {
    return (
      <Box
        m="8px"
        border="1px solid lightgrey"
        borderRadius="2px"
        width="320px"
        display="flex"
        flexDirection="column"
      >
        <Box p="8px">{this.props.column.title}</Box>
        <Droppable
          droppableId={this.props.column.id}
          // direction="horizontal"
          // type={this.props.column.id === 'column-3' ? 'done' : 'active'}
          // isDropDisabled={this.props.isDropDisabled}
        >
          {(provided, snapshot) => (
            <Box
              p="8px"
              display="flex"
              flexGrow="1"
              minHeight="100px"
              bgcolor={snapshot.isDraggingOver ? "skyblue" : "white"}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {/* {console.log(`isDraggingOver ${snapshot.isDraggingOver},${this.props.column.title}`)} */}
              {this.props.tasks.map((task, index) => (
                <Task
                  columnId={this.props.column.id}
                  dropId={this.props.dropId}
                  key={task.id}
                  task={task}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Box>
    );
  }
}

export default column;
