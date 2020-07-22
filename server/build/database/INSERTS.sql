INSERT INTO IMA_Direccion(nombre)VALUES
    ('Venezuela'),
	('Japon'),
    ('Francia'),
    ('Grecia'),
    ('India'),
    ('Korea'),
    ('Holanda'),
    ('España'),
    ('Dinamarca');


INSERT INTO IMA_Esencia_Perfume(tsca_cas, nombre, codint, tipo_extraccion, descripcion)VALUES
(1234, 'etanol', 1, 'Maceracion', 'El vegetal se sumerge en aceite o grasa a temperatura de 60 ó 70 grados. El calor rompe las células vegetales y los aceites esenciales son absorbidos por la grasa. '),
(5678, 'limon', null, 'Expresion', 'Es un método de obtener aceites esenciales de plantas o partes de plantas aplicando presión. Los antiguos egipcios guardaban flores en bolsas de tela y las estrujaban hasta que salía el aceite. Este método fue ampliamente utilizado hasta el descubrimiento de la destilación.'),
(9001, 'lavanda', 2, 'Destilacion', 'Arrastre por corriente de vapor de agua. De esta forma se obtienen las esencias o aceites esenciales. '),
(2345, 'jazmín', 3, 'Enfleurage', 'Los pétalos de las flores se depositan sobre una capa de grasa (concreto) y a las 24 horas, los aceites se separan de la grasa con alcohol (absoluto).'),
(4532, 'lima', 4, 'Expresion', ' se trata de un método muy utilizado para la extracción de cítricos como el limón, la naranja, la bergamota, la mandarina o la lima. Este método de extracción presenta la ventaja de no someter los aceites esenciales a temperaturas elevadas.'),
(8760, 'romero', null, 'Destilacion', 'es, sin duda, el proceso de extracción más fácil y barato, utilizado por las más prestigiosas marcas de perfume y de extracción de aceites esenciales. Convierte los aceites esenciales en vapor (vea Destilación a Vapor) y después vuelve a condensarlos.'),
(9112, 'rosa', null, 'Maceracion', 'La maceración de flores y plantas en un aceite para extraer su esencia han sido utilizado durante miles de años, mucho antes de que se empezaran a hacer los aceites esenciales mediante destilación.'),
(2901, 'nardo', 5, 'Enfleurage', 'El enfleurage es un método extractivo para obtener los aceites esenciales aromáticos de ciertas flores.'),
(3457, 'mandarina ', 6, 'Expresion', 'La presión o prensado de corteza de frutos cítricos produce también esencias o aceites esenciales.'),
(6781, 'vainilla', null, 'Maceracion', 'una planta del género de las orquídeas que produce un fruto del cual se obtiene este saborizante a través de un proceso de maceración.'),
(7100, 'bergamota', 7, 'Expresion', 'fruta cítrica algo más pequeña que un limón, de forma parecida a una pera, y sabor agrio. El aceite esencial se extrae de la piel arrugada y desprende un aroma muy agradable que es muy utilizado en perfumería natural, porque refuerza y armoniza el aroma de una mezcla de ingredientes.'),
(9234, 'sandalo', 8, 'Destilacion', 'Además tiene propiedades astringentes, tonificantes, hidratantes, descongestionantes y rejuvenecedoras. Entre los usos y beneficios podríamos destacar: Aceite esencial de sándalo para la piel.'),
(7400, 'pera', null, 'Destilacion', 'Esta planta bulbosa y perenne podrás encontrarla en casi cualquier tipo de suelo y jardín, pues tiene una gran facilidad de propagación y enraizamiento.'),
(8321, 'manzana', null, 'Expresion', 'Esta planta bulbosa y perenne podrás encontrarla en casi cualquier tipo de suelo y jardín, pues tiene una gran facilidad de propagación y enraizamiento.'),
(1690, 'lirio', 9, 'Expresion', 'Esta planta bulbosa y perenne podrás encontrarla en casi cualquier tipo de suelo y jardín, pues tiene una gran facilidad de propagación y enraizamiento.'),
(6310, 'azmilcle', null, 'Enfleurage', ' tiene un aroma muy particular, dulce y cálido de larga perdurabilidad. Es usado en aromaterapia para aliviar síntomas de depresión y ansiedad. Usado en masaje o como perfume alivia las preocupaciones y eleva el nivel anímico y energético. A nivel físico facilita la circulación sanguínea, alivia molestias articulares y espasmos y dolores musculares.'),
(9688, 'hierba', 10, 'Maceracion', ' son generados por la planta en células secretoras aisladas, en pelos secretores o en bolsas o canales secretores. Las células secretoras están diseminadas en los parénquimas (tejido fundamental) de todos los órganos o en la epidermis (tejido de protección) de los tallos, de las hojas, de las flores o de los frutos. '),
(3900, 'pachuli', null, 'Maceracion', 'La esencia de pachulí es fuerte e intensa. Se la ha usado durante cientos de años en perfumes, y crece en el oeste y este de la India.');

