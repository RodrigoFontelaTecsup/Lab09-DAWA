import { Component } from '@angular/core';
import { Imagen } from '../imagen';

@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['./lista-imagenes.component.css']
})
export class ListaImagenesComponent {
  imagenes: Imagen[] = [
    new Imagen('https://visme.co/blog/wp-content/uploads/2021/06/romance-book-cover-template-visme-963x1536.jpg', 'The Last Vow', 'Esta plantilla de portada de libro de romance es el elemento perfecto para agregar a tu historia de amor. Las fuentes elegantes y los colores profundos y místicos crean un telón de fondo romántico mientras dibujan el foco en el centro de atención: la novia.'),
    new Imagen('https://visme.co/blog/wp-content/uploads/2021/06/novel-book-cover-template-visme.jpg', 'The Garden', 'Esta nueva plantilla de portada de libro tiene un diseño elegante y minimalista con detalles florales. La fuente encantadora en el centro llama la atención sobre el título del libro, y los tonos pastel profundos le dan un toque clásico a cualquier novela o libro de ficción.'),
    new Imagen('https://visme.co/blog/wp-content/uploads/2021/06/thriller-book-cover-template-visme.jpg', 'Breathe', 'Haga temblar a sus lectores de emoción con esta plantilla de portada para libros de suspenso. Con la fuente roja brillante sobre un fondo fotográfico escalofriante, esta portada de libro es perfecta para todo tipo de obras de suspenso, misterio, terror y similares.'),
    new Imagen('https://visme.co/blog/wp-content/uploads/2021/06/creative-typography-book-cover-template-visme.jpg', 'Typography', 'Si está buscando una plantilla de portada de libro creativa que sea minimalista y única al mismo tiempo, esta plantilla de portada es una excelente opción. Puede usar esta portada para todo tipo de géneros, desde libros de negocios y de autoayuda hasta obras de ficción, no ficción, contemporáneas y clásicas.'),
    new Imagen('https://visme.co/blog/wp-content/uploads/2021/06/architecture-book-cover-template-visme.jpg', 'Mordern Architecture', 'Haga que su libro de arquitectura, bienes raíces o construcción desaparezca de los estantes con una Portada llamativa como esta. Esta plantilla de portada de libro es moderna y sofisticada, y el diseño de las fuentes seguramente hará que su libro se destaque en los estantes.'),
    new Imagen('https://visme.co/blog/wp-content/uploads/2021/06/business-book-cover-template-visme-963x1536.jpg', 'The Moon', 'Esta plantilla de portada de libro de negocios es una excelente opción para libros de marketing digital, Finanzas, Recursos Humanos y otros temas relacionados con negocios a gran escala. El estilo ilustrado hace de esta portada de libro una opción versátil.'),
  ];
}
