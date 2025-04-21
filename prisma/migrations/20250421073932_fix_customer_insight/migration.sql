/*
  Warnings:

  - The values [FROM_30_TO_40,FROM_40_TO_60,ABOVE_60] on the enum `customer_insight_age` will be removed. If these variants are still used in the database, this will fail.
  - The values [AFTER_BIRTH_AND_PERIMENOPAUSE] on the enum `customer_insight_time` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `customer_insight` MODIFY `age` ENUM('UNDER_30', 'FROM_30_TO_45', 'ABOVE_45') NOT NULL,
    MODIFY `time` ENUM('SINCE_CHILDHOOD', 'SINCE_PUBERTY', 'AFTER_GIVING_BIRTH', 'PERIMENOPAUSE') NOT NULL;
