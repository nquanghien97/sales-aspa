/*
  Warnings:

  - The values [SALESPOLICY,PRODUCTDOCUMENTS] on the enum `file_categories_category` will be removed. If these variants are still used in the database, this will fail.
  - The values [SALESPOLICY,PRODUCTDOCUMENTS] on the enum `file_categories_category` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `file_categories` MODIFY `category` ENUM('SALES_POLICY', 'PRODUCTS', 'PRODUCT_DOCUMENTS', 'FEEDBACKS') NOT NULL;

-- AlterTable
ALTER TABLE `files` MODIFY `category` ENUM('SALES_POLICY', 'PRODUCTS', 'PRODUCT_DOCUMENTS', 'FEEDBACKS') NOT NULL;
