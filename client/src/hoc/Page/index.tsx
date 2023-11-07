import { FC, ReactNode } from 'react';
import styles from '../../styles/components/page.module.scss';
import { PageHeader, PageHeaderProps } from './Header';

export interface PageProps {
	header: PageHeaderProps | false;
	loading?: boolean;
	children?: ReactNode;
}

export const Page: FC<PageProps> = ({ header, loading, children }) => {
	return (
		<div className={styles.main}>
			{header && <PageHeader {...header} loading={loading} />}
			{children}
		</div>
	);
};