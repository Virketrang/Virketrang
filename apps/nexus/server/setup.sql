DROP TYPE IF EXISTS account_type CASCADE;
DROP TYPE IF EXISTS accounting_class CASCADE;
DROP TYPE IF EXISTS category_type CASCADE;
DROP TYPE IF EXISTS authorization_action CASCADE;
DROP TYPE IF EXISTS authorization_permission CASCADE;
DROP TYPE IF EXISTS gender CASCADE;
DROP TYPE IF EXISTS payment_terms_type CASCADE;
DROP TYPE IF EXISTS unit_type CASCADE;
DROP TYPE IF EXISTS customer_type CASCADE;

DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS addresses CASCADE;
DROP TABLE IF EXISTS annual_reports CASCADE;
DROP TABLE IF EXISTS api_keys CASCADE;
DROP TABLE IF EXISTS api_keys_permissions_relations CASCADE;
DROP TABLE IF EXISTS balance_sheets CASCADE;
DROP TABLE IF EXISTS bank_accounts CASCADE;
DROP TABLE IF EXISTS companies CASCADE;
DROP TABLE IF EXISTS content_type_fields CASCADE;
DROP TABLE IF EXISTS schemas CASCADE;
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
DROP TABLE IF EXISTS api_keys_permissions CASCADE;
DROP TABLE IF EXISTS roles_permissions CASCADE;
DROP TABLE IF EXISTS phone_numbers CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS images CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS production_units CASCADE;
DROP TABLE IF EXISTS roles CASCADE;
DROP TABLE IF EXISTS users CASCADE; 
DROP TABLE IF EXISTS vat_codes CASCADE;
DROP TABLE IF EXISTS attentions CASCADE;
DROP TABLE IF EXISTS payment_terms CASCADE;
DROP TABLE IF EXISTS customer_groups CASCADE;

DROP TABLE IF EXISTS products_images_relations CASCADE;
DROP TABLE IF EXISTS contents_images_relations CASCADE;
DROP TABLE IF EXISTS categories_names_translations CASCADE;
DROP TABLE IF EXISTS discount_groups CASCADE;
DROP TABLE IF EXISTS private_customer_info CASCADE;
DROP TABLE IF EXISTS business_customer_info CASCADE;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "ltree";

CREATE TYPE customer_type AS ENUM (
    'BUSINESS',
    'PRIVATE'
);

CREATE TYPE unit_type AS ENUM (
    'temporal',
    'dimensional',
    'volumetric',
    'quantitative',
    'area'
);

CREATE TYPE payment_terms_type AS ENUM (
    'NET',
    'CURRENT_MONTH',
    'CASH',
    'CREDIT_CARD',
    'PREPAID',
    'DUE_DATE',
    'UNGOING_WEEK_STARTING_SUNDAY',
    'UNGOING_WEEK_STARTING_MONDAY'
);

