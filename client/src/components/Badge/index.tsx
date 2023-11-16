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
	className?: string;
	loading?: boolean;
}

export const Badge: FC<BadgeProps> = (props) => {
	const {
		title,
		count,
		icon,
		status = 'default',
		size = 'middle',
		className,
		loading,
	} = props;
	let style = `${styles.main} ${size === 'middle' ? styles.middle : styles.small}`;

	switch (status) {
		case 'error': {
			style += ` ${styles.error}`;
			break;
		}
		case 'success': {
			style += ` ${styles.success}`;
			break;
		}
		case 'warning': {
			style += ` ${styles.warning}`;
			break;
		}
		default: {
			break;
		}
	}

	return (
		<Space className={className ? `${style} ${className}` : style} size={size === 'middle' ? 8 : 6}>
			{loading
				? <LoadingOutlined/>
				: <>{icon}{count || count === 0 ? count > 99 ? '99+' : count : title}</>
			}
		</Space>
	);
};