const avanca=document.query ('.btn-proximo');
const reiniciarBtn=document.getElementById('btn-reiniciar');


avanca.forEach(button => {
    button.addEventlistener('click', function(){
        const atual=document.querySelector('.ativo');
        const proximoPasso='passo-'+this.getAttribute('data-proximo')

        atual.classilist.remove('ativo')
        const proximoElemento=document.getElementsById(proximoPasso)

        if(proximoElemento){
            proximoElemento.classlist.add('ativo');
        }else{
            console.error(`Elemento com ID "${proximoPasso}" não encontrado`)
        }
    })
})