import React, { Component } from "react";
// import "@atlaskit/css-reset";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initial-data";
import Column from "./Column";

// import * as serviceWorker from './serviceWorker';

class BeautifulDND extends Component {
  state = initialData;

  onDragStart = (start) => {
    console.log("start", start);
    const { source, draggableId } = start;
    // document.body.style.color = 'orange';
    // document.body.style.transition = 'background-color 0.2s ease';

    // const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);

    // this.setState({
    //   homeIndex,
    // })

    const startColumn = source.droppableId;
    this.setState({
      startColumn,
    });
  };

  onDragUpdate = (update) => {
    console.log("update", update);
    const { destination, source } = update;
    // const opacity = destination
    // ? destination.index / Object.keys(this.state.tasks).length : 0;

    // document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity}`;

    // if (destination.droppableId === source.droppableId &&
    //   destination.index === source.index) {
    //   console.log('same');
    //   return;
    // }

    if (destination) {
      console.log("yes");
      const start = this.state.columns[source.droppableId];
      const finish = this.state.columns[destination.droppableId];
      const dropId = destination.droppableId;

      if (start === finish) {
        return;
      }

      this.setState({
        dropId,
      });
      // const changeTaskId = destination.
      // startTaskIds.splice(destination.index, 1);
      // const newStart = {
      //   ...start,
      //   taskIds: startTaskIds,
      // }
    } else {
      console.log("no");
      const dropId = "";
      this.setState({
        dropId,
      });
    }
  };

  onDragEnd = (result) => {
    // document.body.style.color = 'inherit';
    // document.body.style.backgroundColor = 'inherit';

    console.log("end", result);
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const column = this.state.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    const finishTaskIds = Array.from(finish.taskIds);
    // startTaskIds.splice(source.index, 0,);
    const newStart = {
      ...start,
      taskIds: finishTaskIds,
    };

    // const finishTaskIds = Array.from(finish.taskIds);
    // finishTaskIds.splice(destination.index, 1, draggableId);
    const newFinish = {
      ...finish,
      taskIds: startTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },

      dropId: "",
    };

    this.setState(newState);
  };

  handleTempView = (isDraggingOver) => {
    if (isDraggingOver) {
      // change
    } else {
      // change back
    }
  };

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <div className="flex flex-wrap">
          {this.state.columnOrder.map((columnId, index) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);

            // const isDropDisabled = index < this.state.homeIndex;

            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
                dropId={this.state.dropId}
                // isDropDisabled={isDropDisabled}
              />
            );
          })}
        </div>
      </DragDropContext>
    );
  }
}

export default BeautifulDND;
