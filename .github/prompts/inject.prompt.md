# Angular `inject()` Function Migration Guide

## Context
I am migrating my Angular project to **use the `inject()` function** instead of traditional dependency injection inside constructors. The `inject()` function provides a way to inject dependencies **outside of class constructors**, making it useful for functions, signals, and composable logic.

I need to update **all instances of dependency injection** inside Angular services, components, and directives **to use `inject()`** where applicable.

---

## ✅ Service Migration (Old Constructor Injection → `inject()` Function)

### Before (Using Constructor Injection)
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('/api/data');
  }
}
```

### After (Using `inject()` Instead)
```ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  private http = inject(HttpClient);

  getData() {
    return this.http.get('/api/data');
  }
}
```

---

## ✅ Component Migration (Constructor Dependency → `inject()`)

### Before:
```ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => console.log(params));
  }
}
```

### After:
```ts
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.params.subscribe(params => console.log(params));
  }
}
```

---

## ✅ Injecting Dependencies in Standalone Functions

### Before (Using Dependency Injection in a Service)
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  constructor(private http: HttpClient) {}

  fetchData() {
    return this.http.get('/api/data');
  }
}
```

### After (Using `inject()` in a Function Outside a Class)
```ts
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export function fetchData() {
  const http = inject(HttpClient);
  return http.get('/api/data');
}
```

---

## Task
1. **Scan my Angular project** for all instances of dependency injection inside constructors (`constructor(private service: SomeService) {}`).
2. **Replace constructor-based injection** with the `inject()` function where applicable.
3. **Ensure compatibility** with services, components, and standalone functions.
4. **Generate a migration report** highlighting the changes made.
