import { useEffect, useState } from 'react'
import './App.css'
import type { Task } from './types/tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [nowLoading, setNowLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await fetch('http://localhost:3000/tasks')

        if (!response.ok) {
          throw new Error(`タスクの取得に失敗しました（HTTP ${response.status}）`)
        }

        const fetchedTasks: Task[] = await response.json()
        setTasks(fetchedTasks)
      } catch (error: unknown) {
        setErrorMessage(
          error instanceof Error
            ? error.message
            : 'タスクの取得中に不明なエラーが発生しました',
        )
      } finally {
        setNowLoading(false)
      }
    }
    void loadTasks()
  }, [])

  return (
    <div>
      {nowLoading ? (
        '読み込み中'
      ) : errorMessage ? (
        <p role="alert">タスクを取得できませんでした：{errorMessage}</p>
      ) : tasks.length === 0 ? (
        'タスクはありません'
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              title:{task.title},status:{task.status},id:{task.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
