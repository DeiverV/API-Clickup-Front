
export const SubTaskItem = ({status, description}) => {
  return (
    <div className="subtask-item">
        <div className="subtask-separator-item">
            <figure></figure>
            <h5>{status}</h5>
        </div> 
        <p>{description}</p>
    </div>
  )
}
