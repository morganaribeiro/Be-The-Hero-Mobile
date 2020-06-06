import React from 'react';
import Routes from './src/routes';
import 'intl/locale-data/jsonp/pt-BR';


// React - <div>, <span>, <p> e <h1> - cada uma dessas 
// tags tem um significado semântico diferente na Web.
/**
 * No React Native podemos passar a usar 
 * para tudo <div>, pois no RN não temos a
 * mesma tag do que no HTML.
 * O react Native tem uma classe chamada StyleSheet que tem o método chamado create
 * que com ela conseguimos realizar a criação dos nossos estilos.
 * Por padrão o React Native tem o display: flex;
 * Estilização - diferença de 'camel casing', por exemplo, 'backgroundColor' e não 'background-color' usado no React
 * e valores que não são números precisam ser delimitado por aspas simples ou dupla, por exemplo, '#7159c1' ou 'center';
 * Se colocar color: '#FFF' na Web (React) o text ficaria branco, porém
 * não existe herança de estilo no React Native, tem que aplicar o próprio estilo em text, ou seja,
 * não pode passar uma estilização do Componente acima (Container) para o componente filho. 
 * No React Native não existe de Herança de estilo.
 * Deve ter uma estilização própria por elemento, ou contrário do HTML podemos aplicar em vários componentes ao mesmo tempo.
*/ 
export default function App() {
  return (
      <Routes/>
  )
}
