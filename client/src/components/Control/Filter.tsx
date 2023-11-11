import { FC } from 'react';
import { Control, ControlTypeProps } from './index';
import { FilterOutlined } from '@ant-design/icons';

export const ControlFilter: FC<ControlTypeProps> = (props) => {
	return (
		<Control
			title="Фильтр"
			icon={<FilterOutlined/>}
			{...props}
		/>
	);
};