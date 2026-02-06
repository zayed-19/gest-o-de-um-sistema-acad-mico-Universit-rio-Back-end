/*
  Warnings:

  - You are about to alter the column `telefone` on the `aluno` table. The data in that column could be lost. The data in that column will be cast from `VarChar(20)` to `Int`.

*/
-- AlterTable
ALTER TABLE `aluno` MODIFY `telefone` INTEGER NOT NULL;
