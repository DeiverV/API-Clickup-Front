import { useGetTaskInfo } from "../hooks/useGetTaskInfo"
import { SubTaskItem } from "./SubTaskItem";

export const SubTasks = () => {
                        
    const { taskInfo, isLoading } = useGetTaskInfo();
    return (
        <div className="subTasks-container parr-white">
            <h4>Checklist To - Do</h4>
            <hr />

            {isLoading && <h3>Loading...</h3>} 

            {
                taskInfo.subTasks?.map( (subtask) => (

                    <SubTaskItem 
                        key={subtask.subTaskId} 
                        status={subtask.subTaskStatus} 
                        description={subtask.subTaskDescription}
                    />
                    
                ))
            }
            
        </div>
    )
}
