import { Result } from 'antd';
import { FC } from 'react';

export const ResultNoAccess: FC = () => {
	return (
		<Result
			status="403"
			title="403: Нет доступа"
			subTitle="У Вас нет прав доступа к этой странице, для получения прав обратитесь к администратору"
		/>
	);
};