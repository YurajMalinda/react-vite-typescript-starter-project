# API Integration Guide

This document provides guidelines for integrating APIs with the React Vite TypeScript Starter Project.

## 🚀 Overview

This starter project is designed to work seamlessly with various backend APIs. The structure provides organized patterns for API calls, error handling, and data management.

## 📁 API Structure

### Services Directory (`src/services/`)

```
services/
├── api/                   # API configuration and base setup
│   ├── client.ts         # Axios instance and interceptors
│   ├── endpoints.ts      # API endpoint constants
│   └── types.ts          # API response types
├── auth/                  # Authentication services
│   ├── authService.ts    # Login, logout, token management
│   └── authTypes.ts      # Auth-related types
├── users/                 # User management services
│   ├── userService.ts    # User CRUD operations
│   └── userTypes.ts      # User-related types
└── common/               # Shared API utilities
    ├── errorHandler.ts   # Error handling utilities
    └── responseHandler.ts # Response processing
```

## 🔧 Setup

### 1. API Client Configuration

```typescript
// src/services/api/client.ts
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
```

### 2. Environment Variables

```env
# .env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_API_TIMEOUT=10000
```

## 📝 Service Patterns

### Basic Service Template

```typescript
// src/services/users/userService.ts
import { apiClient } from "../api/client";
import { User, CreateUserRequest, UpdateUserRequest } from "./userTypes";

export class UserService {
  static async getUsers(): Promise<User[]> {
    const response = await apiClient.get("/users");
    return response.data;
  }

  static async getUserById(id: string): Promise<User> {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  }

  static async createUser(userData: CreateUserRequest): Promise<User> {
    const response = await apiClient.post("/users", userData);
    return response.data;
  }

  static async updateUser(
    id: string,
    userData: UpdateUserRequest
  ): Promise<User> {
    const response = await apiClient.put(`/users/${id}`, userData);
    return response.data;
  }

  static async deleteUser(id: string): Promise<void> {
    await apiClient.delete(`/users/${id}`);
  }
}
```

### Type Definitions

```typescript
// src/services/users/userTypes.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  role?: "admin" | "user";
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  role?: "admin" | "user";
}

export interface UserListResponse {
  users: User[];
  total: number;
  page: number;
  limit: number;
}
```

## 🎣 Custom Hooks for API

### Data Fetching Hook

```typescript
// src/hooks/useApi.ts
import { useState, useEffect } from "react";

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  enabled?: boolean;
}

export function useApi<T>(
  apiCall: () => Promise<T>,
  options: UseApiOptions<T> = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { onSuccess, onError, enabled = true } = options;

  const execute = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      setData(result);
      onSuccess?.(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Unknown error");
      setError(error);
      onError?.(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (enabled) {
      execute();
    }
  }, [enabled]);

  return { data, loading, error, refetch: execute };
}
```

### Usage Example

```typescript
// src/pages/users/UserList.tsx
import React from 'react';
import { useApi } from '../../hooks/useApi';
import { UserService } from '../../services/users/userService';

export const UserList: React.FC = () => {
  const { data: users, loading, error, refetch } = useApi(UserService.getUsers);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Users</h1>
      <button onClick={refetch}>Refresh</button>
      {users?.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
```

## 🔄 State Management

### Context for API State

```typescript
// src/context/ApiContext.tsx
import React, { createContext, useContext, useReducer } from 'react';

interface ApiState {
  loading: boolean;
  error: string | null;
  data: any;
}

type ApiAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_DATA'; payload: any };

const ApiContext = createContext<{
  state: ApiState;
  dispatch: React.Dispatch<ApiAction>;
} | null>(null);

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, {
    loading: false,
    error: null,
    data: null,
  });

  return (
    <ApiContext.Provider value={{ state, dispatch }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApiContext must be used within ApiProvider');
  }
  return context;
};
```

## 🛡️ Error Handling

### Error Handler Utility

```typescript
// src/services/common/errorHandler.ts
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export const handleApiError = (error: any): ApiError => {
  if (error.response) {
    return new ApiError(
      error.response.data?.message || "API Error",
      error.response.status,
      error.response.data?.code
    );
  }

  if (error.request) {
    return new ApiError("Network Error", 0);
  }

  return new ApiError(error.message || "Unknown Error", 0);
};
```

## 📊 Response Caching

### Simple Cache Implementation

```typescript
// src/services/common/cache.ts
interface CacheItem<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

class ApiCache {
  private cache = new Map<string, CacheItem<any>>();

  set<T>(key: string, data: T, ttl: number = 5 * 60 * 1000): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  clear(): void {
    this.cache.clear();
  }
}

export const apiCache = new ApiCache();
```

## 🔐 Authentication

### Auth Service

```typescript
// src/services/auth/authService.ts
import { apiClient } from "../api/client";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export class AuthService {
  static async login(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await apiClient.post("/auth/login", credentials);
    const { token, user } = response.data;

    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user));

    return response.data;
  }

  static async logout(): Promise<void> {
    try {
      await apiClient.post("/auth/logout");
    } finally {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
    }
  }

  static async refreshToken(): Promise<AuthResponse> {
    const response = await apiClient.post("/auth/refresh");
    const { token, user } = response.data;

    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user));

    return response.data;
  }

  static getCurrentUser(): User | null {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  }

  static isAuthenticated(): boolean {
    return !!localStorage.getItem("authToken");
  }
}
```

## 📚 Best Practices

### 1. Service Organization

- Group related API calls in service classes
- Use TypeScript interfaces for all API types
- Keep services focused and single-purpose

### 2. Error Handling

- Implement consistent error handling across all services
- Use custom error classes for different error types
- Provide user-friendly error messages

### 3. Performance

- Implement request caching where appropriate
- Use request debouncing for search operations
- Implement pagination for large datasets

### 4. Security

- Never store sensitive data in localStorage
- Use HTTPS in production
- Implement proper token refresh logic
- Validate all API responses

### 5. Testing

- Mock API calls in tests
- Test error scenarios
- Test loading states
- Test authentication flows

## 🧪 Testing API Integration

```typescript
// src/services/__tests__/userService.test.ts
import { UserService } from "../users/userService";
import { apiClient } from "../api/client";

jest.mock("../api/client");

describe("UserService", () => {
  it("should fetch users successfully", async () => {
    const mockUsers = [{ id: "1", name: "John" }];
    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockUsers });

    const result = await UserService.getUsers();

    expect(result).toEqual(mockUsers);
    expect(apiClient.get).toHaveBeenCalledWith("/users");
  });
});
```

---

**Remember**: This API integration guide provides a solid foundation for building scalable React applications with proper API management in the React Vite TypeScript Starter Project.
