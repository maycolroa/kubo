![logo](https://user-images.githubusercontent.com/85509333/201572090-77652e89-a4da-4f51-9e8b-13d035fc3c01.png)
# Desarrollador Backend PRUEBA TÉCNICA

# VISIÓN GENERAL
Se requiere construir una API Rest que permita gestionar una base de datos entre usuarios, películas y categorías.

## ESPECIFICACIONES: ##
```
- Tener datos precargados de categorías en la base de datos (Terror,Suspenso,Drama,Comedia)
- Se requiere poder crear un usuario
- Se requiere poder crear una película con su respectiva categoría
- Se requiere un servicio para poder obtener un listado de películas 
- Debe permitir filtrar las películas por título y categoría.
- Debe contener paginación
- Debe permitir ordenar las películas por fecha de estreno de la más reciente a la más  antigua.
- Se requiere un endpoint que permita obtener el listado de novedades (una película es categorizada como novedad si su fecha de estreno es inferior a tres semanas)
- Se requiere un endpoint que permita marcar como vista una película por determinado usuario.
- Se requiere un endpoint que permita listar usuarios con las películas que han visto.

```

## REQUERIMIENTOS ##
```
![req](https://user-images.githubusercontent.com/85509333/201574513-3278a695-9be4-4675-a972-567b361273d1.png)

```


## Instalar ##
```
- hacer el comando de clonar repositorio "git clone https://github.com/maycolroa/kubo.git
- descargar los requisitos mencionado (nodemon, express, npm, etc)
- ejecutar el comando de inicio npm start
![run](https://user-images.githubusercontent.com/85509333/201575614-cbb3c178-f942-4be3-8f75-c9b41191a15c.png)

```


## comentar a mongoDB y crear usuarios y peliculas ##
```
![coneccion](https://user-images.githubusercontent.com/85509333/201578325-0cbc77a4-eab1-430e-a0ab-e84b645d9b33.png)

![data](https://user-images.githubusercontent.com/85509333/201578606-e4b4fd38-20ba-4482-abd6-448a846c98fb.png)

```

## crear modelos de las tablas ##
```

![modelo tablas](https://user-images.githubusercontent.com/85509333/201578794-e9df49a7-1817-497a-80b7-d104b493a458.png)

![modelo users](https://user-images.githubusercontent.com/85509333/201579001-a8a28562-fbae-44f6-b770-ef2eab982f4b.png)

```


## implementacion Heroku ##
```
![heroku](https://user-images.githubusercontent.com/85509333/201579568-514dd781-9ac3-4068-a0b0-42f3fa29150f.png)

https://kubo-2020.herokuapp.com/
```

## request ##
```
- request para crear eliminar ver actualizar  organizar usuarios y peliculas

![crear usuario](https://user-images.githubusercontent.com/85509333/201575954-c81d392d-83ea-4d5c-befe-452c3d80e721.png)

![eliminar peli](https://user-images.githubusercontent.com/85509333/201576288-299ed7c4-2c88-4d93-b9df-937c646086c2.png)

![crear usuario_1](https://user-images.githubusercontent.com/85509333/201576630-0cbea102-a5a0-4935-955c-b7828d023968.png)

![buscar una pelicula](https://user-images.githubusercontent.com/85509333/201577002-710596e0-c9d9-48a8-b058-444a18f270a9.png)

![buscar usuario](https://user-images.githubusercontent.com/85509333/201577142-d61af864-3963-4eae-abfa-8fe3917ade1b.png)

![buscar todas las peliculas](https://user-images.githubusercontent.com/85509333/201577489-f5810a49-2221-467c-b08e-31805d185668.png)

![buscar todos los usuarios](https://user-images.githubusercontent.com/85509333/201577616-cf6e8ff7-79ab-440e-8897-0aef4528e4cd.png)

![modificar informacion](https://user-images.githubusercontent.com/85509333/201577923-85b4004c-12a8-4796-8564-1319c1eaee1d.png)

![modifi](https://user-images.githubusercontent.com/85509333/201578058-c7ab2658-86d4-4ec1-98cd-afcf79b75385.png)


```

## Authors
```
* Maycol David Roa [@maycolroa](https://github.com/maycolroa)(https://www.linkedin.com/in/maycol-david-roa-trivi%C3%B1o-14b27a106/)

```
