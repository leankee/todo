import { FC, ReactNode } from 'react';
import { Button, ButtonProps, ConfigProvider, Tooltip, TooltipProps } from 'antd';
import variables from '../../styles/variables.scss';

export interface ControlProps extends Omit<ButtonProps, 'children' | 'icon'> {
	title: string;
	icon: ReactNode;
	tooltipPlacement?: TooltipProps['placement'];
	context?: boolean;
}

export interface ControlTypeProps extends Omit<ControlProps, 'title' | 'icon'> {
}

const removeProps = ({ title: _, tooltipPlacement: __, context: ___, ...rest }: ControlProps) => rest;

export const Control: FC<ControlProps> = (props) => {
	const {
		title,
		tooltipPlacement,
		context,
	} = props;

	return (
		<ConfigProvider theme={context ? undefined : { token: { colorTextBase: variables.primary } }}>
			<Tooltip
				title={title}
				placement={tooltipPlacement || context ? 'right' : 'top'}
			>
				<Button {...removeProps(props)} type={props.type || 'text'}/>
			</Tooltip>
		</ConfigProvider>
	);
};