const ownerNumber = ["557998295668@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '557998295668' 
// mude para seu numero

var gimagenotregister = false
// quando não há comando registrado o bot procura no google image

var sgooglenotregister = false
// quando não há comando registrado o bot procura uma pesquisa no google

const antinewchatmsg = 'O anti chat novo está ativado e você não é meu proprietário, logo será bloqueado'
//mensagem do antinewchat

const urlaudiomenu = 'https://b.top4top.io/m_19960s5f30.mp3'
// link direto da url do audio

const antipvmsg = '*🚫 PV BLOQUEADO 🚫*'
//mensagem do antipv

const delayantispamcmd = 3
//tempo de delay do antispamcmd (medido por segundos)

const msgwelcomeimg = (numero, groupname) => {
    return `Seja bem-vindo ${numero}\n\nEscreve ${prefix}menu para lista de comandos`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `VLW, NÃO FAZ FALTA. ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname, battery) => {
    return `MENU DO BOT COM 434 COMANDOS, BATERIA: ${battery}`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const titlemenumsgimg = 'BEM-VINDO'
//Título no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundmenuimg = `https://i.imgur.com/J7aBqBu.jpg`
//Link direto da imagem de fundo TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundwelcomeimg = `https://i.imgur.com/J7aBqBu.jpg`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundbyeimg = `https://i.imgur.com/2jf4VPH.jpg`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'c9cf132756510ad171587fb5a5a0389f'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = '🌹⋆❝̶̬🍷𝐿𝐴𝑈𝐴𝑁-𝐷𝑂𝑀𝐼𝑁𝐴🍷❞̶̬⋆🌹\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '*Se fudeu otário, agora vou te ignorar🤣🤣*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Este comando esta bloqueado contate o propitetário do bot para saber o porquê*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Corra otário, estarei te caçando*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*Vai se foder porra isso é proibido fdp*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm pornozinho, já sabe né? vai ser kibado'
// mensagem de ban no antiporn

const adminmsgporn = '*oh arrombado para de mandar pornô'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Corra otário, estarei te caçando'
// mensagem de ban no antilink

const adminmsglink = 'Cuidado ai pourra mandando link assim do nada'
// mensagem de quando adm manda link

const adminmsgpalavra = 'isso esta na lista das palavras proibidas pelo bot'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Palavra proibida? Já sabe né'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 0
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, aceite esse café ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, espero que tenha tido um bom dia ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Deu erro, tente novamente :/'
// mensagem de erro

const notregister = `*Comando não registrado, escreva ${prefix}menu para ver a lista de comandos*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'Ain vindo de você é um grande elogio 👉🏽👈🏽😳'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'KKKKKKK TA MIM ACHANDO COM CARA DE SEU PAI É?'
const cadebot = 'OLHA EU AQUI FDP'
const botfdp = 'FDP e você seu lixo, eu deitar você na porrada enquanto você coça o cú você vai ver'
const botgostoso = 'Sou mesmo otário'
const botfofo = 'Uiui chupa meu pau'
const botbaianor = 'KKKKKKK MIM DA UMA REDE? 👉🏽👈🏽😳'
const botcorno = 'SAI DAQUI JOGADOR DE FOGAREL GRATUITO, KKKKKKK COMPRA PECKZINHO DE E-GRILO'
const botputa = 'KKKKKKK TA VENDO SUA MÃE AQUI???'
const botgay = 'KKKKKK Ala acha que sou espelho 🤣🤣🤣🤣🤣🤣'
const botviado = 'Ala o traveco de 2 reais 🤣🤣🤣'
const numbotfeio = 'Sou teu irmão fdp 🤣🤣🤣🤣'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ ESPERA AI ESTOU FAZENDO✋🏽🐊⌛',
    success: '✔️ SUCESSO MEU PEIXE ✔️',
    error: {
        stick: '❌ DEU ERRO, TENTE NOVAMENTE. SE NÃO FUNCIONAR DESISTA! ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ ISSO É UM GRUPO? NÃO NÉ PORRA ❌',
        ownerG: '❌ SÓ PODE USAR NO GRUPO PROPRIETÁRIO ❌',
        ownerB: '❌ SÓ 𠫓𝑅𝐸𝑌𝑍𝐼𝑁𝐻𝑂 𝐷𝑂 𝐻𝑌𝑃𝐸𠫓 ❌',
        admin: '❌ CALA BOCA OTÁRIO SÓ ADM PODE USAR ESSE COMANDO ❌',
        Badmin: '❌ Esse comando só é liberado quando eu virar ADM ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:𠫓𝑅𝐸𝑌𝑍𝐼𝑁𝐻𝑂 𝐷𝑂 𝐻𝑌𝑃𝐸𠫓\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=557998295668:+55 79 9829-5668\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro
exports.urlaudiomenu = urlaudiomenu
exports.delayantispamcmd = delayantispamcmd
exports.antinewchatmsg = antinewchatmsg
exports.antipvmsg = antipvmsg
exports.backgroundbyeimg = backgroundbyeimg
exports.backgroundwelcomeimg = backgroundwelcomeimg
exports.backgroundmenuimg = backgroundmenuimg
exports.titlemenumsgimg = titlemenumsgimg
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber