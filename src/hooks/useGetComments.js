import { useEffect, useState } from "react";
import { getComments } from "../helpers/GetComments";

export const useGetComments = () => {

    const [comments, setComments] = useState('');
    const [isLoading, setIsLoading] = useState( true );

    const getCommentsReq = async () => {
        const newComments = await getComments();
        setComments(newComments);
        setIsLoading(false);
    } 

    useEffect( ()=>{
        getCommentsReq();
    }, [])

    return {
        comments,
        isLoading,
    }

}