INSERT INTO IMA_Familia_Olfativa(nombre, descripcion)VALUES
('Verde', 'Es la única familia de perfumes que se asocia a un color. Cuando se huele un perfume verde, casi se puede ver la hierba recién cortada, los tallos de las plantas cubiertas de rocío, las hojas crujientes, las agujas de los pinos en el aire del bosque.'),
('Citrico', 'Los perfumes cítricos suelen ser adecuados como fragancias unisex; tan adecuados para hombre como para mujer. Se complementan con notas aromáticas y amaderadas. Evocan frescura y simplicidad.'),
('Flores', 'La mayoría de las fragancias femeninas contienen notas florales, y muchas fragancias masculinas tienen un toque floral menos intenso. Son las más fáciles de reconocer.'),
('Frutas', 'Los perfumes frutales se han hecho muy populares en los últimos años. En su composición se distinguen las notas de las frutas maduras.'),
('Aromaticos', 'La mayoría de los perfumes de esta familia son masculinos. Los acordes principales se centran en las hierbas aromáticas, cuyos aromas se complementan con notas amaderadas.'),
('Helechos', 'Los perfumes de la familia Fougère son muy populares como fragancias para hombre, aunque los primeros perfumes de este tipo fueron creados para mujer.'),
('Chipre', 'Los perfumes de la familia Chipre (o Chypre) son cálidos, secos y profundos.'),
('Maderas', 'Muchos perfumes de esta familia son masculinos, otros son unisex, y algunos tienen un carácter inequívocamente femenino.'),
('Orientales', 'La familia oriental incluye fragancias masculinas y femeninas. Son perfumes cálidos, sensuales, dulces y especiados.'),
('Otros', 'Aromas combinados con alguna otra familia');

INSERT INTO IMA_Presentacion(volml)VALUES
(30),
(50),
(75),
(100),
(125),
(150),
(175),
(200),
(350);

INSERT INTO IMA_Palabra_Clave(palabra)VALUES
('naranja'),
('jazmin'),
('manzana'),
('albahaca'),
('bergamota'),
('pachuli'),
('pino'),
('vainilla'),
('chocolate'),
('lavanda'),
('rosas'),
('sándalo'),
('canela'),
('lirio'),
('pimienta'),
('almizcle'),
('láudano'),
('haba tonka'),
('tabaco'),
('cafe'),
('tallos de plantas'),
('hierba'),
('pomelos'),
('limones'),
('mandarinas'),
('violetas'),
('narcisos'),
('mango'),
('higo'),
('melocotón'),
('pera'),
('frambuesa'),
('geranio'),
('comino'),
('romero'),
('salvia'),
('maderas'),
('musgo de roble'),
('cedro'),
('madera quemada'),
('cuero'),

('hombre'),
('mujer'),
('unisex'),

('ligero'),
('intermedio'),
('intenso'),

('informal'),
('natural'),
('clasico'),
('seductor'),
('moderno'),

('floral'),
('frutal'),
('verde'),
('herbal'),
('citrico'),
('madera'),
('herbal aromatico'),
('otros'),

('diario'),
('trabajo'),
('ocasiones especiales'),

('libertad'),
('independencia'),
('creatividad'),
('diversion');


INSERT INTO IMA_P_F(fk_palabra_clave, fk_familia_olfativa)VALUES
(1, 2),
(1, 4),
(2, 3),
(2, 5),
(2, 7),
(3, 4),
(4, 5),
(5, 2),
(3, 9),
(4, 1),
(5, 6),
(5, 7),
(6, 7),
(6, 8),
(6, 9),
(7, 8),
(7, 6),
(8, 3),
(8, 4),
(8, 9),
(9, 10),
(10, 5),
(10, 6),
(10, 8),
(11, 3),
(11, 7),
(12, 7),
(12, 8),
(12, 9), 
(13, 9),
(14, 1),
(14, 3),
(15, 9),
(15, 7),
(15, 6),
(16, 3),
(16, 8),
(17, 9),
(17, 7),
(18, 9),
(19, 10),
(19, 9),
(20, 10),
(20, 5),
(21, 1),
(22, 1),
(22, 5),
(23, 2),
(23, 5),
(24, 2),
(24, 4),
(25, 2),
(25, 4),
(26, 3),
(26, 9),
(27, 3),
(27, 7),
(28, 4),
(28, 3),
(29, 4),
(29, 3),
(30, 4),
(30, 3),
(31, 4),
(31, 3),
(31, 8),
(32, 4),
(32, 3),
(33, 5),
(33, 6),
(34, 5),
(34, 9),
(34, 8),
(35, 5),
(35, 1),
(36, 5),
(36, 1),
(37, 6),
(37, 5),
(38, 6),
(38, 7),
(39, 8),
(39, 5),
(40, 10),
(40, 8),
(41, 10),
(43, 1),
(45, 1),
(46, 1),
(49, 1),
(51, 1),
(53, 1),
(60, 1),
(61, 1),
(62, 1),
(64, 1),
(66, 1),
(67, 1),

(42, 2),
(46, 2),
(47, 2),
(48, 2),
(50, 2),
(52, 2),
(53, 2),
(59, 2),
(58, 2),
(57, 2),
(61, 2),
(63, 2),
(65, 2),
(66, 2),
(67, 2),

(43, 3),
(45, 3),
(46, 3),
(52, 3),
(48, 3),
(49, 3),
(52, 3),
(53, 3),
(58, 3),
(54, 3),
(61, 3),
(62, 3),
(63, 3),
(64, 3),
(65, 3),
(67, 3),


(44, 4),
(47, 4),
(50, 4),
(52, 4),
(53, 4),
(56, 4),
(61, 4),
(65, 4),
(67, 4),


