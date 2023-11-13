export interface IUser {
	email: string;
}

export interface IGroup {
	id: number;
	name: string;
	color: string;
}

export interface ISubtask {
	id: number;
	name: string;
	isDone: boolean;
	parentId: number;
	date: string;
}

export interface ITask {
	id: number;
	name: string;
	description?: string;
	isDone: boolean;
	isFavourite: boolean;
	date: string;
	group?: IGroup;
	children?: ISubtask[];
}

export interface INote {
	id: number;
	name: string;
	description: string;
	color: string;
}