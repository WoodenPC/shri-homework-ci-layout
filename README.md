# shri-homework-ci-layout
ШРИ домашняя работа №1 верстка CI системы

В качестве сборщика использовал gulp, для препроцессора взял scss.

Ответы на вопросы:

- правильное использование БЭМ-сущностей
  - какие части макета являются одним и тем же блоком?
    Сущности, которые не зависят друг от друга и могут быть повторно использованы в разных местах.
  - какие стили относятся к блокам, а какие к элементам и модификаторам?
    Стили, относящиеся к блокам, описывают внешний вид независимой сущности, которая может быть использована повторно в разных местах. Стили модификаторов задают внешний вид элементов и блоков для различных состояний. Стили, которые относятся к элементам, описывают внешний вид сущности в контексте родителя (блока).
  - где нужно использовать каскады и почему?
    Использовать каскад не рекомендуется, т.к. может возрастать сложность понимания логики стилей и сложность повторного использования кода. Каскады в блоках разрешаются, когда мы хотим менять элементы в зависимости от состояния блока. У себя в проекте я использовал каскады в селекторах, когда нужно было задать отступы всем элементам в колонке/строке кроме первого.
- консистентность
  - какие видите базовые и семантические константы?
      Константы размеров шрифтов, высоты текста, отступов и цветов (хотя тут слишком видов серого и я не стал заморачиваться и написал grey-1 grey-2 и тд), 
  - какие видите закономерности в интерфейсе?
      На каждая страница поделена на 3 сущности шапка, основной контейнер и футер (кэп). TODO:
- адаптивность
  - где видите вариативность данных и как это обрабатываете?
      Вариатвность данных обрабатываю через модификаторы, например разные статусы коммитов.
  - какие видите особенности, связанные с размером экрана?
      Под меньшие размеры экрана контент расползается на всю ширину и там где элементы несколько элементов могло идти в одной строке, в мобильном варианте они идут в колонке
  - что еще повлияло на вашу вёрстку?
      Общение с другими людьми, которые тоже выполняют это задание.


