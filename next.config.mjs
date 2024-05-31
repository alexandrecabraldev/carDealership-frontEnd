/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol:'https',
            hostname: "images.prd.kavak.io"
        },
        {
            protocol: 'https',
            hostname: 'quatrorodas.abril.com.br', 
        },
        {
            protocol: 'https',
            hostname: 'www.google.com', 
        },
        {
            protocol: 'https',
            hostname: 'www.kavak.com', 
        },
        
    ],
    }
};

export default nextConfig;

// agora me ajude a escrever o readme do meu frontend, vou te dar as informações e você me ajuda:
// na rota home /, vai ser listada todos os carros com todas as informações pegas do backend.
// na rota login /login, será pedido email e a senha para entrar no sistema.
// dentro da rota /login tem um link que quando clicado te enviará para a rota /account, essa rota serve para criar um novo usuário.
// a rota /register é a rota de criação de um novo automóvel no banco de dados.
// informações adicionais: a url da imagem do carro deve ser tirados apenas dos locais registrados do arquivo next.config ou o next não conseguira encontra-lo, ou então adicionar um novo hostname nesse padrão:
// protocol:'https',
// hostname: "images.prd.kavak.io"
// para que o next consiga lidar com a url,