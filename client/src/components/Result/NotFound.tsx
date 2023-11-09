import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const ResultNotFound: FC = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	};

	return (
		<Result
			status="404"
			title="404: Страница не найдена"
			subTitle="Возможно данный раздел был удалён или введеная ссылка является неверной"
			extra={<Button type="primary" onClick={handleClick}>Вернуться обратно</Button>}
		/>
	);
};