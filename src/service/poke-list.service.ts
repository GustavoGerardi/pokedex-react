import { api } from "./api";

export class PokeListService {
  getPoke = async (name: any) => {
    const response = await api.get(`/pokemon/${name}`);
    return response.data;
  };

  getAllPokes = async () => {
    const response = await api.get("/pokemon?limit=150&offset=0");
    return response.data.results;
  };

  getPokemonid = () => {
    
  }
}
