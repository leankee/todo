import { FC } from 'react';
import { Badge, BadgeProps } from './index';
import { BadgeCalendarProps } from './Calendar';
import dayjs from 'dayjs';
import { dateTimeFormat } from '../../utils';
import { ClockCircleOutlined } from '@ant-design/icons';
import styles from '../../styles/components/badge.module.scss';

export interface BadgeTimeProps extends Omit<BadgeProps, 'title' | 'icon' | 'className'> {
	date: string;
}

const removeProps = ({ date: _, ...rest }: BadgeCalendarProps) => rest;

export const BadgeTime: FC<BadgeTimeProps> = (props) => {
	return (
		<Badge
			{...removeProps(props)}
			title={dayjs(props.date).format(dateTimeFormat)}
			icon={<ClockCircleOutlined/>}
			className={styles.time}
		/>
	);
};