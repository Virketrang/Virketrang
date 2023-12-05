DROP TYPE IF EXISTS account_type CASCADE;
DROP TYPE IF EXISTS accounting_class CASCADE;
DROP TYPE IF EXISTS corporate_form CASCADE;
DROP TYPE IF EXISTS customer_type CASCADE;
DROP TYPE IF EXISTS category_type CASCADE;
DROP TYPE IF EXISTS authorization_action CASCADE;
DROP TYPE IF EXISTS authorization_permission CASCADE;
DROP TYPE IF EXISTS gender CASCADE;

DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS addresses CASCADE;
DROP TABLE IF EXISTS annual_reports CASCADE;
DROP TABLE IF EXISTS api_keys CASCADE;
DROP TABLE IF EXISTS api_keys_permissions_relations CASCADE;
DROP TABLE IF EXISTS balance_sheets CASCADE;
DROP TABLE IF EXISTS bank_accounts CASCADE;
DROP TABLE IF EXISTS companies CASCADE;
DROP TABLE IF EXISTS content_type_fields CASCADE;
DROP TABLE IF EXISTS content_types CASCADE;
DROP TABLE IF EXISTS contents CASCADE;
DROP TABLE IF EXISTS credit_notes CASCADE;
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS fixed_asset_groups CASCADE;
DROP TABLE IF EXISTS fixed_asset_registers CASCADE;
DROP TABLE IF EXISTS product_description_translations CASCADE;
DROP TABLE IF EXISTS product_name_translations CASCADE;
DROP TABLE IF EXISTS image_alt_translations CASCADE;
DROP TABLE IF EXISTS measurements CASCADE;
DROP TABLE IF EXISTS units CASCADE;
DROP TABLE IF EXISTS income_statements CASCADE;
DROP TABLE IF EXISTS invoices CASCADE;
DROP TABLE IF EXISTS locales CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS pay_periods CASCADE;
DROP TABLE IF EXISTS currencies CASCADE;
DROP TABLE IF EXISTS languages CASCADE;
DROP TABLE IF EXISTS payslips CASCADE;
DROP TABLE IF EXISTS users_companies_relations CASCADE;
DROP TABLE IF EXISTS employees CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;
DROP TABLE IF EXISTS contact_infos CASCADE;
DROP TABLE IF EXISTS permissions CASCADE;
DROP TABLE IF EXISTS phone_numbers CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS images CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS production_units CASCADE;
DROP TABLE IF EXISTS roles CASCADE;
DROP TABLE IF EXISTS roles_permissions_relations CASCADE;
DROP TABLE IF EXISTS users CASCADE; 
DROP TABLE IF EXISTS vat_codes CASCADE;

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

