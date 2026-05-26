import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Inicio",
    posts: "Posts",
    tags: "Etiquetas",
    about: "Acerca de",
    archives: "Archivo",
    search: "Buscar",
    personal: "Personal",
  },
  post: {
    publishedAt: "Publicado el",
    updatedAt: "Actualizado",
    sharePostIntro: "Comparte esta publicación:",
    sharePostOn: "Comparte esta publicación en {{platform}}",
    sharePostViaEmail: "Comparte esta publicación por correo",
    tagLabel: "Etiquetas",
    backToTop: "Volver arriba",
    goBack: "Volver",
    editPage: "Editar página",
    previousPost: "Publicación anterior",
    nextPost: "Publicación siguiente",
  },
  pagination: {
    prev: "Anterior",
    next: "Siguiente",
    page: "Página",
  },
  home: {
    heroTitle: "Hola, soy Djalma",
    heroIntro:
      "Bienvenido a mi blog personal, donde escribo sobre desarrollo de software, las herramientas que uso y las cosas que aprendo por el camino.",
    socialLinks: "Redes sociales",
    featured: "Destacados",
    recentPosts: "Publicaciones recientes",
    allPosts: "Todas las publicaciones",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Todos los derechos reservados.",
  },
  pages: {
    tagTitle: "Etiqueta",
    tagDesc: "Todos los artículos con la etiqueta",

    tagsTitle: "Etiquetas",
    tagsDesc: "Todas las etiquetas usadas en las publicaciones.",

    postsTitle: "Publicaciones",
    postsDesc: "Todos los artículos que he publicado.",

    archivesTitle: "Archivo",
    archivesDesc: "Todos los artículos que he archivado.",

    searchTitle: "Buscar",
    searchDesc: "Busca cualquier artículo ...",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    toggleTheme: "Cambiar tema",
    searchPlaceholder: "Buscar publicaciones...",
    noResults: "No se encontraron resultados",
    goToPreviousPage: "Ir a la página anterior",
    goToNextPage: "Ir a la página siguiente",
  },
  notFound: {
    title: "404 No encontrado",
    message: "Página no encontrada",
    goHome: "Volver al inicio",
  },
} satisfies UIStrings;
