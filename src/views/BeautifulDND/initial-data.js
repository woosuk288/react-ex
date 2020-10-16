const initialData  = {
  tasks: {
    'task-1' : { id: 'task-1', content: '1 Take out the garbage 1'},
    'task-2' : { id: 'task-2', content: '2 Take out the garbage 2'},
    'task-3' : { id: 'task-3', content: '3 Take out the garbage 3'},
    'task-4' : { id: 'task-4', content: '4 Take out the garbage 4'},
    'task-5' : { id: 'task-5', content: '5 Take out the garbage 5'},
    'task-6' : { id: 'task-6', content: '6 Take out the garbage 6'},
    'task-7' : { id: 'task-7', content: '7 Take out the garbage 7'},
    'task-8' : { id: 'task-8', content: '8 Take out the garbage 8'},
    'task-9' : { id: 'task-9', content: '9 Take out the garbage 9'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      // taskIds: ['task-1', 'task-2','task-3','task-4','task-5'],
      taskIds: ['task-1'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: ['task-2'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-3'],
    },
    'column-4': {
      id: 'column-4',
      title: 'Done4',
      taskIds: ['task-4'],
    },
    'column-5': {
      id: 'column-5',
      title: 'Done5',
      taskIds: ['task-5'],
    },
    'column-6': {
      id: 'column-6',
      title: 'Done6',
      taskIds: ['task-6'],
    },
    'column-7': {
      id: 'column-7',
      title: 'Done7',
      taskIds: ['task-7'],
    },
    'column-8': {
      id: 'column-8',
      title: 'Done8',
      taskIds: ['task-8'],
    },
    'column-9': {
      id: 'column-9',
      title: 'Done9',
      taskIds: ['task-9'],
    },



  },

  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6', 'column-7', 'column-8', 'column-9'],
};


export default initialData;