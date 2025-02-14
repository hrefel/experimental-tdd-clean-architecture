src/
├── app/
│   ├── core/                 # Singleton services & guards yang digunakan di seluruh aplikasi
│   │   ├── guards/          
│   │   ├── interceptors/    
│   │   ├── services/        
│   │   └── core.module.ts   
│   │
│   ├── data/                # Implementation dari repository & data sources
│   │   ├── repositories/    # Implementasi konkrit dari abstract repositories
│   │   ├── datasources/     # Remote (API) & local data sources
│   │   └── models/          # Model/entity untuk data layer
│   │
│   ├── domain/             # Business logic & use cases
│   │   ├── repositories/   # Abstract repository interfaces
│   │   ├── entities/       # Domain entities/models
│   │   └── usecases/       # Business logic use cases
│   │
│   ├── presentation/       # UI Components & state management
│   │   ├── pages/         # Page/container components
│   │   │   ├── home/
│   │   │   ├── login/
│   │   │   └── dashboard/
│   │   ├── shared/        # Shared components, pipes, directives
│   │   │   ├── components/
│   │   │   ├── directives/
│   │   │   └── pipes/
│   │   └── store/         # State management (NgRx/Redux)
│   │       ├── actions/
│   │       ├── effects/
│   │       ├── reducers/
│   │       └── selectors/
│   │
│   ├── config/            # Konfigurasi aplikasi
│   │   ├── api.config.ts
│   │   └── app.config.ts
│   │
│   └── utils/            # Helper functions & constants
│       ├── constants/
│       └── helpers/
│
├── assets/              # Static files (images, fonts, etc)
├── environments/        # Environment configurations
└── styles/             # Global styles
    ├── _variables.scss
    └── styles.scss
