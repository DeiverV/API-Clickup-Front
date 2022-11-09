import { useGetComments } from '../hooks/useGetComments';
import { CommentItem } from './CommentItem';

export const Comments = () => {

    const { comments, isLoading } = useGetComments();
    const commentsList = Array.from(comments)

    return (
        <>
            <div className='comments-div'>
                <h4>Comments</h4>
                {isLoading && <h3>Loading...</h3>} 
                {
                    commentsList ?.map( (comment) => (
                        <CommentItem 
                            key={comment.id} 
                            initials={comment.authorInitials} 
                            author={comment.author}
                            message={comment.message}
                        />
                        
                    ))
                }
                
            </div>
        </>
    )
}
