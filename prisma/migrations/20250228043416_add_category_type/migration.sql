/*
  Warnings:

  - Added the required column `categoryType` to the `proposal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `proposal` ADD COLUMN `categoryType` ENUM('INSIGHT_MOTHER', 'HANDLE_REJECTION') NOT NULL;
