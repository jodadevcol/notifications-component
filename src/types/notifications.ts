export interface Notifications {
	data: Notification[]
}

export interface Notification {
	id: number
	user: User
	action: Action
	date: Date | string
	status: "unread" | "read"
	type?: string
}

export interface User {
	name: string
	avatar: string
}

export interface Action {
	type: string
	details: string
	message?: string
	post?: string
}