(44, 5),
(47, 5),
(50, 5),
(52, 5),
(53, 5),
(60, 5),
(56, 5),
(61, 5),
(65, 5),
(67, 5),

(44, 6),
(45, 6),
(46, 6),
(47, 6),
(48, 6),
(51, 6),
(52, 6),
(53, 6),
(55, 6),
(58, 6),
(62, 6),
(63, 6),
(66, 6),
(65, 6),
(64, 6),

(43, 7),
(46, 7),
(47, 7),
(48, 7),
(49, 7),
(50, 7),
(53, 7),
(57, 7),
(58, 7),
(63, 7),
(62, 7),
(67, 7),
(66, 7),
(64, 7),


(43, 8),
(45, 8),
(47, 8),
(49, 8),
(50, 8),
(52, 8),
(53, 8),
(59, 8),
(58, 8),
(60, 8),
(62, 8),
(63, 8),
(64, 8),
(66, 8),
(67, 8),

(44, 9),
(45, 9),
(50, 9),
(51, 9),
(49, 9),
(53, 9),
(59, 9),
(57, 9),
(61, 9),
(67, 9),
(64, 9),



(43, 10),
(46, 10),
(48, 10),
(51, 10),
(52, 10),
(57, 10),
(54, 10),
(56, 10),
(62, 10),
(63, 10),
(67, 10),
(65, 10);

INSERT INTO IMA_perfumista(nombre, apellido, genero, fk_direccion)VALUES
('Pierre', 'Armigeant', 'Masculino', 3),
('Frantz', 'Heinrich Müller', 'Masculino', 9),
('Jerome', 'Di Marino', 'Masculino', 3),
('Francois', 'BONVIN-ANDRÉ', 'Masculino', 3),
('George', 'Fylachtos', 'Masculino', 4),
('Beatrice', 'Aguilar', 'Femenino', 8),
('François', 'Demachy', 'Masculino', 3),
('Bruma', 'Trudon', 'Masculino', 3),
('Aimé', 'Guerlain', 'Masculino', 3),
('Harry', 'Fremont', 'Masculino', 3),
('Rozita', 'Che Wan', 'Femenino', 5),
('Honorine', 'Blanc', 'Femenino', 3);

INSERT INTO IMA_Asociacion_Nacional(nombre, region)VALUES
('Prodarom', 'Europa'),
('AEFAA', 'Europa'),
('JFFMA', 'AsiaPacífico'),
('KFFA', 'AsiaPacífico');

INSERT INTO IMA_productor(nombre, pag_web, telefono, fk_asociacion_nacional)VALUES
('Takasago', 'https://www.takasago.com/en/index.html', '968889920', null),
('Vioryl', 'http://www.vioryl.gr/', '302295045100', null),
('Prodarom', 'https://www.prodarom.com/', '3222142060', 1),
('AEFAA', 'http://www.aefaa.com/web/aefaa.nsf/index.xsp', '34915938490', 2);

INSERT INTO IMA_perfume(nombre, fecha_nacimiento, genero, fk_productor)VALUES
('Azure', '18-03-1907', 'Femenino', 1),
('Royal Copehagen-Monarch', '23-07-2017', 'Masculino', 2),
('Carven', '15-05-2018', 'Femenino', 3),
('Repelkito', '05-09-2016', 'Unisex', 4),
('NatGuard','21-11-2018', 'Unisex', 4),
('Mosquit', '22-05-2017', 'Unisex', 2),
('Miss Dior-Christian Dior', '12-01-2012', 'Femenino', 1),
('Trydom-Bruma','25-10-2017', 'Femenino', 3),
('Jicky-Gurlain', '05-12-1882', 'Unisex', 4),
('Precious-RCW ', '24-08-2008', 'Femenino', 4),
('David Yurman-Summer Essence', '15-04-2012', 'Masculino', 1),
('Encounter-Calvin Klein ', '19-09-2012', 'Masculino', 3);


INSERT INTO IMA_Intensidad(tipo, concentracion, descripcion, fk_perfume)VALUES
('Perfume', 30, 'la forma más concentrada', 1),
('Eau de Perfume', 15, 'duración de la fragancia sobre nuestra piel puede llegar a las seis horas', 2),
('Eau de Toilette', 10, ' Las fragancias siguen siendo frescas pero aumenta la fijación, llegando a durar el aroma hasta tres horas.', 3),
('Eau de Cologne', 5, 'Con una concentración de fragancia mucho más baja (aproximadamente del 2% al 4%) y un alto contenido de alcohol, la colonia es considerablemente más barata que las anteriores. Generalmente dura hasta dos horas.', 4),
('Splash perfumes', 1, 'Esta última fragancia es bastante similar a la anterior, ya que el aroma durará hasta dos horas. Sin embargo, tiene una concentración de fragancia aún más baja de solo 1% a 3%.', 5),
('Perfume', 30, 'la forma más concentrada', 6),
('Eau de Perfume', 15, 'duración de la fragancia sobre nuestra piel puede llegar a las seis horas', 7),
('Eau de Toilette', 10, ' Las fragancias siguen siendo frescas pero aumenta la fijación, llegando a durar el aroma hasta tres horas.', 8),
('Eau de Cologne', 5, 'Con una concentración de fragancia mucho más baja (aproximadamente del 2% al 4%) y un alto contenido de alcohol, la colonia es considerablemente más barata que las anteriores. Generalmente dura hasta dos horas.', 9),
('Splash perfumes', 1, 'Esta última fragancia es bastante similar a la anterior, ya que el aroma durará hasta dos horas. Sin embargo, tiene una concentración de fragancia aún más baja de solo 1% a 3%.', 10),
('Perfume', 30, 'la forma más concentrada', 11),
('Eau de Perfume', 15, 'duración de la fragancia sobre nuestra piel puede llegar a las seis horas', 12);

