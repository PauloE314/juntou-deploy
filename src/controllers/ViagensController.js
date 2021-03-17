const Viagens = require('../models/Viagens');
const PassageirosViagens = require('../models/PassageirosViagens');
const Passageiro = require('../models/UserPassageiro');
const Bairro = require('../models/Bairros');
const Desembarque = require('../models/Desembarque');
const Embarque = require('../models/Embarque');
const {Op} =require('sequelize');
const { create } = require('../models/Viagens');






module.exports = {
    async store(req, res) {
        const {
           horario,
            pessoas
        } = req.body;
        const { id_user, id_embarque,id_desembarque,id_bairro } = req.params;

        const tripTrue = await Viagens.findOne({
            where:{
            horario,
            id_bairro,

            pessoas:{
                [Op.lt]: 4,
            }
           }});
           console.log("==============================================")
            async function nameTrip(){
               
                const embark = await Embarque.findByPk(id_embarque);
                const disembark = await Desembarque.findByPk(id_desembarque);
                const nameEmbarkDisembark =  embark.nome+"-"+disembark.nome;
                return(nameEmbarkDisembark);


            }
        if(tripTrue){
            const people = tripTrue.pessoas + 1;
            const trip = await Viagens.update({ pessoas:people  }, { where: { id: tripTrue.id } });
            return res.json({people});
        }else{
            const nome = await nameTrip();
            const createTrip = await Viagens.create({
                nome:nome,
                id_desembarque,
                id_embarque,
                id_bairro,
                pessoas:1,
                horario,

            });
            return res.json(createTrip);
        }

       

           
        


    },
    async listAll(req, res) {
        const userslist = await Viagens.findAll();
        console.log(req.userId);

        return res.json(userslist);

    },
    async avaible(req,res){
        const avaible = await Viagens.findAll({where:{ 
            pessoas:{
            [Op.lt]: 4,
        }}});

        return res.json(avaible);
    }

}
