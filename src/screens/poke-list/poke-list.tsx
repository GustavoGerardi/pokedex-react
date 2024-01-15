import { useEffect, useState } from "react";
import { Card } from "../../components/card/card";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Wrapper, WrapperFooter, WrapperList } from "./poke-list.styles";
import { PokeListService } from "../../service/poke-list.service";

export const PokeList = () => {
  const [poke, setPoke] = useState<any>();

  useEffect(() => {
    const pokeListService = new PokeListService()
    
    pokeListService.getAllPokes().then((response) => {
      setPoke(response);
    });
  }, [])

  console.log(poke.id)

  return (
    <Wrapper>
      <Header name="Pokédex" />
      <WrapperList>
        <Card
          title="Título"
          message="A Pokédex, uma ferramenta icônica no universo Pokémon, desempenha um papel crucial na jornada de treinadores e na compreensão do vasto mundo de criaturas misteriosas. Sua importância vai além de ser apenas um dispositivo eletrônico - é uma peça fundamental para explorar, aprender e conectar-se ao reino dos Pokémon."
          colorBackground="#F8F8FF"
        />
        <Card
          title="Título"
          message="A Pokédex, uma ferramenta icônica no universo Pokémon, desempenha um papel crucial na jornada de treinadores e na compreensão do vasto mundo de criaturas misteriosas. Sua importância vai além de ser apenas um dispositivo eletrônico - é uma peça fundamental para explorar, aprender e conectar-se ao reino dos Pokémon."
          colorBackground="#F8F8FF"
        />
        <Card
          title="Título"
          message="A Pokédex, uma ferramenta icônica no universo Pokémon, desempenha um papel crucial na jornada de treinadores e na compreensão do vasto mundo de criaturas misteriosas. Sua importância vai além de ser apenas um dispositivo eletrônico - é uma peça fundamental para explorar, aprender e conectar-se ao reino dos Pokémon."
          colorBackground="#F8F8FF"
        />
        <Card
          title="Título"
          message="A Pokédex, uma ferramenta icônica no universo Pokémon, desempenha um papel crucial na jornada de treinadores e na compreensão do vasto mundo de criaturas misteriosas. Sua importância vai além de ser apenas um dispositivo eletrônico - é uma peça fundamental para explorar, aprender e conectar-se ao reino dos Pokémon."
          colorBackground="#F8F8FF"
        />
        <Card
          title="Título"
          message="A Pokédex, uma ferramenta icônica no universo Pokémon, desempenha um papel crucial na jornada de treinadores e na compreensão do vasto mundo de criaturas misteriosas. Sua importância vai além de ser apenas um dispositivo eletrônico - é uma peça fundamental para explorar, aprender e conectar-se ao reino dos Pokémon."
          colorBackground="#F8F8FF"
        />
      </WrapperList>
      <WrapperFooter>
        <Footer />
      </WrapperFooter>
    </Wrapper>
  );
};
