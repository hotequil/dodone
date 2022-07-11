export interface Task{
  id: string
  title: string
  done: boolean
}

export type Tasks = Task[]

export interface TaskItemProps{
  task: Task,
  onDelete: Function,
  onDone: Function,
}