INSERT INTO IMA_F_E(fk_esencia_perfume, fk_familia_olfativa)VALUES
(1234, 5),
(1234, 6),
(5678, 4),
(5678, 2),
(9001, 5),
(9001, 6),
(2345, 3),
(2345, 5),
(4532, 4),
(4532, 2),
(8760, 5),
(8760, 1),
(8760, 7),
(9112, 9),
(9112, 4),
(9112, 7),
(2901, 3),
(2901, 4),
(3457, 2),
(3457, 5),
(3457, 9),
(3457, 4),
(6781, 10),
(7100, 2),
(7100, 6),
(7100, 7),
(7100, 3),
(7100, 9),
(9234, 7),
(7400, 1),
(7400, 3),
(8321, 4),
(8321, 3),
(1690, 3),
(1690, 4),
(6310, 3),
(6310, 7),
(9688, 1),
(3900, 9),
(3900, 8),
(3900, 3);

INSERT INTO IMA_Monolitico(fk_perfume, fk_esencia_perfume)VALUES
(1, 2345),
(1, 4532),
(2, 9001),
(2, 3457),
(2, 6310),
(2, 5678),
(3, 3457),
(3, 2345),
(3, 9001),
(3, 9234),
(4, 1234),
(4, 5678),
(5, 1234),
(5, 5678),
(6, 4532),
(6, 2901),
(6, 1234),
(6, 9234),
(6, 6310),
(6, 9688),
(7, 9001),
(7, 4532),
(7, 6310),
(8, 9001),
(8, 2901),
(8, 4532),
(9, 5678),
(9, 2345),
(10, 9001),
(10, 3457),
(11, 5678),
(11, 8760),
(11, 9112),
(11, 8321),
(11, 1690),
(11, 6310),
(12, 3457),
(12, 2345),
(12, 6310),
(12, 3900);

INSERT INTO IMA_proveedor(nombre, pag_web, telefono, fk_asociacion_nacional, fk_direccion)VALUES
('ETERNIS Dime Chemicals', 'http://www.eternis.com/', '912266513400', null, 5),
('Robertet', 'https://www.robertet.com', '33144950280', null, 3),
('JFFMA', 'https://www.jffma-jp.org/english/', '81335161600', 3, 2),
('KFFA', 'http://www.kffa-kr.or.kr/', '025143585', 4, 6),
('NEA', 'https://www.nea-nederland.nl/','31616915330', null, 7);


INSERT INTO IMA_Ing_Materia_Esencial(tsca_cas, nombre, descripcion, solubilidad, proceso, descripproceso, vigencia, fk_proveedor) VALUES
(102761, '(tri-)Acetin', 'se emplea como disolvente para la extracción de aromas.', '6.1 g/100 mL en agua', 'Destilación al vacío', 'la triacetina es un líquido oleoso incoloro e inodoro que es miscible con etanol, éter etílico, cloroformo y benceno, y ligeramente soluble en agua y disulfuro de carbono. Se utiliza como aglutinante de filtro para cigarrillos y como agente fijador, solvente y endurecedor de perfume. Y se puede aplicar a cosméticos, fundición, medicina, tintes y otras industrias.', '', 1),
(111875, '1-Octanol', 'El 1-octanol se consume principalmente como precursor de los perfumes. Se ha examinado para controlar el temblor esencial y otros tipos de temblores neurológicos involuntarios.', '0,3 g/L (20 °C) en agua', 'Destilacion', '1-Octanol está fabricado para la síntesis de ésteres para su uso en perfumes y aromas . Tiene un olor acre.', '', 2),
(504632, '1,3-Propanediol', 'El 1,3-propanodiol se usa tanto para aromatizar como para perfumar para diluir materiales. Incoloro e inodoro. Soluble en agua y alcohol.', '9,5 g/L en agua', 'Destilacion', 'se lo utiliza en combinación con el alcohol para dar mayor estabilidad a los aceites esenciales que conforman el perfume y funciona como un retardador de evaporación, lo que lo convierte en un agente fijador.', '', 3),
(095874, '2,5-Xylenol', 'agentes de sabor y fragancia. Tiene un olor de tipo fenólico y un sabor a humedad.', '3540 mg/L 25 °C en agua', 'Destilacion al vacio', 'smoky, sweet and earthy notes', '', 4),
(672831, '4-Heptenal', 'líquido aceitoso incoloro a amarillo pálido claro', '3200 mg/L 25 °C en agua', 'Destilacion', 'Útil para proporcionar un efecto herbáceo verde.', '', 5),
(100061, 'Acetanisole', 'dulce intenso, algo áspero, similar al heno con notas florales, espino, acacia, mimosa, similar al anisaldehído', '2474 mg/L 25 °C en agua y glicerina', 'Destilacion', 'procesos para fabricar productos de condensación o adición viscosos y para fabricar gránulos de estos productos viscosos; los productos son de forma típica materiales activos que se depositan eficientemente sobre las superficies, como los tejidos.', '', 1),
(800769, 'almond oil', 'aceite obtenido de almendras, utilizado en muchos productos, especialmente productos para la piel', '0,92 g/cm3 a 20 ºC.', 'Destilacion', 'Este aceite es incoloro con olor anodino.', '', 2),
(507700, 'Borneol', 'El borneol es un alcohol terpeno sólido blanco creado sintéticamente por la reducción del alcanfor, y también se encuentra naturalmente en Artemisia y varias otras especies de plantas. Además de su uso en perfumería, el Borneol también es un remedio común en la medicina herbal china.', 'INSOLUBLE EN AGUA', 'Destilacion', 'CARACTERISTICO, SECO, ALCANFORADO ', '', 3),
(802889, 'Caramel color', 'Una nota lactónica cremosa, sensual, rica y cremosa que enriquece los perfumes gourmand y agrega dulzura a las composiciones florales.', 'Soluble en agua', 'Destilacion', 'Los perfumes acaramelados son aquellos que se elaboran con base de vainilla y luego se combina con alguno otro aroma particular.', '', 4),
(802391, 'Galbanum oil', 'El aceite de gálbano se destila al vapor para producir un líquido móvil transparente, amarillo pálido o verde oliva. Resinifica fácilmente con la exposición al aire. Su perfil de fragancia es intensamente verde, potente, potente, cortante, hierba cortada, hoja de perejil, té de perejil, hojas verdes silvestres en invierno en el Wadi, tierra, balsámico, fresco.', 'alcohol, water, 0.8331 mg/L 25 °C', 'Destilacion', 'Galbanum tiene una intensa fragancia verde con elementos amaderados y balsámicos. A menudo descrito como terroso o similar a un bosque, este compuesto de fragancia se valora por su capacidad para impartir un aroma verde rico y picante .', '', 5);

