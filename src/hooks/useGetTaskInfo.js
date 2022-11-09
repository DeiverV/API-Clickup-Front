import { useEffect, useState } from "react";
import { getTaskInfo } from "../helpers/GetTaskInfo";


export const useGetTaskInfo = () => {

    const [taskInfo, setTaskInfo] = useState('');
    const [isLoading, setIsLoading] = useState( true );

    const getTask = async () => {
        const newTaskInfo = await getTaskInfo();
        setTaskInfo(newTaskInfo);
        setIsLoading(false);
    } 

    useEffect( ()=>{
        getTask();
    }, [])

    return {
        taskInfo,
        isLoading,
    }

}