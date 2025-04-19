/*
  Warnings:

  - You are about to drop the column `content` on the `customer_insight` table. All the data in the column will be lost.
  - Added the required column `conclude` to the `customer_insight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerStatus` to the `customer_insight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solution` to the `customer_insight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer_insight` DROP COLUMN `content`,
    ADD COLUMN `conclude` LONGTEXT NOT NULL,
    ADD COLUMN `customerStatus` LONGTEXT NOT NULL,
    ADD COLUMN `solution` LONGTEXT NOT NULL;
