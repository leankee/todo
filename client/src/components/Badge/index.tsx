import { FC, ReactNode } from 'react';
import { Space } from 'antd';
import styles from '../../styles/components/badge.module.scss';
import { LoadingOutlined } from '@ant-design/icons';

export interface BadgeProps {
	title?: string;
	count?: number;
	icon?: ReactNode;
	status?: 'default' | 'error' | 'success' | 'warning';
	size?: 'small' | 'middle';
	loading?: boolean;
}

export const Badge: FC<BadgeProps> = (props) => {
	const {
		title,
		count,
		icon,
		status = 'default',
		size = 'middle',
		loading,
	} = props;
	let className = size === 'middle' ? styles.middle : styles.small;

	switch (status) {
		case 'error': {
			className += ` ${styles.error}`;
			break;
		}
		case 'success': {
			className += ` ${styles.success}`;
			break;
		}
		case 'warning': {
			className += ` ${styles.warning}`;
			break;
		}
		default: {
			break;
		}
	}

	return (
		<Space className={className} size={size === 'middle' ? 8 : 6}>
			{loading
				? <LoadingOutlined/>
				: <>{icon}{count || count === 0 ? count > 99 ? '99+' : count : title}</>
			}
		</Space>
	);
};