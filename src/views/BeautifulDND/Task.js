import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Box } from "@material-ui/core";

class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Box
            p="8px"
            border="1px solid lightgrey"
            borderRadius="10px"
            width="100%"
            bgcolor={snapshot.isDragging ? "lightgreen" : "white"}
            // display={this.props.columnId === this.props.dropId ? "none" : "black"}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {/* Handle */}
            {/* <Box width="20px" height="20px" bgcolor="orange" borderRadius="4px" mr="4px" /> */}

            {this.props.task.content}
          </Box>
        )}
      </Draggable>
    );
  }
}

export default Task;