CREATE TABLE IF NOT EXISTS addresses (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    street_name VARCHAR(255) NOT NULL,
    street_number VARCHAR(255) NOT NULL,
    apartment VARCHAR(255),
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

CREATE TABLE IF NOT EXISTS bank_accounts (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    registration_number integer NOT NULL,
    account_number integer NOT NULL,
    swift VARCHAR(255),
    iban VARCHAR(255),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS companies (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    company_name VARCHAR(255) NOT NULL,
    corporate_form corporate_form NOT NULL,
    company_number INTEGER NOT NULL,
    accounting_class accounting_class NOT NULL,
    employer BOOLEAN NOT NULL DEFAULT false,

    address_id uuid REFERENCES addresses(id) NOT NULL,
    phone_number_id uuid REFERENCES phone_numbers(id) NOT NULL,
    bank_account_id uuid REFERENCES bank_accounts(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS currencies (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    currency_name VARCHAR(255) NOT NULL,
    currency_code VARCHAR(255) NOT NULL,
    currency_symbol VARCHAR(255) NOT NULL,

    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS languages (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    language_name VARCHAR(255) NOT NULL,
    language_code VARCHAR(255) NOT NULL,

    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS locales (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    language_id uuid REFERENCES languages(id) NOT NULL,
    currency_id uuid REFERENCES currencies(id) NOT NULL,
    company_id uuid REFERENCES companies(id) NOT NULL,

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
    primary_location BOOLEAN NOT NULL DEFAULT false,

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

    company_id uuid REFERENCES companies(id) NOT NULL,
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS permissions (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    permission_name authorization_permission NOT NULL,
    permission_action authorization_action[] NOT NULL,

    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS api_keys (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    key_name VARCHAR(255) NOT NULL,
    key_value TEXT NOT NULL,

    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS roles (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    role_name VARCHAR(255) NOT NULL,

    company_id uuid REFERENCES companies(id) NOT NULL,

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

CREATE TABLE IF NOT EXISTS contact_infos (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    address_id uuid REFERENCES addresses(id) NOT NULL,
    phone_number_id uuid REFERENCES phone_numbers(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS profiles (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    fullname VARCHAR(255) GENERATED ALWAYS AS (firstname || ' ' || lastname) STORED,
    birthdate TIMESTAMPTZ NOT NULL,
    gender gender NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS users (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,

    profile_id uuid REFERENCES profiles(id) NOT NULL,
    contact_info_id uuid REFERENCES contact_infos(id) NOT NULL,
    bank_account_id uuid REFERENCES bank_accounts(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS users_companies_relations (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    user_id uuid REFERENCES users(id) NOT NULL,
    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS employees (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    employee_number INTEGER NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    
    profile_id uuid REFERENCES profiles(id) NOT NULL,
    contact_info_id uuid REFERENCES contact_infos(id) NOT NULL,
    bank_account_id uuid REFERENCES bank_accounts(id) NOT NULL,
    production_unit_id uuid REFERENCES production_units(id) NOT NULL,
    role_id uuid REFERENCES roles(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS customers (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    email VARCHAR(255) NOT NULL UNIQUE,
    customer_type customer_type NOT NULL,

    profile_id uuid REFERENCES profiles(id) NOT NULL,
    contact_info_id uuid REFERENCES contact_infos(id) NOT NULL,

    company_id uuid REFERENCES companies(id) NOT NULL,

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

    company_id uuid REFERENCES companies(id) NOT NULL,
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

CREATE TABLE IF NOT EXISTS categories (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    unique_identifier VARCHAR(255) NOT NULL UNIQUE,
    path ltree,

    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS categories_names_translations (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    value VARCHAR(255) NOT NULL,

    language_id uuid REFERENCES locales(id) NOT NULL,
    category_id uuid REFERENCES categories(id) NOT NULL,

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

    category_id uuid REFERENCES categories(id) NOT NULL,
    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS product_description_translations (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    value TEXT NOT NULL,

    language_id uuid REFERENCES locales(id) NOT NULL,
    product__id uuid REFERENCES product_descriptions(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS product_name_translations (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    value VARCHAR(255) NOT NULL,

    language_id uuid REFERENCES locales(id) NOT NULL,
    product_id uuid REFERENCES products(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS units (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    unit_name VARCHAR(255) NOT NULL,
    unit_symbol VARCHAR(255) NOT NULL,

    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS measurements (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    width INTEGER,
    height INTEGER,
    depth INTEGER,
    weight INTEGER,

    unit_id uuid REFERENCES units(id) NOT NULL,
    product_id uuid REFERENCES products(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE images (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    width integer NOT NULL,
    height integer NOT NULL,
    file_url VARCHAR(255) NOT NULL,
    file_name VARCHAR(255) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS image_alt_translations (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    value TEXT NOT NULL,

    language_id uuid REFERENCES locales(id) NOT NULL,
    image_id uuid REFERENCES images(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products_images_relations (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    product_id uuid REFERENCES products(id) NOT NULL,
    image_id uuid REFERENCES images(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contents_images_relations (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    content_id uuid REFERENCES contents(id) NOT NULL,
    image_id uuid REFERENCES images(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
