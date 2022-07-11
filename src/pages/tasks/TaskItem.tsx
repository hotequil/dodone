import { TaskItemProps } from "../../shared/types/Task";
import PropTypes from "prop-types";
import { Button } from "../../components/button/Button";
import styles from "./TaskItem.module.css";

export const TaskItem = ({ task, onDelete, onDone }: TaskItemProps) =>
  <li className={`${styles.item} ${task.done ? styles.done : ''}`}>
    <span className={styles.title}>{task.title}</span>

    {
      !task.done &&
      <Button className={styles.button}
              onClick={onDone.bind(null, task.id)}
              aria-label={`Task ${task.title} done`}>
        <img src="./done.png" alt="Done icon"/>
      </Button>
    }

    <Button className={styles.button}
            onClick={onDelete.bind(null, task.id)}
            aria-label={`Delete task ${task.title}`}>
      <img src="./delete.png" alt="Delete icon"/>
    </Button>
  </li>

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
}