INSERT INTO IMA_per_fas(tipo_nota, fk_perfume, fk_esencia_perfume)VALUES
('notas de fondo', 1, 2345),
('notas de fondo', 1, 4532),

('notas de fondo', 2, 9234),
('notas de corazón', 2, 9001),
('notas de salida', 2, 3457),
('notas de salida', 2, 5678),

('notas de fondo', 3, 3457),
('notas de fondo', 3, 9001),
('notas de corazón', 3, 2345),
('notas de salida', 3, 9234),

('notas de fondo', 4, 1234),
('notas de salida', 4, 5678),

('notas de fondo', 5, 1234),
('notas de salida', 5, 5678),

('notas de fondo', 6, 9234),
('notas de fondo', 6, 6310),
('notas de corazón', 6, 1690),
('notas de corazón', 6, 2901),
('notas de salida', 6, 9688),
('notas de salida', 6, 1234),

('notas de fondo', 7, 6310),
('notas de fondo', 7, 3900),
('notas de corazón', 7, 2345),
('notas de corazón', 7, 9112),
('notas de salida', 7, 3457),

('notas de fondo', 8, 7100),
('notas de fondo', 8, 9234),
('notas de corazón', 8, 2345),
('notas de corazón', 8, 9112),
('notas de salida', 8, 9001),
('notas de salida', 8, 2901),

('notas de fondo', 9, 6310),
('notas de fondo', 9, 9234),
('notas de corazón', 9, 9001),
('notas de corazón', 9, 2345),
('notas de corazón', 9, 9688),
('notas de salida', 9, 5678),
('notas de salida', 9, 4532),
('notas de salida', 9, 3457),


('notas de fondo', 10, 6781),
('notas de fondo', 10, 2345),
('notas de corazón', 10, 6310),
('notas de corazón', 10, 9112),
('notas de salida', 10, 6781),

('notas de fondo', 11, 9234),
('notas de fondo', 11, 6310),
('notas de corazón', 11, 9001),
('notas de corazón', 11, 1690),
('notas de corazón', 11, 9112),
('notas de salida', 11, 7400),
('notas de salida', 11, 8321),

('notas de fondo', 12, 6310),
('notas de corazón', 12, 3900),
('notas de corazón', 12, 2345),
('notas de salida', 12, 3457),
('notas de salida', 12, 6781);


INSERT INTO IMA_Ingrediente_Otro(nombre, ipc, tsca_cas, fk_proveedor)VALUES
('HELYCHRISUM BALKANS OIL', 1, 1234, 2),
('EUCALYPTUS CITRIODORA OIL ', 2, 5676, 2),
('CALAMUS OIL', null, 8000, 2),
('BORONIA RECO', null, 2445, 1),
('BENGAL PEPPER CO2 EXTRACT 15% MYGLIOL', 3, 2332, 1),
('STYRAX ABSOLUTE', 4, 5554, 1),
('COFFEE ABSOLUTE', 5, 9382, 3),
('TOMATO DRIED OLEORESIN', null, 8002, 3),
('CITRONELLOL NAT', 6, 2345, 3),
('BERGAMOT ITALY LOW FUROCOUMARIN OIL', null, 6512, 4),
('LIME HEART RECO', 7, 2900, 4),
('ORANGE BIGARADE OIL', 8, 1111, 4),
('ELEMI RESINOID', 9, 2309, 5),
('JUNIPER CORSICAN ORGANIC OIL', 10, 8232, 5),
('MINT PIPERITA USA OIL', null, 4454, 5);

