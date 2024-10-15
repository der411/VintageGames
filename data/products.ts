// data/products.ts
export interface Product {
    id: string;
    categoryId: string;
    name: string;
  }
  
  export const PRODUCTS: Product[] = [
    { id: 'a', categoryId: '1', name: 'Roi Lion' },
    { id: 'b', categoryId: '1', name: 'Pocahontas' },
    { id: 'c', categoryId: '1', name: 'Sonic' },
    { id: 'd', categoryId: '1', name: 'Chocapic' },
    { id: 'e', categoryId: '2', name: 'Oeil de chat' },
    { id: 'f', categoryId: '2', name: 'Pépite' },
    { id: 'g', categoryId: '2', name: 'Laiteu' },
    { id: 'h', categoryId: '2', name: 'Arraignée' },
    { id: 'i', categoryId: '2', name: 'Paon' },
    { id: 'j', categoryId: '3', name: 'Nintendo' },
    { id: 'k', categoryId: '3', name: 'Mega Drive' },
    { id: 'l', categoryId: '4', name: '2 x 2' },
    { id: 'm', categoryId: '4', name: '3 x 3' },
    { id: 'n', categoryId: '4', name: '4 x 4' },
    { id: 'o', categoryId: '5', name: 'Yoyo' },
    { id: 'p', categoryId: '5', name: 'Tamagotchi' },
    { id: 'q', categoryId: '5', name: 'Toupie' },
  ];