<h1> Mario Kart.JS</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<input type="checkbox" id="jogadores-item" />
<label for="jogadores-item">O Computador deve receber todos os  personagens para disputar a corrida em um objeto cada</label>
<ul>
<input type="checkbox" id="inicio-corrida" /> <label for="inicio-corrida">se for a primeira pista o sorteio cada carro receberá uma numeração de uma a seis, assim está será a sua pontuação</label></li>
<input type="checkbox" id="inicio-corrida-pista" /> <label for="inicio-corrida-pista">Quando iniciar o jog vai dizer quantos kilometros tem a pista ao todo</label></li>
</ul>
<input type="checkbox" id="inicio-corrida-semaforo" /> <label for="inicio-corrida-semaforo">a corrida só pode iniciar depois do semaforo ficar verde</label></li>
</ul>

<b>Pistas:</b>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">Os personagens irão correr numa pista aleatória com um tamanho aleatório</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma reta ou curva</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item"> a cada rodada um valor de 1  a 10 vai ser somado a velocidade e de 1 a 5 manobrabilidade e a soma das duas  vão mostrar quantos kilometros o personagem percorreu naquela rodada</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">na curva, recebe dois pontos  mais quando  a manobrabrilidade for maior que a velocidade</label></li>
    </ul>
  </li>
</ul>

<ul>
      <li><input type="checkbox" id="item-1" /> <label for="item-1"> a cada 10 kilometros  tem um item o personagem pode pegar ou não</label></li>
      <li><input type="checkbox" id="item-2" /> <label for="item-2">quando o persagem passar pelo item será lançado um dado se for par o persongem pega um item aleatório ser for impar não pega</label></li>
       <li><input type="checkbox" id="item-3" /> <label for="item-3">se o personagem ter algum item e for atingido ele perde o item</label></li>
      </li>
       <li><input type="checkbox" id="item-3" /> <label for="item-3">se o personagem tem algum item  a cada rodada será lançada um dado, ser der par o item será lançado se for impar não</label></li>
      </li>
       <li><input type="checkbox" id="item-4" /> <label for="item-3">se o personagem for atingido ele para de correr e dever ficar aguardando a próxima rodada para continuar correndo</label></li>
      </li>
      <ul>
        <li><input type="checkbox" id="item-pego-1" /> <label for="item-pego-1"> 
            os item serão, bomba, banana, tartaruga, tartaruga voadora.
        </label></li>
        <li><input type="checkbox" id="item-pego-2" /> <label for="item-pego-2"> 
            os item serão, bomba, banana, tartaruga, tartaruga voadora.
        </label></li>
        <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">na curva, recebe dois pontos  mais quando  a manobrabrilidade for maior que a velocidade</label></li>
    </ul>
    </li>
</ul>

<b>Condição de vitória:</b>

<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">Vence quem chegar primeiro</label>

<b>Crédito/b>
<label for="link">Projeto inicial da DIO professor Felipe Aguiar<</label>
(https://github.com/digitalinnovationone/formacao-nodejs/tree/main/03-projeto-mario-kart)
