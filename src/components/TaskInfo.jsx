import { useGetTaskInfo } from "../hooks/useGetTaskInfo"

export const TaskInfo = () => {

  const { taskInfo, isLoading } = useGetTaskInfo();

  return (
    <div className="taskInfo-container parr-white" >
      <h3>Task ID: {taskInfo.taskId}</h3>

      {isLoading && <h3>Loading...</h3>} 

      <div>
        <h1>{taskInfo.taskName}</h1>
        <p>{taskInfo.taskDescription}</p>
      </div>

    </div>
  )

}
