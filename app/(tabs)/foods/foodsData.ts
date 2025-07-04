// talkPal/app/data/foodsData.ts

export interface FoodItem {
  nome: string;
  imagem: any;
}

export const alimentosOriginal: FoodItem[] = [
  { nome: 'Alface', imagem: require('../../../assets/images/foods/alface.png') },
  { nome: 'Arroz', imagem: require('../../../assets/images/foods/arroz.png') },
  { nome: 'Arroz com Feijão', imagem: require('../../../assets/images/foods/arrozComFeijao.png') },
  { nome: 'Banana', imagem: require('../../../assets/images/foods/banana.png') },
  { nome: 'Batatas Fritas', imagem: require('../../../assets/images/foods/batatasFritas.png') },
  { nome: 'Carne de Boi', imagem: require('../../../assets/images/foods/carneDeBoi.png') },
  { nome: 'Carne Moída', imagem: require('../../../assets/images/foods/carneMoida.png') },
  { nome: 'Cenoura', imagem: require('../../../assets/images/foods/cenoura.png') },
  { nome: 'Couve-flor', imagem: require('../../../assets/images/foods/couve-flor.png') },
  { nome: 'Couve', imagem: require('../../../assets/images/foods/couve.png') },
  { nome: 'Empanado de Boi', imagem: require('../../../assets/images/foods/empanadodeBoi.png') },
  { nome: 'Empanado de Frango', imagem: require('../../../assets/images/foods/empanadoDeFrango.png') },
  { nome: 'Empanado de Peixe', imagem: require('../../../assets/images/foods/empanadoDePeixe.png') },
  { nome: 'Espinafre', imagem: require('../../../assets/images/foods/espinafre.png') },
  { nome: 'Feijão', imagem: require('../../../assets/images/foods/feijao.png') },
  { nome: 'Frango', imagem: require('../../../assets/images/foods/frango.png') },
  { nome: 'Hambúrguer', imagem: require('../../../assets/images/foods/hamburguer.png') },
  { nome: 'Hambúrguer com Batatas Fritas', imagem: require('../../../assets/images/foods/hamburguerComBatatasFritas.png') },
  { nome: 'Hambúrguer Simples', imagem: require('../../../assets/images/foods/HamburguerSimples.png') },
  { nome: 'Hot Dog', imagem: require('../../../assets/images/foods/hotDog.png') },
  { nome: 'Kiwi', imagem: require('../../../assets/images/foods/kiwi.png') },
  { nome: 'Lanche', imagem: require('../../../assets/images/foods/lanche.png') },
  { nome: 'Laranja', imagem: require('../../../assets/images/foods/laranja.png') },
  { nome: 'Maçã', imagem: require('../../../assets/images/foods/maca.png') },
  { nome: 'Macarrão', imagem: require('../../../assets/images/foods/macarrao.png') },
  { nome: 'Manga', imagem: require('../../../assets/images/foods/manga.png') },
  { nome: 'Melancia', imagem: require('../../../assets/images/foods/melancia.png') },
  { nome: 'Melão', imagem: require('../../../assets/images/foods/melao.png') },
  { nome: 'Milho', imagem: require('../../../assets/images/foods/milho.png') },
  { nome: 'Morango', imagem: require('../../../assets/images/foods/morango.png') },
  { nome: 'Ovo Estrelado', imagem: require('../../../assets/images/foods/ovoEstrelado.png') },
  { nome: 'Pão de Hambúrguer', imagem: require('../../../assets/images/foods/paoDeHamburguer.png') },
  { nome: 'Pêra', imagem: require('../../../assets/images/foods/pera.png') },
  { nome: 'Pizza', imagem: require('../../../assets/images/foods/pizza.png') },
  { nome: 'Salsicha', imagem: require('../../../assets/images/foods/salsicha.png') },
  { nome: 'Sanduíche', imagem: require('../../../assets/images/foods/sanduiche.png') },
  { nome: 'Sopa', imagem: require('../../../assets/images/foods/sopa.png') },
  { nome: 'Sopa de Carne de Boi', imagem: require('../../../assets/images/foods/sopaDeCarneDeBoi.png') },
  { nome: 'Sopa de Frango', imagem: require('../../../assets/images/foods/sopaDeFrango.png') },
  { nome: 'Sopa de Letrinhas', imagem: require('../../../assets/images/foods/sopaDeLetrinhas.png') },
  { nome: 'Sopa de Macarrão', imagem: require('../../../assets/images/foods/sopaDeMacarrao.png') },
  { nome: 'Sopa de Massa', imagem: require('../../../assets/images/foods/sopaDeMassa.png') },
  { nome: 'Sopa de Peixe', imagem: require('../../../assets/images/foods/sopaDePeixe.png') },
  { nome: 'Tomate', imagem: require('../../../assets/images/foods/tomate.png') },
  { nome: 'Uvas', imagem: require('../../../assets/images/foods/uvas.png') },
];
// Função para converter nomes para maiúsculas
export const converterNomesParaMaiusculas = (lista: FoodItem[]): FoodItem[] => {
  return lista.map(item => ({
    ...item,
    nome: item.nome.toUpperCase(),
  }));
};
// Exportando a lista já convertida
export const alimentos = converterNomesParaMaiusculas(alimentosOriginal);