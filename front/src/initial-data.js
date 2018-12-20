const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Explication" },
    "task-2": { id: "task-2", content: "Information" },
    "task-3": { id: "task-3", content: "Photo" },
    "task-4": { id: "task-4", content: "Evènement" },
    "task-5": { id: "task-5", content: "Casque VR" },
    "task-6": { id: "task-6", content: "Imprimente 3D" },
    "task-7": { id: "task-7", content: "Robot" },
    "task-8": { id: "task-8", content: "Tricoteur" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Detail",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "Fusion",
      taskIds: []
    },
    "column-3": {
      id: "column-3",
      title: "Outils",
      taskIds: ["task-5", "task-6", "task-7", "task-8"]
    }
  },
  columnOrder: ["column-1", "column-2", "column-3"]
};

export default initialData;
