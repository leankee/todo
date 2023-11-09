import { FC, useState } from 'react';
import styles from '../../styles/components/sidebar.module.scss';
import { Input, Tooltip } from 'antd';
import { LoadingOutlined, SearchOutlined } from '@ant-design/icons';

export interface SidebarSearchProps {
	collapsed: boolean;
	loading?: boolean;
	onClick: () => void;
}

export const SidebarSearch: FC<SidebarSearchProps> = ({ collapsed, loading, onClick }) => {
	const [isTooltipOpen, setIsTooltipOpen] = useState(false);

	const handleTooltipOpenChange = (isOpen: boolean) => {
		if (collapsed) setIsTooltipOpen(isOpen);
	};

	const handleClick = () => {
		if (collapsed) {
			setIsTooltipOpen(false);
			onClick();
		}
	};

	return (
		<Tooltip
			title="Поиск"
			placement="right"
			open={isTooltipOpen}
			onOpenChange={handleTooltipOpenChange}
		>
			<div className={styles.search}>
				<Input
					style={loading ? { cursor: 'default' } : undefined}
					prefix={loading ? <LoadingOutlined/> : <SearchOutlined/>}
					className={styles.search__input}
					size="large"
					placeholder="Поиск"
					disabled={loading}
					onFocus={handleClick}
				/>
			</div>
		</Tooltip>
	);
};