import { db, User, Action, Notification } from "astro:db"

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
		{
			user_id: 1001,
			name: "Mark Webber",
			avatar: "/avatar/avatar-mark-webber.webp",
		},
		{
			user_id: 1002,
			name: "Angela Gray",
			avatar: "/avatar/avatar-angela-gray.webp",
		},
		{
			user_id: 1003,
			name: "Jacob Thompson",
			avatar: "/avatar/avatar-jacob-thompson.webp",
		},
		{
			user_id: 1004,
			name: "Rizky Hasanuddin",
			avatar: "/avatar/avatar-rizky-hasanuddin.webp",
		},
		{
			user_id: 1005,
			name: "Kimberly Smith",
			avatar: "/avatar/avatar-kimberly-smith.webp",
		},
		{
			user_id: 1006,
			name: "Nathan Peterson",
			avatar: "/avatar/avatar-nathan-peterson.webp",
		},
		{
			user_id: 1007,
			name: "Anna Kim",
			avatar: "/avatar/avatar-anna-kim.webp",
		},
	])

	await db.insert(Action).values([
		{
			action_id: 100001,
			type: "react",
			details: "reacted to your recent post",
			message: "My first tournament today!",
			post: "",
		},
		{
			action_id: 100002,
			type: "follow",
			details: "followed you",
			message: "",
			post: "",
		},
		{
			action_id: 100003,
			type: "join",
			details: "has joined your group",
			message: "Chess Club",
			post: "",
		},
		{
			action_id: 100004,
			type: "message",
			details: "sent you a private message",
			message:
				"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
			post: "",
		},
		{
			action_id: 100005,
			type: "comment",
			details: "commented on your picture",
			message: "",
			post: "/posts/image-chess.webp",
		},
		{
			action_id: 100006,
			type: "react",
			details: "reacted to your recent post",
			message: "5 end-game strategies to increase your win rate",
			post: "",
		},
		{
			action_id: 100007,
			type: "leave",
			details: "left the group",
			message: "Chess Club",
			post: "",
		},
		{
			action_id: 100008,
			type: "leave",
			details: "left the group",
			message: "Chess Club",
			post: "",
		},
		{
			action_id: 100009,
			type: "join",
			details: "has joined your group",
			message: "Chess Club",
			post: "",
		},
	])

	await db.insert(Notification).values([
		{
			user: 1001,
			action: 100001,
		},
		{
			user: 1002,
			action: 100002,
		},
		{
			user: 1003,
			action: 100003,
		},
		{
			user: 1004,
			action: 100004,
		},
		{
			user: 1005,
			action: 100005,
			date: new Date("2024-10-08T04:17:50.000Z"),
			status: "read",
		},
		{
			user: 1006,
			action: 100006,
			date: new Date("2024-10-08T04:17:50.000Z"),
			status: "read",
		},
		{
			user: 1007,
			action: 100007,
			date: new Date("2024-10-07T04:17:50.000Z"),
			status: "read",
		},
		{
			user: 1003,
			action: 100008,
			date: new Date("2024-10-07T04:17:50.000Z"),
			status: "read",
		},
		{
			user: 1002,
			action: 100009,
			date: new Date("2024-10-06T04:17:50.000Z"),
			status: "read",
		},
	])
}
