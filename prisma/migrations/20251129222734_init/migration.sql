-- CreateTable
CREATE TABLE `aluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `NrMatricula` INTEGER NOT NULL,
    `DataNasc` DATETIME(3) NOT NULL,
    `genero` VARCHAR(1) NOT NULL,
    `morada` VARCHAR(100) NOT NULL,
    `telefone` INTEGER NOT NULL,
    `idade` INTEGER NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `id_turma` INTEGER NOT NULL,
    `id_documento` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `professor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `BI` VARCHAR(100) NOT NULL,
    `telefone` INTEGER NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `id_multipla` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `documento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipodedocumentos` VARCHAR(100) NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `disciplina` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_disciplina` VARCHAR(100) NOT NULL,
    `id_multipla` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `turma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `id_multipla` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `curso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `duração` DATETIME(3) NOT NULL,
    `coordenador` VARCHAR(100) NOT NULL,
    `id_faculdade` INTEGER NOT NULL,
    `id_multipla` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `avaliacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TipodeAvalição` VARCHAR(100) NOT NULL,
    `nota` INTEGER NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `id_professor` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pagamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `datadoPagamento` DATETIME(3) NOT NULL,
    `valor` INTEGER NOT NULL,
    `metodo_de_pagamento` VARCHAR(100) NOT NULL,
    `id_monumento` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fatura` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nr_fatura` INTEGER NOT NULL,
    `dataEMISSÃO` DATETIME(3) NOT NULL,
    `Valor_Total` INTEGER NOT NULL,
    `id_pagamento` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `recibo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `NrRecibo` INTEGER NOT NULL,
    `dataEmissão` DATETIME(3) NOT NULL,
    `id_pagamento` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notificacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_notificacoes` VARCHAR(100) NOT NULL,
    `data_envio` DATETIME(3) NOT NULL,
    `informacao` VARCHAR(100) NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `presenca` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data_presenca` DATETIME(3) NOT NULL,
    `status_presenca` VARCHAR(1) NOT NULL,
    `id_aluno` INTEGER NOT NULL,
    `id_disciplina` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cargo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `descricao` VARCHAR(100) NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `historico_matricula` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_aluno` INTEGER NOT NULL,
    `id_matricula` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `faculdades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipos_faculdades` VARCHAR(100) NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `monumento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referencia` INTEGER NOT NULL,
    `propina` INTEGER NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `relatorio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_relatorio` VARCHAR(100) NOT NULL,
    `data_geracao` DATETIME(3) NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `matricula` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ano_letivo` INTEGER NOT NULL,
    `data_matricula` DATETIME(3) NOT NULL,
    `estado_matricula` VARCHAR(100) NOT NULL,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `multipla` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `aluno` ADD CONSTRAINT `aluno_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aluno` ADD CONSTRAINT `aluno_id_documento_fkey` FOREIGN KEY (`id_documento`) REFERENCES `documento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `professor` ADD CONSTRAINT `professor_id_fkey` FOREIGN KEY (`id`) REFERENCES `multipla`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `disciplina` ADD CONSTRAINT `disciplina_id_fkey` FOREIGN KEY (`id`) REFERENCES `multipla`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turma` ADD CONSTRAINT `turma_id_fkey` FOREIGN KEY (`id`) REFERENCES `multipla`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `curso` ADD CONSTRAINT `curso_id_faculdade_fkey` FOREIGN KEY (`id_faculdade`) REFERENCES `faculdades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `curso` ADD CONSTRAINT `curso_id_fkey` FOREIGN KEY (`id`) REFERENCES `multipla`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliacao` ADD CONSTRAINT `avaliacao_id_professor_fkey` FOREIGN KEY (`id_professor`) REFERENCES `professor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pagamento` ADD CONSTRAINT `pagamento_id_monumento_fkey` FOREIGN KEY (`id_monumento`) REFERENCES `monumento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fatura` ADD CONSTRAINT `fatura_id_pagamento_fkey` FOREIGN KEY (`id_pagamento`) REFERENCES `pagamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `recibo` ADD CONSTRAINT `recibo_id_pagamento_fkey` FOREIGN KEY (`id_pagamento`) REFERENCES `pagamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `presenca` ADD CONSTRAINT `presenca_id_fkey` FOREIGN KEY (`id`) REFERENCES `aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `presenca` ADD CONSTRAINT `presenca_id_disciplina_fkey` FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historico_matricula` ADD CONSTRAINT `historico_matricula_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historico_matricula` ADD CONSTRAINT `historico_matricula_id_matricula_fkey` FOREIGN KEY (`id_matricula`) REFERENCES `matricula`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
