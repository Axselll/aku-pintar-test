# Aku Pintar Online Test

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
# Server
$ npm install

# Database
buat database dengan nama personal_exp lalu import database yang telah disertakan
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Endpoint

```bash
# Untuk melakukan proses create/follow kampus
localhost:3000/pengguna -> POST
JSON Schema saat menjalankan proses POST
{
    "id": null, <== contoh
    "pengguna": 1, <== contoh
    "kampus": 1 <== contoh
}


# Untuk melihat pengguna mengikuti kampus mana saja
localhost:3000/pengguna/{id} -> GET

# Untuk mencari kampus
localhost:3000/kampus/{id} -> GET

# Untuk mencari list jurusan yang ada di suatu kampus
localhost:3000/kampus/jurusan/{id} -> GET
```