import { Tasks } from "../types/Task";
import { uniqueId } from "../helpers/unique-id";

export class TasksService{
  private KEY = "tasks"

  get(): Tasks{
    let tasks: Tasks|null = null

    try{
      tasks = JSON.parse(localStorage.getItem(this.KEY) || "[]")
    } catch(error){
      console.error(error)
    }

    if(!Array.isArray(tasks) || !tasks?.length) this.set(tasks = [])

    return tasks
  }

  add(title: string){
    this.set([...this.get(), { title, done: false, id: uniqueId() }])
  }

  remove(id: string){
    this.set(this.get().filter(task => task.id !== id))
  }

  done(id: string){
    this.set(this.get().map(task => task.id === id ? { ...task, done: true } : task))
  }

  private set(tasks: Tasks){
    localStorage.setItem(this.KEY, JSON.stringify(tasks))
  }
}
