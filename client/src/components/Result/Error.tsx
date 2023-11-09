import { Button, Result } from 'antd';
import { FC } from 'react';

export const ResultError: FC = () => {
	const handleClick = () => {
		window.location.reload();
	};

	return (
		<Result
			status="500"
			title="500: Произошла непредвиденная ошибка"
			subTitle="Попробуйте перезагрузить страницу"
			extra={<Button type="primary" onClick={handleClick}>Перезагрузить</Button>}
		/>
	);
};

