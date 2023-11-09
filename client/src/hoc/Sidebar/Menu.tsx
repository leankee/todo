import { FC, ReactNode, useEffect, useState } from 'react';
import { Button, ButtonProps, Flex, Skeleton, Space, Tooltip } from 'antd';
import styles from '../../styles/components/sidebar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { Badge } from '../../components/Badge';

export interface IMenuLink {
	title: string;
	titleTooltip?: string;
	href?: string;
	additionalHref?: string;
	icon?: ReactNode;
	count?: number;
	showBadge?: boolean;
	onClick?: ButtonProps['onClick'];
}

interface SidebarMenuLinkProps extends IMenuLink {
	countLoading?: boolean;
	active?: boolean;
	disableTooltip?: boolean;
	collapsed?: boolean;
}

interface SidebarMenuGroupProps {
	title: string;
	icon: ReactNode;
	links: IMenuLink[];
	collapsed?: boolean;
	controls?: ReactNode[];
	loading?: boolean;
}

export interface SidebarMenuProps {
	menu: SidebarMenuGroupProps[];
	collapsed: boolean;
	loading?: boolean;
}

export const SidebarMenuLink: FC<SidebarMenuLinkProps> = (props) => {
	const {
		title,
		titleTooltip,
		href,
		icon,
		count,
		countLoading,
		active,
		collapsed,
		onClick,
		disableTooltip,
		showBadge = true,
	} = props;

	const [isOpen, setIsOpen] = useState(false);

	const handleOpenChange = (isOpen: boolean) => {
		if (collapsed && !disableTooltip) setIsOpen(isOpen);
	};

	useEffect(() => {
		if (disableTooltip) {
			setIsOpen(false);
		}
	}, [disableTooltip]);

	return (
		<Tooltip
			title={titleTooltip || title}
			placement="right"
			open={isOpen}
			onOpenChange={handleOpenChange}
		>
			{href
				? (
					<Link to={href}>
						<Button
							className={active
								? `${styles.menu__link} ${styles.menu__link_active}`
								: styles.menu__link
							}
							type="text"
							size="large"
							icon={icon}
							onClick={onClick}
							block
						>
							<Flex className={styles.menu__link__title} align="center" justify="space-between">
								<span className={styles.menu__link__title__text}>{title}</span>
								{active && showBadge && <Badge size="small" count={count || 0} loading={countLoading}/>}
							</Flex>
						</Button>
					</Link>
				) : (
					<Button
						className={active
							? `${styles.menu__link} ${styles.menu__link_active}`
							: styles.menu__link
						}
						type="text"
						size="large"
						icon={icon}
						onClick={onClick}
						block
					>
						<Flex className={styles.menu__link__title} align="center" justify="space-between">
							<span className={styles.menu__link__title__text}>{title}</span>
							{active && showBadge && <Badge size="small" count={count || 0} loading={countLoading}/>}
						</Flex>
					</Button>
				)
			}
		</Tooltip>
	);
};

export const SidebarMenuGroup: FC<SidebarMenuGroupProps> = ({ title, icon, links, collapsed, controls, loading }) => {
	const { pathname } = useLocation();

	return (
		<Space className={styles.menu__group} size={6} direction="vertical">
			<div className={styles.menu__title}>
				{loading
					? (
						<div style={{ overflow: 'hidden', borderRadius: 4 }}>
							<Skeleton.Button size="small" style={{ width: 140 }} active block/>
						</div>
					) : (
						<>
							<Flex className={styles.menu__title__container} align="center" justify="space-between">
								<span className={styles.menu__title__text}>{title}</span>
								{controls && <Space>{controls.map((control, index) => <div key={index}>{control}</div>)}</Space>}
							</Flex>
							<div className={styles.menu__title__short}>{icon}</div>
						</>
					)
				}
			</div>
			<Space className={styles.menu__links} size={4} direction="vertical">
				{loading
					? [1, 2, 3].map(item => (
						<div key={item} style={{ overflow: 'hidden', borderRadius: 8 }}>
							<Skeleton.Button size="large" active block/>
						</div>
					))
					: links.map(link => (
						<SidebarMenuLink
							key={link.href}
							{...link}
							active={pathname === link.href || pathname === link.additionalHref}
							collapsed={collapsed}
						/>
					))
				}
			</Space>
		</Space>
	);
};

export const SidebarMenu: FC<SidebarMenuProps> = ({ menu, collapsed, loading }) => {
	return (
		<Space className={styles.menu} direction="vertical">
			{menu.map(group => <SidebarMenuGroup key={group.title} {...group} collapsed={collapsed} loading={loading}/>)}
		</Space>
	);
};