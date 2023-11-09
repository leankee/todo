import { FC, useState } from 'react';
import styles from '../../styles/components/sidebar.module.scss';
import { SidebarMenuLink } from './Menu';
import { Avatar, Dropdown, MenuProps, Skeleton } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useActions } from '../../hooks/actions';

export interface SidebarAvatarProps {
	src?: string;
	collapsed: boolean;
	loading?: boolean;
}

export const SidebarAvatar: FC<SidebarAvatarProps> = ({ src, collapsed, loading }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { logout } = useActions(); // Изменить

	const handleLogout = async () => {
		logout();
	};

	const handleOpenChange = (open: boolean) => {
		setIsMenuOpen(open);
	};

	const items: MenuProps['items'] = [
		{
			key: 'logout',
			danger: true,
			icon: <LogoutOutlined/>,
			label: 'Выйти из аккаунта',
			onClick: handleLogout,
		},
	];

	return (
		loading
			? <div style={{ overflow: 'hidden', borderRadius: 8 }}><Skeleton.Button size="large" active block/></div>
			: (
				<Dropdown
					open={isMenuOpen}
					menu={{ items }}
					trigger={['click']}
					onOpenChange={handleOpenChange}
					overlayClassName={styles.avatar__menu}
				>
					<div className={styles.avatar}>
						<SidebarMenuLink
							// title={getFullName(user?.fullName)}
							titleTooltip="Аккаунт"
							title="Учетная запись"
							icon={
								<Avatar
									className={styles.avatar__picture}
									icon={<UserOutlined/>}
									src={src}
								/>
							}
							collapsed={collapsed}
							active={isMenuOpen}
							showBadge={false}
							disableTooltip={isMenuOpen}
						/>
					</div>
				</Dropdown>
			)
	);
};