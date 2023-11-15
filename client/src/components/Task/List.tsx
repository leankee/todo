import { FC } from 'react';
import { ITask } from '../../models';
import { Flex } from 'antd';
import { Task } from './index';
import styles from '../../styles/components/task.module.scss'

export interface TaskListProps {
	tasks: ITask[];
}

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
	return (
		<Flex className={styles.list} gap={8} vertical>
			{tasks.map(task => <Task key={task.id} {...task} />)}
		</Flex>
	);
};