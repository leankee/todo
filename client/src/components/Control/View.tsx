import { FC } from 'react';
import { Control, ControlTypeProps } from './index';
import { TableOutlined, UnorderedListOutlined } from '@ant-design/icons';

export interface ControlViewProps extends ControlTypeProps {
	grid: boolean;
	onViewChange: (grid: boolean) => void;
}

const removeProps = ({ grid: _, onViewChange: __, ...rest }: ControlViewProps) => rest;

export const ControlView: FC<ControlViewProps> = (props) => {
	const {
		grid,
		onViewChange,
		onClick,
	} = props;

	const handleClick: ControlTypeProps['onClick'] = (event) => {
		localStorage.setItem('grid', JSON.stringify(!grid));
		onViewChange(!grid);
		if (onClick) onClick(event);
	};

	return (
		<Control
			title={`Вид: ${grid ? 'Сетка' : 'Список'}`}
			icon={grid ? <TableOutlined/> : <UnorderedListOutlined/>}
			{...removeProps(props)}
			onClick={handleClick}
		/>
	);
};