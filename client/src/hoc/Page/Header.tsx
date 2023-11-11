import { FC, ReactNode } from 'react';
import { Flex, Skeleton, Space, Typography } from 'antd';
import styles from '../../styles/components/page.module.scss';
import { LoadingOutlined } from '@ant-design/icons';

export interface PageHeaderProps {
	title: string | undefined;
	loading?: boolean;
	controls?: Array<ReactNode | 'divider'>;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, loading, controls }) => {
	return (
		<Flex
			justify="space-between"
			align="center"
			className={styles.header}
		>
			{loading
				? (
					<div className={styles.header__title__loading}>
						<Skeleton.Button
							size="large"
							active
							block
						/>
					</div>
				) : <Typography.Text className={styles.header__title}>{title}</Typography.Text>
			}
			{controls && (
				loading
					? <LoadingOutlined className={styles.header__controls__loading}/>
					: (
						<Space className={styles.header__controls}>
							{controls.map((control, index) => (
								control === 'divider'
									? <div key={`divider-${index}`} className={styles.header__divider}/>
									: <div key={index}>{control}</div>
							))}
						</Space>
					)
			)}
		</Flex>
	);
};