/*
  Warnings:

  - A unique constraint covering the columns `[age,time,category]` on the table `customer_insight` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `customer_insight_age_time_category_key` ON `customer_insight`(`age`, `time`, `category`);
