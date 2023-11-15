import { FC, useState } from 'react';
import { ITask } from '../../models';
import { Button, Checkbox, CheckboxProps, Flex, Space } from 'antd';
import styles from '../../styles/components/task.module.scss';
import { BadgeCalendar } from '../Badge/Calendar';
import dayjs from 'dayjs';
import { dateAPIFormat } from '../../utils';
import { RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../hoc/Router';

export interface TaskProps extends ITask {

}

export const Task: FC<TaskProps> = (props) => {
	const [isDone, setIsDone] = useState(props.isDone);
	const [isFavourite, setIsFavourite] = useState(props.isFavourite);
	const navigate = useNavigate();

	const handleIsDoneChange: CheckboxProps['onChange'] = (event) => {
		event.stopPropagation();
		setIsDone(event.target.checked);
	};

	const handleRedirect = () => {
		navigate(`${RouteNames.TASKS}/${props.id}`);
	};

	return (
		<Flex className={styles.main} vertical>
			<Flex className={styles.container} align="center" justify="space-between">
				<Space size="middle">
					<Checkbox
						checked={isDone}
						onChange={handleIsDoneChange}
					/>
					<span className={styles.container__name}>{props.name}</span>
				</Space>
				<Space>
					{(props.date != dayjs(Date.now()).format(dateAPIFormat)) && (
						<BadgeCalendar date={props.date} status="success"/>
					)}
					<Button
						type="text"
						size="small"
						icon={<RightOutlined/>}
						onClick={handleRedirect}
					/>
				</Space>
			</Flex>
		</Flex>
	);
};