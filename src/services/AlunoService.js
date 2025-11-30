const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
const Aluno = prisma.aluno

const createAluno = async(data) =>{

    const result = await Aluno.create({
        data:{
             nome: data.nome,
             id_aluno: data.id_aluno,
             id_matricula: data.id_matricula,
             idade: data.idade,
             NrMatricula: data.NrMatricula,
             genero: data.genero,
             morada: data.morada,
             telefone: data.telefone,
             email: data.email
            
        }
    })
    return result
}

const getAluno = async() =>{

    const result = await Aluno.findMany()
    return result
}

 const getAlunoById = async(id) =>{
    const result = await Aluno.findFirst({where:{id}})
    return result
}
 const updateAluno = async(data, id) =>{
    const result = await Aluno.update({
        data:{
              nome: data.nome,
             id_aluno: data.id_aluno,
             id_matricula: data.id_matricula,
             idade: data.idade,
             NrMatricula: data.NrMatricula,
             genero: data.genero,
             morada: data.morada,
             telefone: data.telefone,
             email: data.email
            
        },
        where:{id}  
    })
    return result
}

const deleteAluno = async(id) =>{
    const result = await Aluno.delete({where:{id}})
    return result
}

module.exports ={
    createAluno,
    getAluno,
    getAlunoById,
    deleteAluno,
    updateAluno
}