/*
  Warnings:

  - You are about to drop the `insight_2` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `insight_2`;

-- CreateTable
CREATE TABLE `insight_mother` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `keyword` VARCHAR(191) NOT NULL,
    `explain` LONGTEXT NOT NULL,
    `solution` LONGTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
