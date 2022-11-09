export const getTaskInfo = async() => {

    const resp = await fetch(`https://api-clickup.herokuapp.com/api/tasks/a`);
    const { data } = await resp.json();

    const task = {
        taskId: data.id ,
        taskName: data.name,
        taskDescription: data.description,
        taskStatus: data.status.status,
        subTasks: data.subtasks.map( subtask => {
            return {
                subTaskId: subtask.id,
                subTaskDescription: subtask.name,
                subTaskStatus: subtask.status.status
            }
        })
    }

    return task
}