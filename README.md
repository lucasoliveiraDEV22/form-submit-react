# 📋 Formulário de Captura - React.js

Este projeto é um **formulário de captura de dados pessoais** desenvolvido com **React.js, Material-UI e Yup** para validação de formulários. Ele inclui campos dinâmicos para **CPF/RG**, validações automáticas e máscaras de entrada.

---

## 🚀 **Tecnologias Utilizadas**
- **React.js** - Biblioteca principal para construção da interface.
- **Vite** - Ferramenta de build e desenvolvimento rápido.
- **Material-UI** - Componentes estilizados e responsivos.
- **Yup** - Validação de dados de entrada do formulário.
- **React Hook Form** - Gerenciamento de formulários otimizado.
- **React Input Mask** - Aplicação de máscaras de entrada (CPF, RG).
- **MUI Date Pickers** - Seleção de datas com validação.
- **ESLint & Prettier** - Padronização de código.

---

## 📦 **Estrutura de Pastas**
```bash
FORM-SUBMIT-REACT
│-- node_modules
│-- public
│   ├── vite.svg
│-- src
│   ├── assets
│   │   ├── react.svg
│   ├── components
│   │   ├── AddressForm.jsx
│   │   ├── Button.jsx
│   │   ├── DatePicker.jsx
│   │   ├── FormInput.jsx
│   │   ├── MaskedInput.jsx
│   │   ├── SelectInput.jsx
│   │   ├── Validation.js
│   ├── config
│   │   ├── api.js
│   ├── forms
│   │   ├── PersonalDataForm.jsx
│   ├── hooks
│   │   ├── useFormValidation.js
│   ├── styles
│   │   ├── bundle.css
│   │   ├── form.module.css
│   ├── App.jsx
│   ├── main.jsx
│-- .eslintrc.json
│-- .gitignore
│-- .prettierrc.json
│-- index.html
│-- package.json
│-- README.md
│-- vite.config.js
│-- yarn.lock
```
## 📌 Funcionalidades
- ✅ **Campos obrigatórios** com validação automática.
- ✅ **Máscaras** para CPF e RG.
- ✅ **Seleção dinâmica** entre RG e CPF.
- ✅ **Validação com Yup** para garantir dados corretos.
- ✅ **Seleção de data com verificação** de datas inválidas (ex: 30/02/2023).
- ✅ **Lista completa de estados brasileiros** no campo de seleção.
- ✅ **Layout responsivo** usando Material-UI.
- ✅ **Estilização com espaçamento e padding** para um design agradável.

## ✅ Validações Implementadas
 O formulário inclui validações automáticas usando **Yup**:
- 🔹 **Nome Completo:** Não pode conter números.
- 🔹 **CPF:** Deve seguir o formato 000.000.000-00.
- 🔹 **RG:** Deve seguir o formato 00.000.000-0.
- 🔹 **Telefone:** Aceita apenas números.
- 🔹 **E-mail:** Deve ser um e-mail válido.
- 🔹 **Data de Nascimento:** Não permite datas inválidas.
- 🔹 **Estado:** Lista completa de estados brasileiros.

## 🛠 Instalação e Execução

📥 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/form-submit-react.git
```

📦 2. Acesse a pasta e instale as dependências
```bash
cd form-submit-react
yarn install
```

▶️ 3. Rode o projeto
```bash
yarn dev

```

Acesse http://localhost:5173/ no navegador.

## 🎨 Exemplo Visual
<br>
Aqui está uma prévia do formulário: <br>

![image](https://github.com/user-attachments/assets/0380b1a5-20b9-46ec-9b0c-cbac980799c9)


## 🔍 Possíveis Melhorias Futuras
- ✅ Integração com backend para persistência de dados.
- ✅ Validação avançada de CPF/RG com bibliotecas específicas.
- ✅ Exibição de mensagens de erro mais detalhadas.

👨‍💻 Desenvolvido por: Lucas Rones🚀