CREATE TYPE account_type AS ENUM (
    'ASSETS',
    'LIABILITIES',
    'EXPENSES',
    'REVENUE'
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

CREATE TABLE IF NOT EXISTS corporate_forms (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    form_name VARCHAR(255) NOT NULL,
    limited_liability BOOLEAN NOT NULL DEFAULT false,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS accounting_classes (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    class_name VARCHAR(255) NOT NULL,
    class_number INTEGER NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS companies (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    company_name VARCHAR(255) NOT NULL,
    company_number INTEGER NOT NULL,
    employer BOOLEAN NOT NULL DEFAULT false,

    accounting_class uuid REFERENCES accounting_classes(id) NOT NULL,
    address_id uuid REFERENCES addresses(id) ON DELETE CASCADE NOT NULL,
    phone_number_id uuid REFERENCES phone_numbers(id) ON DELETE CASCADE NOT NULL,
    bank_account_id uuid REFERENCES bank_accounts(id) ON DELETE CASCADE NOT NULL,
    corporate_form_id uuid REFERENCES corporate_forms(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS currencies (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    name VARCHAR(255) NOT NULL,
    code VARCHAR(3) NOT NULL,
    number INTEGER NOT NULL,
    symbol VARCHAR(255),
    decimals INTEGER NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO currencies (name, code, number, symbol, decimals) VALUES ('Danish Krone', 'DKK', 208, 'kr', 2), ('Euro', 'EUR', 978, '€', 2), ('US Dollar', 'USD', 840, '$', 2), ('British Pound', 'GBP', 826, '£', 2), ('Swedish Krona', 'SEK', 752, 'kr', 2), ('Norwegian Krone', 'NOK', 578, 'kr', 2), ('Swiss Franc', 'CHF', 756, 'CHF', 2), ('Japanese Yen', 'JPY', 392, '¥', 0), ('Chinese Yuan', 'CNY', 156, '¥', 2), ('Australian Dollar', 'AUD', 36, '$', 2), ('Canadian Dollar', 'CAD', 124, '$', 2), ('New Zealand Dollar', 'NZD', 554, '$', 2), ('South African Rand', 'ZAR', 710, 'R', 2), ('Brazilian Real', 'BRL', 986, 'R$', 2), ('Russian Ruble', 'RUB', 643, '₽', 2), ('Indian Rupee', 'INR', 356, '₹', 2), ('Singapore Dollar', 'SGD', 702, '$', 2), ('Hong Kong Dollar', 'HKD', 344, '$', 2), ('South Korean Won', 'KRW', 410, '₩', 0), ('Turkish Lira', 'TRY', 949, '₺', 2), ('Mexican Peso', 'MXN', 484, '$', 2), ('Argentine Peso', 'ARS', 32, '$', 2), ('Chilean Peso', 'CLP', 152, '$', 0), ('Colombian Peso', 'COP', 170, '$', 2), ('Peruvian Sol', 'PEN', 604, 'S/', 2), ('Venezuelan Bolivar', 'VES', 928, 'Bs.', 2), ('Ukrainian Hryvnia', 'UAH', 980, '₴', 2)

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

CREATE TABLE IF NOT EXISTS websites (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    url VARCHAR(255) NOT NULL,
    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS websites_locales_relations (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    website_id uuid REFERENCES websites(id) NOT NULL,
    locale_id uuid REFERENCES locales(id) NOT NULL,

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

    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,

    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS permissions (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    name VARCHAR(255) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

);

INSERT INTO permissions (name) VALUES ('ROLE'), ('PRODUCT'), ('ORDER'), ('INVOICE'), ('CONTENT'), ("EMPLOYEE"), ("PAYSLIP"), ("API_KEY"), ("LANGUAGE"), ("LOCALE"), ("PAYMENT_TERM"), ("CUSTOMER"), ("CUSTOMER_GROUP"), ("DISCOUNT_GROUP"), ("INCOME_STATEMENT"), ("BALANCE_SHEET"), ("FIXED_ASSET_REGISTER"), ("ANNUAL_REPORT"), ("WEBSITE"), ("PRODUCTION_UNIT"), ("VAT_CODE"), ("LOCALE");

CREATE TABLE IF NOT EXISTS roles_permissions (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    write BOOLEAN DEFAULT false,
    read BOOLEAN DEFAULT false,
    modify BOOLEAN DEFAULT false,
    remove BOOLEAN DEFAULT false,

    name_id uuid REFERENCES permissions(id) NOT NULL,
    role_id uuid REFERENCES roles(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS api_keys_permissions (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    write BOOLEAN DEFAULT false,
    read BOOLEAN DEFAULT false,
    modify BOOLEAN DEFAULT false,
    remove BOOLEAN DEFAULT false,

    name_id uuid REFERENCES permissions(id) NOT NULL,
    api_key_id uuid REFERENCES api_keys(id) NOT NULL,

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

CREATE TABLE IF NOT EXISTS attentions (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    
    phone_number_id uuid REFERENCES phone_numbers(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS payment_terms (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    type payment_terms_type NOT NULL,
    name VARCHAR(255) NOT NULL,
    days INTEGER NOT NULL,
    description TEXT,

    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS customer_groups (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    group_name VARCHAR(255) NOT NULL,
    discount INTEGER DEFAULT 0,
    credit_limit INTEGER DEFAULT 0,

    currency_id uuid REFERENCES currencies(id) NOT NULL,
    payment_terms_id uuid REFERENCES payment_terms(id),
    company_id uuid REFERENCES companies(id) NOT NULL,
    employee_id uuid REFERENCES employees(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS discount_groups (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    group_name VARCHAR(255) NOT NULL,
    discount INTEGER DEFAULT 0,

    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS customers (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    
    discount INTEGER DEFAULT 0,
    customer_number INTEGER NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    credit_limit INTEGER DEFAULT 0,

    payment_terms_id uuid REFERENCES payment_terms(id) NOT NULL,
    contact_info_id uuid REFERENCES contact_infos(id) NOT NULL,
    currency_id uuid REFERENCES currencies(id) NOT NULL,
    group_id uuid REFERENCES customer_groups(id) NOT NULL,
    employee_id uuid REFERENCES employees(id) NOT NULL,
    delivery_address_id uuid REFERENCES addresses(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS private_customer_info (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    profile_id uuid REFERENCES profiles(id),
    occupation VARCHAR(255),

    customer_id uuid REFERENCES customers(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);



CREATE TABLE IF NOT EXISTS business_customer_info (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    name VARCHAR(255) NOT NULL,
    number INTEGER NOT NULL,
    corporate_form_id uuid REFERENCES corporate_forms(id) NOT NULL,

    customer_id uuid REFERENCES customers(id) NOT NULL,

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

CREATE TABLE IF NOT EXISTS schemas (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    name VARCHAR(255) NOT NULL,
    schema jsonb NOT NULL,

    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contents (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    body jsonb NOT NULL,
    published BOOLEAN NOT NULL DEFAULT false,

    website_id uuid REFERENCES websites(id) NOT NULL,
    schema_id uuid REFERENCES schemas(id) NOT NULL,

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

    delivery_time INTEGER NOT NULL,
    stock INTEGER NOT NULL DEFAULT 0,
    available BOOLEAN NOT NULL DEFAULT true,
    designer VARCHAR(255) NOT NULL,

    category_id uuid REFERENCES categories(id) NOT NULL,
    company_id uuid REFERENCES companies(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS retail_prices (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    price NUMERIC(9,3) NOT NULL,
    currency_id uuid REFERENCES currencies(id) NOT NULL,
    product_id uuid REFERENCES products(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

);

CREATE TABLE IF NOT EXISTS cost_prices (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    price NUMERIC(9,3) NOT NULL,
    currency_id uuid REFERENCES currencies(id) NOT NULL,
    product_id uuid REFERENCES products(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

);

CREATE TABLE IF NOT EXISTS product_description_translations (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    value TEXT NOT NULL,

    language_id uuid REFERENCES locales(id) NOT NULL,
    product__id uuid REFERENCES products(id) NOT NULL,

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

CREATE TABLE IF NOT EXISTS products_locales_relations (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    product_id uuid REFERENCES products(id) NOT NULL,
    locale_id uuid REFERENCES locales(id) NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS units (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,

    name VARCHAR(255) NOT NULL,
    symbol VARCHAR(255) DEFAULT NULL,
    type unit_type NOT NULL,

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
