import { FC, useState } from 'react';
import { ITask } from '../../models';
import { Button, Checkbox, CheckboxProps, Flex, Space } from 'antd';
import styles from '../../styles/components/task.module.scss';
import { BadgeCalendar } from '../Badge/Calendar';
import dayjs from 'dayjs';
import { dateAPIFormat } from '../../utils';
import { RightOutlined, StarFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../hoc/Router';
import { BadgeTime } from '../Badge/Time';

export interface TaskProps extends ITask {
	currentDate?: string;
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
				<div className={styles.container__title}>
					<Checkbox
						checked={isDone}
						onChange={handleIsDoneChange}
					/>
					<span className={styles.container__name}>
						{props.name}
					</span>
					{isFavourite && <StarFilled className={styles.container__favourite}/>}
				</div>
				<Space className={styles.container__badges}>
					{((!props.currentDate) || dayjs(props.date).format(dateAPIFormat) !== dayjs(props.currentDate).format(dateAPIFormat)) && (
						<BadgeCalendar date={props.date} status="success"/>
					)}
					<BadgeTime date={props.date} status={isDone ? 'success' : 'warning'}/>
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