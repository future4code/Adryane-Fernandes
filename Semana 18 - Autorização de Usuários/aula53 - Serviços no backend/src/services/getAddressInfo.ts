import axios from "axios";
import { address } from "../types/types";

async function getAddressInfo(cep: string): Promise<address | null> {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    const address: address = {
      city: response.data.localidade,
      neighborhood: response.data.bairro,
      street: response.data.logradouro,
      state: response.data.uf,
    };

    return address;
  } catch (error) {
    return null;
  }
}

export default getAddressInfo;
