export function formatStatus(tasks) {
  return {
    ...tasks,
    status: tasks.status === 1 ? "completada" : "pendiente",
  };
}
