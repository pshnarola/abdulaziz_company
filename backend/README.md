## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.x or higher)
- **npm** (comes with Node.js)
- **PostgreSQL** (version 12.x or higher)
- **Git** (for version control)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Database Setup

1. **Create PostgreSQL database:**
   ```sql
   CREATE DATABASE company_management;
   ```

2. **Ensure PostgreSQL is running:**
   - Start PostgreSQL service on your system
   - Default port: 5432

## Environment Configuration

1. **Copy the environment file:**
   ```bash
   cp .env.example .env
   ```
   *If `.env.example` doesn't exist, create a new `.env` file*

2. **Configure environment variables in `.env`:**
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=your_password_here
   DB_NAME=company_management
   PORT=3000
   ```

   **Important:** Replace `your_password_here` with your actual PostgreSQL password.

## Running the Application

### Development Mode

1. **Run database migrations:**
   ```bash
   npm run db:migrate
   ```

2. **Start the development server:**
   ```bash
   npm run start:dev
   ```

   The application will be available at `http://localhost:3000`

### Production Mode

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm run start:prod
   ```

### Other Start Options

- **Standard start:** `npm run start`
- **Debug mode:** `npm run start:debug`

## API Documentation

The API is available at `http://localhost:3000/api/` with the following endpoints:

- **Base URL:** `http://localhost:3000/api/`
- **CORS:** Enabled for `http://192.168.100.89:5174`

### Available Endpoints

- Company management endpoints (based on the company module structure)
- Global validation and exception handling enabled

## Testing

### Unit Tests
```bash
npm run test
```

### Watch Mode
```bash
npm run test:watch
```

### Coverage
```bash
npm run test:cov
```

### E2E Tests
```bash
npm run test:e2e
```

### Debug Tests
```bash
npm run test:debug
```

## Development

### Code Formatting
```bash
npm run format
```

### Linting
```bash
npm run lint
```

### Database Operations

- **Run migrations:** `npm run db:migrate`
- **Migration files location:** `src/migrations/`

## Project Structure

```
backend/
├── src/
│   ├── common/
│   │   └── filters/          # Global exception filters
│   ├── company/              # Company module
│   │   ├── dto/              # Data Transfer Objects
│   │   ├── company.controller.ts
│   │   ├── company.service.ts
│   │   ├── company.module.ts
│   │   ├── company.model.ts
│   │   └── country.model.ts
│   ├── config/               # Database configuration
│   ├── migrations/           # Database migrations
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts              # Application entry point
├── test/                    # E2E tests
├── dist/                    # Compiled JavaScript files
├── .env                     # Environment variables
├── .sequelizerc            # Sequelize configuration
├── package.json
└── README.md
```

## Technology Stack

- **Framework:** NestJS
- **Database:** PostgreSQL
- **ORM:** Sequelize with sequelize-typescript
- **Validation:** class-validator & class-transformer
- **Testing:** Jest
- **Code Quality:** ESLint, Prettier

## Troubleshooting

### Common Issues

1. **Database connection error:**
   - Ensure PostgreSQL is running
   - Check database credentials in `.env`
   - Verify database exists

2. **Migration errors:**
   - Check database connection
   - Ensure migrations are in correct order
   - Verify migration files syntax

3. **Port already in use:**
   - Change PORT in `.env` file
   - Kill existing process on port 3000

### Database Connection Test
```bash
# Test database connection
psql -h localhost -U postgres -d company_management
```