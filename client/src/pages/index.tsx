import { DatePicker, DatePickerProps } from 'antd';
import { useActions } from '../hooks/actions';
import { Page } from '../hoc/Page';
import dayjs from 'dayjs';
import { useAppSelector } from '../hooks/redux';
import { dateAPIFormat, dateFormat, dateFullFormat } from '../utils';
import { ResultDeveloping } from '../components/Result/Developing';
import { ControlFilter } from '../components/Control/Filter';
import { ControlView, ControlViewProps } from '../components/Control/View';

const Home = () => {
	const { params, grid } = useAppSelector(state => state.home);
	const { setHomeParams, setHomeGrid } = useActions();

	const handleDateChange: DatePickerProps['onChange'] = (date) => {
		setHomeParams({ ...params, date: dayjs(date).format(dateAPIFormat) });
	};

	const handleViewChange: ControlViewProps['onViewChange'] = (grid) => {
		setHomeGrid(grid);
	};

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
			<ResultDeveloping/>
		</Page>
	);
};

export default Home;