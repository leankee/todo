import { FC, ReactNode } from 'react';
import { Card, Flex, Form, FormProps, Typography } from 'antd';
import styles from '../../styles/components/page.module.scss';
import Logo from '../../assets/img/logo.svg';

export interface PageFormProps {
	title: string;
	logo?: boolean;
	form?: FormProps;
	children?: ReactNode;
}

export const PageForm: FC<PageFormProps> = ({ title, logo, form, children }) => {
	return (
		<div className={styles.main}>
			<Flex align="center" vertical>
				<img className={styles.logo} src={Logo} alt="Logo"/>
				<Card className={styles.form}>
					<Flex align="center" vertical>
						<Typography.Text className={styles.form__title}>{title}</Typography.Text>
						<Form
							{...form}
							className={styles.form__fields}
							layout={form?.layout || 'vertical'}
						>
							{children}
						</Form>
					</Flex>
				</Card>
			</Flex>
		</div>
	);
};