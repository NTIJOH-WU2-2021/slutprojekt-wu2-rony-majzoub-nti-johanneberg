import config from '@/appConfig.js';
class ApiHelper {

    static async get(url) {
        let result = await fetch(url, {
            method: "GET",
        });
        if (result.ok) {
            return result.json();
        }
        else { console.log(result.status) }
    }

    static async getAllBreeds() {
        let result = await this.get("https://api.thedogapi.com/v1/breeds");
        return result;
    }

    static async getIngredients(search) {
        let ingredients = await this.get(`https://api.spoonacular.com/food/ingredients/search?query=${search}&apiKey=${config.apiKey}&metaInformation=true`);
        console.log(ingredients.length)
        var result = [];
        for (let idx = 0; idx < ingredients.length; idx++) {
            const element = ingredients[idx];
            let temp = await this.get(`https://api.thedogapi.com/v1/images/${element.reference_image_id}`)
            result.push(temp)
        }
        return result;
    }

    static async getPage(page, order, type) {
        let result = await this.get(`https://api.thedogapi.com/v1/images/search?limit=15&page=${page}&order=${order}&mime_types=${type}`);
        return result;
    }
}
this.$bus.on('searchIngredient', (search) => {
    const url = `https://api.spoonacular.com/food/ingredients/search?query=${search}&apiKey=${config.apiKey}&metaInformation=true`;
    fetch(url).then((response) => {
      if (!response.ok) {
        // Ifall vi inte fick en 2xx response, avbryt kedjan här (reject)
        throw new Error("No matching ingredient.");
      } else {
        // Annars konverterar vi svaret till ett JS objekt
        return response.json();
      }        
    }).then((IngredientInfo) => {
      console.log(IngredientInfo);
      this.Ingredients = IngredientInfo;
      this.showIngredients = true;
    }).catch((reason) => {
      alert(reason);
    })
  })

export default ApiHelper;