# Copilot Instructions for Grocery_POS (Angular POS System)

## Project Overview
- This is an Angular 8+ Point-of-Sale (POS) system for grocery stores, using modular architecture and service-based data flows.
- Key modules: `auth`, `pos-admin`, `core`, and `shared`. Each module has its own routing and feature boundaries.
- Data and business logic are handled via services in `src/app/core/services/`, e.g., `pos-system/pos-data.service.ts` for POS operations.
- UI layouts are organized under `src/app/layouts/` and `src/app/modules/pos-admin/pages/`.

## Architecture & Patterns
- **Service Injection:** All data access and business logic are performed via Angular services, injected into components. Example: `PosDataService` for order and invoice data.
- **Modals:** Use `NgbActiveModal` from `@ng-bootstrap/ng-bootstrap` for modal dialogs. To close a modal, call `this.activeModal.close()` from the component.
- **State Management:** Session storage is used for transient state (e.g., `orderId`, `activeOutletId`).
- **Pipes & Utilities:** Custom pipes are in `core/services/pos-system/pipes/`. Use Angular's `DatePipe` for date formatting.
- **HTTP Interceptors:** Auth and API requests are managed via interceptors in `core/interceptors/`.

## Developer Workflows
- **Development:**
  - Start dev server: `ng serve` (default port 4200)
  - Hot reload is enabled.
- **Build:**
  - Production build: `ng build --prod`
  - Artifacts are output to `dist/`
- **Testing:**
  - Unit tests: `ng test` (Karma)
  - E2E tests: `ng e2e` (Protractor)
- **Scaffolding:**
  - Generate components/services: `ng generate component|service <name>`

## Conventions & Integration
- **File Naming:** Use kebab-case for files and folders (e.g., `print-veiw.component.ts`).
- **Module Structure:** Each feature module (e.g., `pos-admin`) contains its own pages and routing.
- **API Integration:** All backend calls use Angular's `HttpClient` via service classes. API URLs are configured in `environments/`.
- **UI Libraries:** Uses `@ng-bootstrap/ng-bootstrap` for modals, `ngx-ui-loader` for loading indicators, and `angular-datatables` for tables.
- **Shared Functionality:** Common utilities and shared components are in `shared/` and `core/services/common/`.

## Examples
- To close a modal: `this.activeModal.close()` in a component injected with `NgbActiveModal`.
- To fetch order data: `this.posDataService.getOrderById(orderId).subscribe(...)` in a component.
- To format a date: `this.datePipe.transform(date, 'dd-MM-yyyy')`.

## Key Files & Directories
- `src/app/core/services/pos-system/pos-data.service.ts`: POS data operations
- `src/app/modules/pos-admin/pages/`: POS admin feature pages
- `src/app/core/interceptors/`: HTTP interceptors
- `src/app/shared/`: Shared components, directives, and utilities
- `src/environments/`: API environment configs

---
If any conventions or workflows are unclear, please provide feedback so this guide can be improved for future AI agents.