INSERT INTO IMA_otro(fk_perfume, fk_ingrediente_otro)VALUES
(1, 2),
(1, 1),
(1, 13),

(2, 11),
(2, 14),
(2, 12),
(2, 7),

(3, 12),
(3, 4),
(3, 3),
(3, 10),

(4, 13),
(4, 11),
(4, 6),
(4, 9),

(5, 9),
(5, 13),
(5, 11),
(5, 1),

(6, 15),
(6, 8),
(6, 10),
(6, 7),

(7, 12),
(7, 3),
(7, 2),
(7, 11),

(8, 5),
(8, 14),
(8, 1),
(8, 15),

(9, 11),
(9, 8),
(9, 12),
(9, 2),


(10, 10),
(10, 7),
(10, 12),
(10, 14),

(11, 3),
(11, 14),
(11, 13),
(11, 4),

(12, 7),
(12, 6),
(12, 5),
(12, 9);

INSERT INTO IMA_F_Ima(fk_ing_materia_esencial, fk_familia_olfativa)VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(1, 3),
(2, 6),
(3, 10),
(4, 9),
(5, 2),
(6, 1),
(7, 8),
(8, 7),
(9, 4),
(10, 5);

INSERT INTO IMA_contrato(fecha_inicio, fecha_cancela, descripcion, motivo_cancela, exclusividad, fk_proveedor, fk_productor)VALUES
('12-06-2020', null,'', '', 'true', 1, 1),
('14-04-2019','13-04-2020','', 'Falta de entrega de orden completa', 'true', 2, 2),
('07-02-2019',null,'', '', 'true', 3, 3),
('23-09-2020',null,'', '', 'true', 4, 4),
('12-01-2018','23-06-2018', '', 'No cumplió las exigencias de contrato','false', 5, 2);


INSERT INTO IMA_Productor_Pais(fk_direccion, fk_productor)VALUES
(2, 1),
(4, 2),
(3, 3),
(8, 4),
(1, 2),
(5, 4),
(6, 3),
(7, 1),
(3, 1);

INSERT INTO IMA_Principal(fk_perfume, fk_familia_olfativa)VALUES
(1,3),
(1, 10),

(2,3),
(2,5),
(2,8),
(2,2),

(3,3),
(3,8),
(3,4),

(4,3),
(4,5),

(5,3),
(5,5),
(5, 10),

(6,3),
(6,1),
(6,8),

(7,2),
(7,8),
(7,3),

(8,3),
(8,8),
(8,5),
(8, 10),

(9,5),
(9,2),
(9,3),

(10,2),
(10,4),
(10,9),

(11,3),
(11,4),
(11,1),
(11,6),

(12,7),
(12,8),
(12,9),
(12, 10);

INSERT INTO IMA_Otro_Comp(fk_ingrediente_otro, fk_ing_materia_esencial)VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(1, 6),
(2, 5),
(3, 7),
(4, 8),
(5, 10),
(6, 1),
(7, 2),
(8, 3),
(9, 4),
(10, 4);

INSERT INTO IMA_catalogo(fk_contrato, fk_perfume, fk_ingrediente_otro, fk_ing_materia_esencial)VALUES
(1, 1, 1, null),
(1, 1, 2, null),
(1, 2, 11, null),
(1, 2, 14, null),
(1, 2, 12, null),
(1, 2, 7, null),
(1, 3, 12, null),
(1, 3, 4, null),
(1, 3, 3, null),
(1, 3, null, 10),
(2, 4, null, 1),
(2, 4, null, 2),
(2, 4, null, 3),
(2, 4, null, 4),
(2, 5, null, 5),
(2, 5, null, 6),
(2, 5, null, 7),
(2, 5, null, 8),
(2, 6, 15, null),
(2, 6, 8, null),
(2, 6, 10, null),
(2, 6, 7, null),
(3, 7, 12, null),
(3, 7, 3, null),
(3, 7, 2, null),
(3, 7, 11, null),
(3, 8, 5, null),
(3, 8, null, 8),
(3, 8, null, 9),
(3, 8, null, 10),
(3, 9, null, 1),
(3, 9, null, 2),
(3, 9, null, 3),
(3, 9, null, 4),
(4, 10, 10, null),
(4, 10, 7, null),
(4, 10, 12, null),
(4, 10, 14, null),
(4, 11, 3, null),
(4, 11, 14, null),
(4, 11, 13, null),
(4, 11, null, 2),
(4, 12, null, 3),
(4, 12, null, 4),
(4, 12, null, 5),
(4, 12, null, 6),
(5, 4, null, 7),
(5, 4, 11, null),
(5, 4, 6, null),
(5, 4, 9, null),
(5, 5, 9, null),
(5, 5, 13, null),
(5, 5, 11, null),
(5, 5, null, 4),
(5, 6, null, 5),
(5, 6, null, 6),
(5, 6, null, 7),
(5, 6, null, 8);

INSERT INTO IMA_Origen(fk_direccion, fk_ing_materia_esencial)VALUES
(1, 1),
(2, 3),
(3, 5),
(4, 7),
(5, 9),
(6, 10),
(7, 2),
(8, 4),
(9, 6),
(1, 8),
(2, 5),
(3, 7),
(4, 1),
(5, 2),
(6, 3),
(7, 10),
(8, 8),
(9, 9);

