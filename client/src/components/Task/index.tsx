import { FC, useState } from 'react';
import { ITask } from '../../models';
import { Flex } from 'antd';

export interface TaskProps extends ITask {

}

export const Task: FC = (props) => {
	// const [isDone, setIsDone] = useState(props.isDone);
	// const [isFavourite, setIsFavourite] = useState(props.isFavourite);

	return (
		<Flex vertical>
			<Flex>

			</Flex>
		</Flex>
	);
};