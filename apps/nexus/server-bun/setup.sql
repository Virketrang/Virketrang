DROP TYPE IF EXISTS account_type;
DROP TYPE IF EXISTS accounting_class;
DROP TYPE IF EXISTS corporate_form;
DROP TYPE IF EXISTS customer_type;
DROP TYPE IF EXISTS category_type;
DROP TYPE IF EXISTS authorization_action;
DROP TYPE IF EXISTS authorization_permission;
DROP TYPE IF EXISTS gender;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "ltree";

CREATE TYPE account_type AS ENUM (
    'ASSETS',
    'LIABILITIES',
    'EXPENSES',
    'REVENUE'
);

CREATE TYPE accounting_class AS ENUM (
    'A',
    'B1',
    'B2',
    'C1',
    'C2',
    'D'
);

CREATE TYPE corporate_form AS ENUM (
    'ENKELTMANDSVIRKSOMHED',
    'ANPARTSSELSKAB',
    'INTERESSENTSKAB','AKTIESELSKAB',
    'KOMMANDITSELSKAB'
);

CREATE TYPE customer_type AS ENUM (
    'PRIVATE',
    'BUSINESS'
);

CREATE TYPE category_type AS ENUM (
    'CATEGORY',
    'SUBCATEGORY'
);

CREATE TYPE authorization_action AS ENUM (
    'CREATE',
    'READ',
    'UPDATE',
    'DELETE',
    'ALL'
);

CREATE TYPE authorization_permission AS ENUM (
    'PRODUCT',
    'CUSTOMER',
    'ORDER',
    'INVOICE',
    'PAYSLIP',
    'PAY_PERIOD',
    'FIXED_ASSET_REGISTER',
    'FIXED_ASSET_GROUP',
    'INCOME_STATEMENT',
    'CREDIT_NOTE',
    'BALANCE_SHEET',
    'ANNUAL_REPORT',
    'ACCOUNT',
    'API_KEY',
    'PERMISSION',
    'ROLE',
    'CONTENT',
    'CONTENT_TYPE',
    'CONTENT_TYPE_FIELD',
    'LOCALES'
);

CREATE TYPE gender as ENUM (
    'MALE',
    'FEMALE'
);