INSERT INTO IMA_envio(costo, recargo, tipo_transporte, fk_direccion, fk_proveedor)VALUES
(34, 15, 'vehiculo', 1, 1),
(40, 20, 'barco', 2, 2),
(56, 10, 'avion', 3, 3),
(50, 15, 'vehiculo', 4, 4),
(19, 18, 'vehiculo', 5, 1),
(25, 25, 'barco', 6, 2),
(15, 20, 'avion', 7, 3),
(67, 10, 'avion', 8, 4),
(20, 16, 'vehiculo', 9, 5),
(27, 23, 'barco', 1, 5),
(27, 23, 'avion', 3, 5);

INSERT INTO IMA_Condicion_Pago (tipo, cuota, porccuotas, meses) VALUES
	('Transferencia', 300, 15, 4),
	('Cheque', 150, 20, 2),
	('Tar_credito', 200, 10, 3),
	('Tar_debito', 100, 15, 1),
	('Transferencia', 250, 10, 3),
	('Cheque', 300, 20, 5),
	('Tar_credito', 80, 14, 6),
	('Tar_debito', 65, 20, 2),
	('Transferencia', 120, 10, 3),
	('Cheque', 165, 15, 1),
	('Tar_credito', 110, 10, 2),
	('Tar_debito', 135, 15, 1);

INSERT INTO IMA_Renueva(fecha, fk_contrato)VALUES
('12-05-2021', 1),
('07-01-2020', 3),
('23-08-2021', 4),
('18-06-2021', 2),
('06-10-2020', 5);

INSERT INTO IMA_Cond_c(fk_envio, fk_condicion_pago, fk_contrato)VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 6, 1),
(7, 7, 2),
(8, 8, 3),
(9, 9, 4),
(10, 10, 5),
(3, 11, 3),
(6, 12, 1),
(9, 4, 2);

INSERT INTO IMA_Pedido (fecha, fecha_cont, estatus, nro_factura, total, fk_cond_c, fk_condicion_pago, fk_proveedor) VALUES
	('12-08-2018', '22-08-2018', 'Aceptado', 1234, 100, 1, 1, 1),
	('05-06-2019', null, 'Pendiente', 4354, 150, 2, 2, 2),
	('23-01-2019', '28-01-2019', 'Aceptado', 1221, 56, 3, 3, 3),
	('17-04-2019', '24-04-2019', 'Pendiente', 3676, 85, 4, 4, 4),
	('26-11-2019', null, 'Pendiente', 9009, 130, 5, 5, 5),
	('01-12-2019', '10-12-2019', 'Aceptado', 1000, 150, 6, 6, 1),
	('12-12-2019', '19-12-2019', 'Pendiente', 1002, 152, 7, 7, 2),
	('24-09-2019', '01-10-2019', 'Aceptado', 1111, 55, 8, 8, 3),
	('09-03-2019', null, 'Pendiente', 1222, 36, 9, 9, 4),
	('15-05-2018', null, 'Pendiente', 2888, 25, 10, 10, 5),
	('27-07-2018', '30-07-2018','Aceptado', 2999, 99, 11, 11, 1),
	('30-10-2019', null, 'Pendiente', 3001, 111, 12, 12, 2);

	INSERT INTO IMA_pago (monto, fecha, fk_pedido) VALUES
	(100, '23-08-2018', 1),
	(150, '10-06-2019', 2),
	(56, '29-01-2019', 3),
	(85, '25-04-2019', 4),
	(130, '29-11-2019', 5),
	(150, '11-12-2019', 6),
	(152, '20-12-2019', 7),
	(55, '02-10-2019', 8),
	(36, '15-03-2019', 9),
	(25, '20-05-2018', 10),
	(99, '01-08-2019', 11),
	(111, '03-11-2019', 12);

