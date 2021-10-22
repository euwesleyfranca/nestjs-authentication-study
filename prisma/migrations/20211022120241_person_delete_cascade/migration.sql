-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_peopleId_fkey`;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_peopleId_fkey` FOREIGN KEY (`peopleId`) REFERENCES `people`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
