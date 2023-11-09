import { FC } from 'react';
import { Button, ButtonProps, Space } from 'antd';
import styles from '../../styles/components/sidebar.module.scss';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import { RouteNames } from '../Router';

export interface SidebarLogoProps {
	onClick: ButtonProps['onClick'];
}

export const SidebarLogo: FC<SidebarLogoProps> = ({ onClick }) => {
	return (
		<Space className={styles.logo}>
			<Button type="text" size="large" icon={<MenuOutlined/>} onClick={onClick}/>
			<Link to={RouteNames.HOME}><img src={Logo} alt="TODO"/></Link>
		</Space>
	);
};