import { column, defineTable, defineDb, NOW } from "astro:db"

const User = defineTable({
	columns: {
		user_id: column.number({ primaryKey: true }),
		name: column.text(),
		avatar: column.text(),
	},
})

const Action = defineTable({
	columns: {
		action_id: column.number({ primaryKey: true }),
		type: column.text(),
		details: column.text(),
		message: column.text(),
		post: column.text(),
	},
})

const Notification = defineTable({
	columns: {
		notification_id: column.number({ primaryKey: true, unique: true }),
		user: column.number(),
		action: column.number(),
		date: column.date({ default: NOW }),
		status: column.text({ default: "unread" }),
	},
	foreignKeys: [
		{
			columns: ["user"],
			references: () => [User.columns.user_id],
		},
		{
			columns: ["action"],
			references: () => [Action.columns.action_id],
		},
	],
})

// https://astro.build/db/config
export default defineDb({
	tables: {
		User,
		Action,
		Notification,
	},
})
