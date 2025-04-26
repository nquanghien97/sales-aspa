/*
  Warnings:

  - The values [INSIGHT_MOTHER,HANDLE_REJECTION] on the enum `proposal_categoryType` will be removed. If these variants are still used in the database, this will fail.
  - The values [INSIGHT_MOTHER,HANDLE_REJECTION] on the enum `proposal_categoryType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `customer_status` LONGTEXT NULL,
    MODIFY `category` ENUM('CUSTOMER_ANSWER') NOT NULL;

-- AlterTable
ALTER TABLE `proposal` MODIFY `categoryType` ENUM('CUSTOMER_ANSWER') NOT NULL;