CREATE TABLE IF NOT EXISTS companies (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    company_name VARCHAR(255) NOT NULL,
    corporate_form corporate_form NOT NULL,
    company_number INTEGER NOT NULL,
    accounting_class accounting_class NOT NULL,
    employer BOOLEAN NOT NULL DEFAULT false,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS bank_accounts (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    registration_number integer NOT NULL,
    account_number integer NOT NULL,
    swift VARCHAR(255),
    iban VARCHAR(255),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS locales (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    language_name VARCHAR(255) NOT NULL,
    language_code VARCHAR(255) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS i18n_texts (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    text_value TEXT NOT NULL,

    locale_id uuid REFERENCES locales(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS addresses (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    street_name VARCHAR(255) NOT NULL,
    street_number VARCHAR(255) NOT NULL,
    apartment_floor VARCHAR(255) NOT NULL,
    door VARCHAR(255) NOT NULL,
    postal_code VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS phone_numbers (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    country_code INTEGER NOT NULL,
    subscriber_number INTEGER NOT NULL,

    phone_number VARCHAR(255) GENERATED ALWAYS AS ('+' || country_code::text || ' ' || subscriber_number::text) STORED,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS annual_reports (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    
    year_start_date TIMESTAMPTZ NOT NULL,
    year_end_date TIMESTAMPTZ NOT NULL,

    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS accounts (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    account_name VARCHAR(255) NOT NULL,
    account_number INTEGER NOT NULL,
    account_type account_type NOT NULL,

    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE vat_codes (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    code_name VARCHAR(255) NOT NULL,
    rate INTEGER NOT NULL,

    company_id uuid REFERENCES companies(id),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS production_units (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    unit_number INTEGER NOT NULL,

    address_id uuid REFERENCES addresses(id) NOT NULL,
    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS balance_sheets (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    annual_report_id uuid REFERENCES annual_reports(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS income_statements (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    annual_report_id uuid REFERENCES annual_reports(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS fixed_asset_registers (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS users (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    fullname VARCHAR(255) GENERATED ALWAYS AS (firstname || ' ' || lastname) STORED,
    private_email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT true,
    company_owner BOOLEAN NOT NULL DEFAULT false,
    employee_number INTEGER,
    birth_date TIMESTAMPTZ NOT NULL,
    gender gender NOT NULL,

    address_id uuid REFERENCES addresses(id) NOT NULL,
    bank_account_id uuid REFERENCES bank_accounts(id) NOT NULL,
    company_id uuid REFERENCES companies(id) NOT NULL,
    production_unit_id uuid REFERENCES production_units(id) NOT NULL,
    private_phone_number_id uuid REFERENCES phone_numbers(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS customers (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    customer_type customer_type NOT NULL,

    fullname VARCHAR(255) GENERATED ALWAYS AS (firstname || ' ' || lastname) STORED,

    company_id uuid REFERENCES companies(id) NOT NULL,
    address_id uuid REFERENCES addresses(id) NOT NULL,
    phone_number_id uuid REFERENCES phone_numbers(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS fixed_asset_groups (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    fixed_asset_register_id uuid REFERENCES fixed_asset_registers(id) NOT NULL,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS invoices (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    invoice_number INTEGER NOT NULL,
    invoice_date TIMESTAMPTZ NOT NULL,
    due_date TIMESTAMPTZ NOT NULL,
    paid BOOLEAN NOT NULL DEFAULT false,

    customer_id uuid REFERENCES customers(id) NOT NULL,
    annual_report_id uuid REFERENCES annual_reports(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS credit_notes (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    credit_note_number INTEGER NOT NULL,
    credit_note_date TIMESTAMPTZ NOT NULL,
    credit_note_amount INTEGER NOT NULL,
    
    annual_report_id uuid REFERENCES annual_reports(id) NOT NULL,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE orders (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    completed BOOLEAN NOT NULL,

    customer_id uuid REFERENCES customers(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE pay_periods (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    period_start_date TIMESTAMPTZ NOT NULL,
    period_end_date TIMESTAMPTZ NOT NULL,

    production_unit_id uuid REFERENCES production_units(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE payslips (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    gross_pay integer NOT NULL,
    working_hours integer NOT NULL,

    user_id uuid REFERENCES users(id) NOT NULL,
    pay_period_id uuid REFERENCES pay_periods(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS permissions (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    permission_name authorization_permission NOT NULL,
    permission_action authorization_action[] NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS api_keys (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    key_name VARCHAR(255) NOT NULL,
    key_value TEXT NOT NULL,



    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS roles (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    role_name VARCHAR(255) NOT NULL,

    permissions_id uuid REFERENCES permissions(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS roles_permissions_relations (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    role_id uuid REFERENCES roles(id) NOT NULL,
    permission_id uuid REFERENCES permissions(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS api_keys_permissions_relations (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    api_key_id uuid REFERENCES api_keys(id) NOT NULL,
    permission_id uuid REFERENCES permissions(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS content_types (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    type_name VARCHAR(255) NOT NULL,

    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contents (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    body jsonb NOT NULL,
    published BOOLEAN NOT NULL DEFAULT false,

    content_type_id uuid REFERENCES content_types(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS content_type_fields (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    field_name VARCHAR(255) NOT NULL,
    field_type VARCHAR(255) NOT NULL,

    content_type_id uuid REFERENCES content_types(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS product_categories (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    category_name uuid REFERENCES i18n_texts(id) NOT NULL,
    category_path ltree,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS product_descriptions (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    long_description uuid REFERENCES i18n_texts(id) NOT NULL,
    short_description uuid REFERENCES i18n_texts(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    retail_price INTEGER NOT NULL,
    cost_price INTEGER NOT NULL,
    delivery_time INTEGER NOT NULL,
    stock INTEGER NOT NULL DEFAULT 0,
    available BOOLEAN NOT NULL DEFAULT true,
    designer VARCHAR(255) NOT NULL,
    measurement_unit VARCHAR(255) NOT NULL,
    measurement_value INTEGER NOT NULL,

    category_id uuid REFERENCES product_categories(id) NOT NULL,
    name_id uuid REFERENCES i18n_texts(id) NOT NULL,
    description_id uuid REFERENCES product_descriptions(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE product_images (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    image_width integer NOT NULL,
    image_height integer NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    
    product_id uuid REFERENCES products(id) NOT NULL,
    image_alt uuid REFERENCES i18n_texts(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
