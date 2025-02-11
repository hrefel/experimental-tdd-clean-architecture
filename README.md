src/
 ├── core/              # Agnostik, tidak tergantung Angular
 │   ├── domain/
 │   │   ├── entities/  # Entity model tanpa Angular
 │   │   ├── usecases/  # Business logic (tanpa Angular)
 │   │   ├── repositories/  # Interface untuk repository
 │   │   └── services/  # Service agnostik (opsional)
 │   ├── utils/         # Helper/utility functions
 │   ├── errors/        # Custom Error Handling
 │   └── constants/     # Constants yang digunakan
 │
 ├── infrastructure/    # Implementasi konkret yang tergantung pada teknologi
 │   ├── repositories/  # Implementasi repository
 │   ├── adapters/      # Adapter dari domain ke Angular/service
 │   ├── services/      # Implementasi service
 │   └── api/           # API client, interceptor
 │
 ├── presentation/      # Lapisan khusus Angular (tergantung framework)
 │   ├── components/    # UI Components
 │   ├── pages/         # Pages dalam aplikasi
 │   ├── routes/        # Routing & Guards
 │   ├── guards/        # Angular Guards ditempatkan di sini!
 │   ├── services/      # Service yang terkait dengan UI (AuthService, ToastService)
 │   └── directives/    # Angular directives
