/*
  Warnings:

  - The values [INTRODUCE_SOLUTION,CONFIRM] on the enum `proposal_categoryType` will be removed. If these variants are still used in the database, this will fail.
  - The values [INTRODUCE_SOLUTION,CONFIRM] on the enum `proposal_categoryType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `category` ENUM('INSIGHT_MOTHER', 'HANDLE_REJECTION') NOT NULL;

-- AlterTable
ALTER TABLE `proposal` MODIFY `categoryType` ENUM('INSIGHT_MOTHER', 'HANDLE_REJECTION') NOT NULL;
