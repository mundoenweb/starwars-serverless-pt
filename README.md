# API STARWARS SERVERLESS

## Ejecutar proyecto en Entorno local

- Ejecutar el comando ( npm run local ) para correr el proyecto en modo local con serverless 

### EndPoints

- /swapi/:resource GET
- /swapi/:resource/:id GET trae un recurso en especifico

- /starships  (POST): crea una nave interestelar
```json
{
    "name": "Sentinel landing craft _ 14",
    "model": "Sentinel-class landing craft",
    "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
    "cost_in_credits": "240000",
    "length": "38",
    "max_atmosphering_speed": "1000",
    "crew": "5",
    "passengers": "75",
    "cargo_capacity": "180000",
    "consumables": "1 month",
    "hyperdrive_rating": "1.0",
    "MGLT": "70",
    "starship_class": "landing craft",
    "pilots": ["rommer"],
    "films": ["un nuevo tiempo"]
}
```
- /starships  (GET): obtiene todas las naves interestelares
- /starships:id  (GET): obtiene una nave interestelar
- /starships:id  (DELETE): elimina una nave interestelar

## Observacion sobre endpoints swapi

Todos los endpoint /swapi tienen las mismas posibilidades que la api original de SWAPI, ejemplos

- /swapi/films 
- /swapi/people
- /swapi/planets
- /swapi/species
- /swapi/starships 
- /swapi/vehicles 
- /swapi/people?page=4
- /swapi/people?search=dar
- /swapi/people?page=4&format=wookiee 
- /swapi/people/1 
- /swapi/people/1&format=wookiee 
