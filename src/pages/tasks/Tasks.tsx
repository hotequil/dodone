import styles from "./Tasks.module.css"
import { Section } from "../../components/section/Section";
import { TasksService } from "../../shared/services/Tasks";
import { FormEvent, useEffect, useState } from "react";
import { NotFound } from "../../components/not-found/NotFound";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { Tasks } from "../../shared/types/Task";
import { TaskItem } from "./TaskItem"

const service = new TasksService()

export const TasksPage = () => {
  const [list, setList] = useState<Tasks>([])
  const [title, setTitle] = useState<string>("")

  const get = () => setList(service.get())

  const doneTask = (id: string) => {
    service.done(id)

    get()
  }

  const deleteTask = (id: string) => {
    service.remove(id)

    get()
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    service.add(title as string)

    setTitle("")
    get()
  }

  useEffect(() => {
    get()
  }, [])

  return (
    <div className={styles.tasks}>
      <Section title="New task">
        <form onSubmit={submit} className={styles.form}>
          <Input name="title"
                 required={true}
                 label="Set title"
                 placeholder="Digit the title for task"
                 set={setTitle}
                 value={title}
                 maxlength={100} />
          <div className={styles.actionsForm}>
            <Button type="submit" disabled={!title?.length}>Create task</Button>
          </div>
        </form>
      </Section>
      <Section title="Task list">
        {
          !list.length ?
          <NotFound>There are no tasks yet</NotFound> :
          <ul className={styles.list}>
            {
              list.map(task =>
                <TaskItem key={task.id} task={task} onDone={doneTask} onDelete={deleteTask} />
              )
            }
          </ul>
        }
      </Section>
    </div>
  )
}
