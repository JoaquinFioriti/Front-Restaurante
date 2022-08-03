import axios from "axios";

// const API_BASE_URL = "http://localhost:8080/api/v1/";

const API_BASE_URL = "https://restaurante-crud.herokuapp.com/api/v1/";

class RecetarioService {
  saveItem(recetario) {
    return axios.post(API_BASE_URL.concat("recetarios"), recetario);
  }

  getItems() {
    return axios.get(API_BASE_URL.concat("recetarios"));
  }

  getSubItemFromSelectedItem(id) {
    return axios.get(`${API_BASE_URL}recetarios/${id}/comidas`);
  }
}
class RecetaService {
  saveItem(receta) {
    return axios.post(API_BASE_URL.concat("recetas"), receta);
  }

  getItems() {
    return axios.get(API_BASE_URL.concat("recetas"));
  }

  getSubItemFromSelectedItem(id) {
    return axios.get(`${API_BASE_URL}recetas/${id}/ingredientes`);
  }
}

class IngredienteService {
  saveItem(ingrediente) {
    return axios.post(API_BASE_URL.concat("ingredientes"), ingrediente);
  }

  getItems() {
    return axios.get(API_BASE_URL.concat("ingredientes"));
  }
}

export { RecetaService, RecetarioService, IngredienteService };
