# Império Digital - Site de Marketing Digital

![Logo da Império Digital](/public/logo/logo%20sem%20fundo.png)

## Visão Geral

O Império Digital é um site institucional para uma agência de marketing digital, desenvolvido com tecnologias modernas para proporcionar uma experiência de usuário fluida e profissional. O site apresenta os serviços, produtos, informações sobre a empresa, formulário de contato e seção de carreiras.

## Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **React 18**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset tipado de JavaScript
- **Vite**: Build tool rápida para desenvolvimento web moderno
- **Tailwind CSS**: Framework CSS utilitário para design responsivo
- **shadcn/ui**: Componentes de UI reutilizáveis e acessíveis
- **Lucide Icons**: Biblioteca de ícones SVG
- **React Hook Form**: Gerenciamento de formulários
- **Zod**: Validação de esquemas e tipos

## Estrutura do Projeto

```
digital-vendas-imperio/
├── public/
│   ├── logo/
│   │   └── logo sem fundo.png
│   ├── videos/
│   │   └── video-market.mp4
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── AboutSection.tsx
│   │   ├── CareersSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PartnersSection.tsx
│   │   ├── ProductsSection.tsx
│   │   └── ServicesSection.tsx
│   ├── lib/
│   ├── App.tsx
│   └── main.tsx
└── ...
```

## Componentes Principais

O site é composto pelos seguintes componentes principais:

1. **Header**: Barra de navegação fixa no topo com logo e menu
2. **Hero**: Seção inicial de destaque com chamada para ação
3. **AboutSection**: Apresentação da empresa com vídeo institucional
4. **ServicesSection**: Exibição dos serviços oferecidos
5. **ProductsSection**: Apresentação dos produtos disponíveis
6. **PartnersSection**: Lista de parceiros da empresa
7. **CareersSection**: Seção de recrutamento e carreiras
8. **ContactSection**: Formulário de contato
9. **Footer**: Rodapé com informações de contato e links sociais

## Requisitos de Sistema

- Node.js 16.x ou superior
- npm 8.x ou superior

## Instalação e Execução

Siga estas etapas para configurar e executar o projeto localmente:

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Navegue até o diretório do projeto
cd digital-vendas-imperio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173` (ou a porta indicada no terminal).

## Build para Produção

Para criar uma versão otimizada para produção:

```bash
# Gere os arquivos de produção
npm run build

# Opcional: visualize a versão de produção localmente
npm run preview
```

## Personalização

### Cores

O projeto utiliza um esquema de cores personalizado definido no arquivo de configuração do Tailwind. As principais cores são:

- **imperio-blue**: Azul principal da marca
- **imperio-black**: Preto personalizado para fundos
- **imperio-gray**: Tons de cinza para elementos secundários

### Conteúdo

Para modificar o conteúdo do site, edite os arquivos de componentes correspondentes em `src/components/`.

## Implantação

O projeto pode ser implantado em qualquer plataforma de hospedagem que suporte aplicações estáticas, como:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS Amplify

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

## Contato

Para mais informações, entre em contato com a equipe de desenvolvimento.

---

Desenvolvido por Império Digital © 2023
