# Database Migration Service

## Overview

This service runs migrations on rick_and_morty database

## Local Development

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create .env file and configure your database connection.

```bash
cp .env.example .env
```

3. Run migrations:

```bash
npm run migrate
```

4. Run seeders

```bash
npm run seed
```

5. Create migration:

```bash
npx sequelize-cli migration:create --name <migration_name>
```

6. Create seed:

```bash
npx sequelize-cli seed:generate --name <seeder-name>
```
