import { DatePicker, DatePickerProps } from 'antd';
import { useActions } from '../hooks/actions';
import { Page } from '../hoc/Page';
import dayjs from 'dayjs';
import { useAppSelector } from '../hooks/redux';
import { dateAPIFormat, dateFormat, dateFullFormat } from '../utils';
import { ControlFilter } from '../components/Control/Filter';
import { ControlView, ControlViewProps } from '../components/Control/View';
import { ITask } from '../models';
import { TaskList } from '../components/Task/List';

const Home = () => {
	const { params, grid } = useAppSelector(state => state.home);
	const { setHomeParams, setHomeGrid } = useActions();

	const handleDateChange: DatePickerProps['onChange'] = (date) => {
		setHomeParams({ ...params, date: dayjs(date).format(dateAPIFormat) });
	};

	const handleViewChange: ControlViewProps['onViewChange'] = (grid) => {
		setHomeGrid(grid);
	};

	const tasks: ITask[] = [
		{
			id: 1,
			name: 'Какая-то задача 1',
			isDone: false,
			isFavourite: false,
			date: dayjs(params.date).format(dateAPIFormat),
		},
		{
			id: 2,
			name: 'Какая-то задача 2',
			isDone: false,
			isFavourite: false,
			date: dayjs(params.date).format(dateAPIFormat),
		},
	];

	return (
		<Page
			header={{
				title: dayjs(params.date).format(dateFullFormat).toUpperCase(),
				controls: [
					<ControlView grid={grid} onViewChange={handleViewChange}/>,
					<ControlFilter/>,
					'divider',
					<DatePicker
						value={dayjs(params.date)}
						allowClear={false}
						placement="bottomRight"
						onChange={handleDateChange}
						format={dateFormat}
					/>,
				],
			}}
		>
			<TaskList tasks={tasks}/>
		</Page>
	);
};

export default Home;