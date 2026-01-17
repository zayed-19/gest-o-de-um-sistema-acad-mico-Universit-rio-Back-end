/*
  Warnings:

  - You are about to drop the column `DataNasc` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `NrMatricula` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `id_documento` on the `aluno` table. All the data in the column will be lost.
  - You are about to drop the column `TipodeAvalição` on the `avaliacao` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `avaliacao` table. All the data in the column will be lost.
  - You are about to drop the column `coordenador` on the `curso` table. All the data in the column will be lost.
  - You are about to drop the column `duração` on the `curso` table. All the data in the column will be lost.
  - You are about to drop the column `id_faculdade` on the `curso` table. All the data in the column will be lost.
  - You are about to drop the column `id_multipla` on the `curso` table. All the data in the column will be lost.
  - You are about to drop the column `id_multipla` on the `disciplina` table. All the data in the column will be lost.
  - You are about to drop the column `tipodedocumentos` on the `documento` table. All the data in the column will be lost.
  - You are about to drop the column `Valor_Total` on the `fatura` table. All the data in the column will be lost.
  - You are about to drop the column `dataEMISSÃO` on the `fatura` table. All the data in the column will be lost.
  - You are about to drop the column `id_pagamento` on the `fatura` table. All the data in the column will be lost.
  - You are about to drop the column `nr_fatura` on the `fatura` table. All the data in the column will be lost.
  - You are about to drop the column `ano_letivo` on the `matricula` table. All the data in the column will be lost.
  - You are about to alter the column `estado_matricula` on the `matricula` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.
  - You are about to drop the column `datadoPagamento` on the `pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `id_monumento` on the `pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `metodo_de_pagamento` on the `pagamento` table. All the data in the column will be lost.
  - You are about to alter the column `valor` on the `pagamento` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(20,2)`.
  - You are about to drop the column `status_presenca` on the `presenca` table. All the data in the column will be lost.
  - You are about to drop the column `BI` on the `professor` table. All the data in the column will be lost.
  - You are about to drop the column `id_multipla` on the `professor` table. All the data in the column will be lost.
  - You are about to drop the column `id_multipla` on the `turma` table. All the data in the column will be lost.
  - You are about to drop the `monumento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `multipla` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notificacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recibo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `relatorio` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `dataNasc` to the `aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_avaliacao` to the `avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_aluno` to the `avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_avaliacao` to the `avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duracao` to the `curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_faculdades` to the `curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_professor` to the `curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_documento` to the `documento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_emissao` to the `fatura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor_total` to the `fatura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ano_lectivo` to the `matricula` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_aluno` to the `matricula` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_pagamento` to the `pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_aluno` to the `pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_emolumento` to the `pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_fatura` to the `pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metodo_pagamento` to the `pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `presenca` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bi_passaporte` to the `professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_curso` to the `turma` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `aluno` DROP FOREIGN KEY `aluno_id_documento_fkey`;

-- DropForeignKey
ALTER TABLE `curso` DROP FOREIGN KEY `curso_id_faculdade_fkey`;

-- DropForeignKey
ALTER TABLE `curso` DROP FOREIGN KEY `curso_id_fkey`;

-- DropForeignKey
ALTER TABLE `disciplina` DROP FOREIGN KEY `disciplina_id_fkey`;

-- DropForeignKey
ALTER TABLE `fatura` DROP FOREIGN KEY `fatura_id_pagamento_fkey`;

-- DropForeignKey
ALTER TABLE `pagamento` DROP FOREIGN KEY `pagamento_id_monumento_fkey`;

-- DropForeignKey
ALTER TABLE `presenca` DROP FOREIGN KEY `presenca_id_fkey`;

-- DropForeignKey
ALTER TABLE `professor` DROP FOREIGN KEY `professor_id_fkey`;

-- DropForeignKey
ALTER TABLE `recibo` DROP FOREIGN KEY `recibo_id_pagamento_fkey`;

-- DropForeignKey
ALTER TABLE `turma` DROP FOREIGN KEY `turma_id_fkey`;

-- DropIndex
DROP INDEX `aluno_id_documento_fkey` ON `aluno`;

-- DropIndex
DROP INDEX `curso_id_faculdade_fkey` ON `curso`;

-- DropIndex
DROP INDEX `fatura_id_pagamento_fkey` ON `fatura`;

-- DropIndex
DROP INDEX `pagamento_id_monumento_fkey` ON `pagamento`;

-- AlterTable
ALTER TABLE `aluno` DROP COLUMN `DataNasc`,
    DROP COLUMN `NrMatricula`,
    DROP COLUMN `email`,
    DROP COLUMN `id_documento`,
    ADD COLUMN `dataNasc` DATE NOT NULL,
    MODIFY `genero` VARCHAR(20) NOT NULL,
    MODIFY `morada` VARCHAR(200) NOT NULL,
    MODIFY `telefone` VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE `avaliacao` DROP COLUMN `TipodeAvalição`,
    DROP COLUMN `data`,
    ADD COLUMN `data_avaliacao` DATE NOT NULL,
    ADD COLUMN `id_aluno` INTEGER NOT NULL,
    ADD COLUMN `tipo_avaliacao` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `cargo` MODIFY `descricao` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `curso` DROP COLUMN `coordenador`,
    DROP COLUMN `duração`,
    DROP COLUMN `id_faculdade`,
    DROP COLUMN `id_multipla`,
    ADD COLUMN `duracao` VARCHAR(50) NOT NULL,
    ADD COLUMN `id_faculdades` INTEGER NOT NULL,
    ADD COLUMN `id_professor` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `disciplina` DROP COLUMN `id_multipla`;

-- AlterTable
ALTER TABLE `documento` DROP COLUMN `tipodedocumentos`,
    ADD COLUMN `tipo_documento` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `fatura` DROP COLUMN `Valor_Total`,
    DROP COLUMN `dataEMISSÃO`,
    DROP COLUMN `id_pagamento`,
    DROP COLUMN `nr_fatura`,
    ADD COLUMN `data_emissao` DATE NOT NULL,
    ADD COLUMN `valor_total` DECIMAL(10, 2) NOT NULL;

-- AlterTable
ALTER TABLE `matricula` DROP COLUMN `ano_letivo`,
    ADD COLUMN `ano_lectivo` VARCHAR(50) NOT NULL,
    ADD COLUMN `id_aluno` INTEGER NOT NULL,
    MODIFY `data_matricula` DATE NOT NULL,
    MODIFY `estado_matricula` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `pagamento` DROP COLUMN `datadoPagamento`,
    DROP COLUMN `id_monumento`,
    DROP COLUMN `metodo_de_pagamento`,
    ADD COLUMN `data_pagamento` DATE NOT NULL,
    ADD COLUMN `id_aluno` INTEGER NOT NULL,
    ADD COLUMN `id_emolumento` INTEGER NOT NULL,
    ADD COLUMN `id_fatura` INTEGER NOT NULL,
    ADD COLUMN `metodo_pagamento` VARCHAR(100) NOT NULL,
    MODIFY `valor` DECIMAL(20, 2) NOT NULL;

-- AlterTable
ALTER TABLE `presenca` DROP COLUMN `status_presenca`,
    ADD COLUMN `status` VARCHAR(50) NOT NULL,
    MODIFY `data_presenca` DATE NOT NULL;

-- AlterTable
ALTER TABLE `professor` DROP COLUMN `BI`,
    DROP COLUMN `id_multipla`,
    ADD COLUMN `bi_passaporte` VARCHAR(50) NOT NULL,
    MODIFY `telefone` VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE `turma` DROP COLUMN `id_multipla`,
    ADD COLUMN `id_curso` INTEGER NOT NULL;

-- DropTable
DROP TABLE `monumento`;

-- DropTable
DROP TABLE `multipla`;

-- DropTable
DROP TABLE `notificacao`;

-- DropTable
DROP TABLE `recibo`;

-- DropTable
DROP TABLE `relatorio`;

-- CreateTable
CREATE TABLE `notificacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_notificacao` VARCHAR(100) NOT NULL,
    `data_envio` DATE NOT NULL,
    `informacao` LONGTEXT NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emolumento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referencia` INTEGER NOT NULL,
    `valor` DECIMAL(10, 2) NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `itensfatura` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `valortotal` DECIMAL(10, 2) NOT NULL,
    `nr_fatura` INTEGER NOT NULL,
    `id_fatura` INTEGER NOT NULL,
    `id_emolumento` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `turmadisci` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_turma` INTEGER NOT NULL,
    `id_disciplina` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `turmaprof` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_turma` INTEGER NOT NULL,
    `id_professor` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `disciprof` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_disciplina` INTEGER NOT NULL,
    `id_professor` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `discicurso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_disciplina` INTEGER NOT NULL,
    `id_curso` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cursoprof` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_curso` INTEGER NOT NULL,
    `id_professor` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `turma` ADD CONSTRAINT `turma_id_curso_fkey` FOREIGN KEY (`id_curso`) REFERENCES `curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `curso` ADD CONSTRAINT `curso_id_faculdades_fkey` FOREIGN KEY (`id_faculdades`) REFERENCES `faculdades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `curso` ADD CONSTRAINT `curso_id_professor_fkey` FOREIGN KEY (`id_professor`) REFERENCES `professor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliacao` ADD CONSTRAINT `avaliacao_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `itensfatura` ADD CONSTRAINT `itensfatura_id_fatura_fkey` FOREIGN KEY (`id_fatura`) REFERENCES `fatura`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `itensfatura` ADD CONSTRAINT `itensfatura_id_emolumento_fkey` FOREIGN KEY (`id_emolumento`) REFERENCES `emolumento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pagamento` ADD CONSTRAINT `pagamento_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pagamento` ADD CONSTRAINT `pagamento_id_emolumento_fkey` FOREIGN KEY (`id_emolumento`) REFERENCES `emolumento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pagamento` ADD CONSTRAINT `pagamento_id_fatura_fkey` FOREIGN KEY (`id_fatura`) REFERENCES `fatura`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `matricula` ADD CONSTRAINT `matricula_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `presenca` ADD CONSTRAINT `presenca_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turmadisci` ADD CONSTRAINT `turmadisci_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turmadisci` ADD CONSTRAINT `turmadisci_id_disciplina_fkey` FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turmaprof` ADD CONSTRAINT `turmaprof_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turmaprof` ADD CONSTRAINT `turmaprof_id_professor_fkey` FOREIGN KEY (`id_professor`) REFERENCES `professor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `disciprof` ADD CONSTRAINT `disciprof_id_disciplina_fkey` FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `disciprof` ADD CONSTRAINT `disciprof_id_professor_fkey` FOREIGN KEY (`id_professor`) REFERENCES `professor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `discicurso` ADD CONSTRAINT `discicurso_id_disciplina_fkey` FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `discicurso` ADD CONSTRAINT `discicurso_id_curso_fkey` FOREIGN KEY (`id_curso`) REFERENCES `curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cursoprof` ADD CONSTRAINT `cursoprof_id_curso_fkey` FOREIGN KEY (`id_curso`) REFERENCES `curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cursoprof` ADD CONSTRAINT `cursoprof_id_professor_fkey` FOREIGN KEY (`id_professor`) REFERENCES `professor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
