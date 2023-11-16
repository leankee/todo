import { FC } from 'react';
import { Badge, BadgeProps } from './index';
import { CalendarOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { dateFormat } from '../../utils';

export interface BadgeCalendarProps extends Omit<BadgeProps, 'title' | 'icon' | 'className'> {
	date: string;
}

const removeProps = ({ date: _, ...rest }: BadgeCalendarProps) => rest;

export const BadgeCalendar: FC<BadgeCalendarProps> = (props) => {
	return (
		<Badge
			{...removeProps(props)}
			title={dayjs(props.date).format(dateFormat)}
			icon={<CalendarOutlined/>}
		/>
	);
};