import { FC } from 'react';
import { Divider, Flex, Space } from 'antd';
import styles from '../../styles/components/sidebar.module.scss';
import { SidebarLogo } from './Logo';
import { SidebarSearch } from './Search';
import { SidebarMenu, SidebarMenuProps } from './Menu';
import { SidebarAvatar } from './Avatar';

export interface SidebarProps {
	menu: SidebarMenuProps['menu'];
	collapsed: boolean;
	loading?: boolean;
	onCollapse: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ menu, collapsed, loading, onCollapse }) => {
	return (
		<Flex className={collapsed ? `${styles.main} ${styles.collapsed}` : styles.main} vertical>
			<SidebarLogo onClick={onCollapse}/>
			<SidebarSearch collapsed={collapsed} loading={loading} onClick={onCollapse}/>
			<Flex
				className={styles.container}
				justify="space-between"
				vertical
			>
				<SidebarMenu menu={menu} collapsed={collapsed} loading={loading}/>
				<Space className={styles.footer} size={6} direction="vertical">
					<Divider/>
					<SidebarAvatar collapsed={collapsed} loading={loading}/>
				</Space>
			</Flex>
		</Flex>
	);
};