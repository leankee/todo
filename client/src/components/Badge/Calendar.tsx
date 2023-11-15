import { FC } from 'react';
import { Badge, BadgeProps } from './index';
import { CalendarOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { dateFormat } from '../../utils';

export interface BadgeCalendarProps extends Omit<BadgeProps, 'icon' | 'title'> {
	date: string;
}

const removeProps = ({ date: _, ...rest }: BadgeCalendarProps) => rest;

export const BadgeCalendar: FC<BadgeCalendarProps> = (props) => {
	return (
		<Badge
			{...removeProps(props)}
			icon={<CalendarOutlined/>}
			title={dayjs(props.date).format(dateFormat)}
		/>
	);
};