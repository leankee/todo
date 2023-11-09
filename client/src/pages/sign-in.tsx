import { Button, Form, FormProps, Input, Typography } from 'antd';
import { PageForm } from '../hoc/Page/Form';
import { PageNames, RouteNames } from '../hoc/Router';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from '../styles/pages/sign-in.module.scss';
import { useActions } from '../hooks/actions';
import { IUser } from '../models';

const SignIn = () => {
	const { login } = useActions(); // Изменить

	const handleSubmit: FormProps['onFinish'] = (values) => {
		// Изменить
		const user: IUser = { email: values.email };
		login(JSON.stringify(user));
	};

	return (
		<PageForm
			title={PageNames.SIGN_IN}
			form={{
				name: 'login',
				onFinish: handleSubmit,
			}}
		>
			<Form.Item
				name="email"
				label="E-mail"
				rules={[
					{ required: true },
					{ type: 'email', message: 'Неверный формат E-mail' },
				]}
			>
				<Input
					prefix={<MailOutlined/>}
					placeholder="example@example.ru"
					// size="large"
				/>
			</Form.Item>
			<Form.Item
				name="password"
				label="Пароль"
				rules={[{ required: true }]}
			>
				<Input.Password
					prefix={<LockOutlined/>}
					placeholder="••••••••"
					// size="large"
				/>
			</Form.Item>
			<Button
				type="primary"
				// size="large"
				htmlType="submit"
				// loading={isLoading}
				block
			>
				Войти
			</Button>
			<Typography.Text className={styles.sign_up}>
				Нет аккаунта? <Link to={RouteNames.SIGN_UP}>Зарегистрироваться</Link>
			</Typography.Text>
		</PageForm>
	);
};

export default SignIn;