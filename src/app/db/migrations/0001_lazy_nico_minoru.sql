CREATE TABLE `guestbook_entries` (
	`id` varchar(255) NOT NULL,
	`userId` varchar(255) NOT NULL,
	`message` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `guestbook_entries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `guestbook_entries` ADD CONSTRAINT `guestbook_entries_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;