INSERT INTO IMA_Presing (volml, precio_unitario, fk_ingrediente_otro, fk_ing_materia_esencial) VALUES
	(35, 15, 1, null),
	(50, 25, 1, null),
	(35, 10, 2, null),
	(50, 20, 2, null),
	(35, 20, 3, null),
	(50, 30, 3, null),
	(35, 15, 4, null),
	(50, 25, 4, null),
	(35, 15, 5, null),
	(50, 25, 5, null),
	(35, 15, 6, null),
	(50, 25, 6, null),
	(35, 15, 7, null),
	(50, 25, 7, null),
	(35, 15, 8, null),
	(50, 25, 8, null),
	(35, 15, 9, null),
	(50, 25, 9, null),
	(35, 15, 10, null),
	(50, 25, 10, null),
	(35, 15, 11, null),
	(50, 25, 11, null),
	(35, 15, 12, null),
	(50, 25, 12, null),
	(35, 15, 13, null),
	(50, 25, 13, null),
	(35, 15, 14, null),
	(50, 25, 14, null),
	(35, 15, 15, null),
	(50, 25, 15, null),
	(35, 15, null, 1),
	(50, 25, null, 1),
	(35, 10, null, 2),
	(50, 20, null, 2),
	(35, 20, null, 3),
	(50, 30, null, 3),
	(35, 15, null, 4),
	(50, 25, null, 4),
	(35, 15, null, 5),
	(50, 25, null, 5),
	(35, 15, null, 6),
	(50, 25, null, 6),
	(35, 15, null, 7),
	(50, 25, null, 7),
	(35, 15, null, 8),
	(50, 25, null, 8),
	(35, 15, null, 9),
	(50, 25, null, 9),
	(35, 15, null, 10),
	(50, 25, null, 10);


    INSERT INTO IMA_Def_Ped (cantidad, fk_pedido) VALUES
    (15, 1),
    (10, 2),
    (12, 3),
    (20, 4),
    (25, 5),
    (25, 6),
    (15, 7),
    (20, 8),
    (20, 9),
    (15, 10),
    (25, 11),
    (25, 12);

     INSERT INTO IMA_Miembro_Ifra(fechai, fechaf, tipo, fk_proveedor, fk_productor) VALUES
     ('04-04-2010', null, 'Principal', null, 1),
	 ('12-05-2009', null, 'Principal', 2, null),
	 ('10-06-2012', null, 'Secundario', 1, null),
	 ('23-08-2011', null, 'Secundario', null, 2),
	 ('15-09-2009', null, 'Asociacion Nacional', 3, null),
	 ('27-10-2007', null, 'Asociacion Nacional', 4, null),
	 ('04-11-2005', null, 'Asociacion Nacional', 5, null),
	 ('09-12-2006', null, 'Asociacion Nacional', null, 3),
	 ('03-02-2003', null, 'Asociacion Nacional', null, 4);

     INSERT INTO IMA_Prohibida (nombre, fk_miembro_ifra, fk_ingrediente_otro) VALUES
     ('eugenol', 1, 1),
	 ('eugenol', 2, 5),
     ('isoeugenol', 3, 2),
	 ('isoeugenol', 4, 15),
     ('cinamaldehído', 5, 3),
	 ('cinamaldehído', 6, 14),
     ('alcohol cinamílico', 7, 4),
     ('safranal', 8, 5),
	 ('safranal', 9, 13),
     ('hidroxictronelal', 1, 6),
	 ('hidroxictronelal', 2, 9),
     ('cetonas de rosa', 3, 7),
     ('benzoato de bencilo', 4, 8),
	 ('benzoato de bencilo', 5, 12),
     ('aldehído de ciclamen', 6, 9),
     ('salicilato hexílico', 7, 10),
     ('helional', 8, 11),
     ('aldehído amílico cinámico', 9, 12);

	 INSERT INTO IMA_Resultado_Final (fecha, resultado, tipoEval, fk_proveedor, fk_productor) VALUES
     ('13-05-2018', 40, 'Inicial', 1, 1),
	 ('12-05-2018', 65, 'Inicial', 1, 1),
	 ('25-06-2019', 70, 'Inicial', 2, 2),
     ('08-08-2019', 30, 'Inicial', 3, 3),
	 ('07-08-2019', 700, 'Inicial', 3, 3),
	 ('20-10-2019', 80, 'Inicial', 4, 4),
	 ('20-10-2020', 60, 'Inicial', 5, 4),
	 ('18-03-2019', 70, 'Renovacion', 1, 1),
     ('01-01-2020', 80, 'Renovacion', 2, 2),
     ('09-07-2019', 40, 'Renovacion', 3, 3),
	 ('15-09-2018', 30, 'Renovacion', 4, 4),
     ('28-12-2019', 75, 'Renovacion', 5, 1);

	 INSERT INTO IMA_Escala (fechai, fechaf, rangoi, rangof, fk_productor) VALUES
     ('12-05-2018', '13-05-2019', 50, 100, 1),
	 ('25-06-2019', null, 45, 100, 2),
	 ('07-08-2019', null, 40, 100, 3),
	 ('20-10-2019', '19-10-2020', 60, 100, 4),
	 ('18-03-2019', null, 35, 100, 1),
	 ('01-01-2020', null, 50, 100, 2),
	 ('09-07-2019', '08-07-202', 45, 100, 3),
	 ('15-09-2018', '14-09-2019', 55, 100, 4),
	 ('28-12-2019', null, 70, 100, 1);

	 INSERT INTO IMA_Criterio (nombreEtiq, descripcion) VALUES
     ('C1', 'El proveedor se encuentra en ese pais'),
	 ('C2', 'El proveedor posee vehículo y/o avión y/o barco'),
	 ('C3', 'El proveedor tiene un costo de envío mas un recargo'),
	 ('C4', 'El proveedor cumplió con lo acordado'),
	 ('C5', 'El proveedor ha salido con éxito la evaluación de renovación'),
	 ('C6', 'El proveedor cumplió con los objetivos para la relación inicial');

	INSERT INTO IMA_Cri_Eval (fechai, fechaf, peso, tipoform, fk_productor, fk_criterio) VALUES
     ('12-05-2018', '01-10-2019', 20, 'Inicial', 1, 1),
	 ('25-06-2019', '04-08-2019', 40, 'Inicial', 2, 2),
	 ('07-08-2019', null, 20, 'Inicial', 3, 3),
	 ('20-10-2019', '21-03-2020', 40, 'Inicial', 4, 4),
	 ('18-03-2019', '24-02-2019', 10, 'Final', 1, 5),
	 ('01-01-2020', null, 20, 'Final', 2, 6),
	 ('09-07-2019', null, 30, 'Final', 3, 1),
	 ('15-09-2018', '27-09-2020', 10, 'Final', 4, 2),
	 ('28-12-2019', '03-11-2020', 20, 'Final', 1, 4);