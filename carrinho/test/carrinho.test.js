import Carrinho from "../carrinho.js";
import Item from "../item.js";

describe('Testes do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
  });
});
