import './styles/reset.css';
import './styles/main.css';

const guras = ['https://hololive.hololivepro.com/wp-content/uploads/2024/05/Gawr-Gura_pr-img_01.png',
  'https://hololive.hololivepro.com/wp-content/uploads/2020/07/Gawr-Gura_pr-img_02.png',
  'https://hololive.hololivepro.com/wp-content/uploads/2020/07/Gawr-Gura_pr-img_03.png',
  'https://hololive.hololivepro.com/wp-content/uploads/2020/07/Gawr-Gura_pr-img_04.png',
  'https://hololive.hololivepro.com/wp-content/uploads/2020/07/Gawr-Gura_pr-img_05.png',
  'https://hololive.hololivepro.com/wp-content/uploads/2020/07/Gawr-Gura_pr-img_06.png',
  'https://hololive.hololivepro.com/wp-content/uploads/2020/07/Gawr-Gura_pr-img_07.png']

const imagemContainer = document.querySelector<HTMLDivElement>('#imagem')!
const imagemElement = imagemContainer.querySelector<HTMLImageElement>('img')!
const seletor = document.querySelector<HTMLSelectElement>('#seletor')!
const escolhi = document.querySelector<HTMLInputElement>('#pepe')!
const resetar = document.querySelector<HTMLInputElement>('#reset')!;
let imagemRecebida = '';

const CatAPI = 'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
const DogAPI = 'https://dog.ceo/api/breeds/image/random';

async function carregarImagemInicial() {
  try {
    const indiceAleatorio = Math.floor(Math.random() * guras.length);
    const url = guras[indiceAleatorio];
    imagemElement.src = url;
  } catch (error) {
    console.error('Erro ao carregar imagem inicial:', error);
  }
}

async function chamarAPI(api: string) {
  const resultado = await fetch(api);
  const corpo = await resultado.json();

  if (api === CatAPI) {
    imagemRecebida = corpo[0].url;
  } else if (api === DogAPI) {
    imagemRecebida = corpo.message;
  }

  console.log(imagemRecebida);
  return imagemRecebida;
}

async function carregarImagem(api: string) {
  try {
    const url = await chamarAPI(api);
    imagemElement.src = url;
  } catch (error) {
    console.error('Erro ao carregar imagem:', error);
  }
}

carregarImagemInicial();

escolhi.addEventListener('click', () => {
  const animalSelecionado = seletor.value;
  if (!animalSelecionado) {
    alert('Por favor, selecione um animal primeiro!');
    return;
  }
  const apiUrl = animalSelecionado === 'dog' ? DogAPI : CatAPI;
  carregarImagem(apiUrl);
});

seletor.innerHTML = `
  <option value="" disabled selected>Selecione qual animal quer ver</option>
  <option value="cat">Gato</option>
  <option value="dog">Cachorro</option>
`;

resetar.addEventListener('click', () => {
  const indiceAleatorio = Math.floor(Math.random() * guras.length);
  imagemElement.src = guras[indiceAleatorio];
  seletor.value = '';
});