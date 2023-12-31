import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../styles/components/layout.module.scss';
import { Button, Flex, Spin } from 'antd';
import { Sidebar } from './Sidebar';
import { SidebarMenuProps } from './Sidebar/Menu';
import {
	CalendarOutlined,
	CheckSquareOutlined,
	FileOutlined,
	FolderFilled,
	HomeOutlined,
	PlusOutlined,
	StarFilled,
} from '@ant-design/icons';
import { PageNames, RouteNames } from './Router';

export const Layout: FC = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [isLoading] = useState(false); // Изменить

	const menu: SidebarMenuProps['menu'] = [
		{
			title: 'Задачи',
			icon: <CheckSquareOutlined/>,
			links: [
				{
					title: PageNames.HOME,
					href: RouteNames.HOME,
					icon: <HomeOutlined/>,
				},
				{
					title: PageNames.CALENDAR,
					href: RouteNames.CALENDAR,
					icon: <CalendarOutlined/>,
				},
				{
					title: PageNames.NOTES,
					href: RouteNames.NOTES,
					icon: <FileOutlined/>,
				},
			],
			controls: [<Button type="text" size="small" icon={<PlusOutlined/>}/>],
		},
		{
			title: 'Группы',
			icon: <FolderFilled/>,
			links: [
				{
					title: PageNames.FAVOURITES,
					href: RouteNames.FAVOURITES,
					icon: <StarFilled/>,
				},
			],
			controls: [<Button type="text" size="small" icon={<PlusOutlined/>}/>],
		},
	];

	const handleCollapse = () => {
		setIsCollapsed(collapsed => !collapsed);
	};

	return (
		<Flex className={styles.main}>
			<Sidebar collapsed={isCollapsed} menu={menu} onCollapse={handleCollapse} loading={isLoading}/>
			<div className={styles.container}>
				{isLoading
					? <div className={styles.loading}><Spin size="large"/></div>
					: <Outlet/>}
			</div>
		</Flex>
	);
};