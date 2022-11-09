import {TaskInfo, SubTasks, Comments} from './components'

function App() {

  return (
    <>
      <section className='main-container'>
        <div className='task-container'>
          <TaskInfo />
          <hr color='#B5AC80' />
          <SubTasks/>
        </div>
        <div className='comments-container'>
          <Comments/>
        </div>
      </section>
    </>
  )
  
}

export default App
