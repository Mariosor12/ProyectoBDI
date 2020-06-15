CREATE TABLE Direccion(
	clave		SERIAL,
	nombre	VARCHAR(80)	NOT NULL,
	tipo		VARCHAR(10)	NOT NULL CHECK (tipo = 'Estado' OR tipo = 'Pais' OR tipo = 'Municipio' OR tipo = 'Parroquia'),
	fk_direccion	INTEGER,
	CONSTRAINT PK_direccion PRIMARY KEY (clave),
	CONSTRAINT FK_fk_direccion FOREIGN KEY (fk_direccion)
	REFERENCES Direccion (clave) ON DELETE CASCADE
);

CREATE TABLE Aceite_Esencial(
	clave		SERIAL,
	tipo_extraccion	VARCHAR(25) NOT NULL CHECK (tipo_extraccion = 'Maceracion' OR tipo_extraccion = 'Expresion' OR tipo_extraccion = 'Destilacion' OR tipo_extraccion = 'Enfleurage'),
    CONSTRAINT PK_Aceite_Esencial PRIMARY KEY (clave)
);

CREATE TABLE Tipo_Perfume(
	clave		SERIAL,
	nombre	VARCHAR NOT NULL,
    CONSTRAINT PK_Tipo_Perfume PRIMARY KEY (clave)
);

CREATE TABLE Familia_Olfativa(
	clave		SERIAL,
	nombre	VARCHAR NOT NULL,
    CONSTRAINT PK_Familia_Olfativa PRIMARY KEY (clave)
);

CREATE TABLE Presentacion(
	clave		SERIAL,
	numero	INTEGER	NOT NULL,
    CONSTRAINT PK_Presentacion PRIMARY KEY (clave)
);

CREATE TABLE Fase(
	clave		SERIAL,
	nombre	VARCHAR NOT NULL,
    CONSTRAINT PK_Fase PRIMARY KEY (clave)
);

CREATE TABLE Fijador(
	clave		SERIAL,
	nombre	VARCHAR NOT NULL,
    CONSTRAINT PK_Fijador PRIMARY KEY (clave)
);


CREATE TABLE Perfumista(
	clave		SERIAL,
	nombre	VARCHAR NOT NULL,
    fk_direccion INTEGER NOT NULL,
    CONSTRAINT PK_Perfumista PRIMARY KEY (clave),
    CONSTRAINT FK_fk_direccion FOREIGN KEY (fk_direccion)
	REFERENCES Direccion (clave) ON DELETE CASCADE
);

CREATE TABLE Proveedor(
	clave		SERIAL,
    nombre VARCHAR NOT NULL,
    pag_web VARCHAR NOT NULL,
    telefono VARCHAR NOT NULL,
    activo boolean,
    membresia VARCHAR NOT NULL CHECK (membresia = 'Principal' OR membresia = 'Secundario' OR membresia = 'Asociacion Nacional'),
    fk_direccion INTEGER NOT NULL,
    CONSTRAINT PK_Proveedor PRIMARY KEY (clave),
    CONSTRAINT FK_fk_direccion FOREIGN KEY (fk_direccion)
	REFERENCES Direccion (clave) ON DELETE CASCADE,
    CONSTRAINT Proveedor_Unique UNIQUE (nombre)
);

CREATE TABLE Productor(
	clave		SERIAL,
    nombre VARCHAR NOT NULL,
    pag_web VARCHAR NOT NULL,
    telefono varchar NOT NULL,
    activo boolean,
    membresia VARCHAR NOT NULL CHECK (membresia = 'Principal' OR membresia = 'Secundario' OR membresia = 'Asociacion Nacional'),
    fk_direccion INTEGER NOT NULL,
    CONSTRAINT PK_Productor PRIMARY KEY (clave),
    CONSTRAINT FK_fk_direccion FOREIGN KEY (fk_direccion)
	REFERENCES Direccion (clave) ON DELETE CASCADE,
    CONSTRAINT Productor_Unique UNIQUE (nombre)
);

CREATE TABLE Perfume(
	clave		SERIAL,
	nombre	VARCHAR(80)	NOT NULL,
	descripcion		VARCHAR	NOT NULL,
    fecha_nacimiento date NOT NULL,
    genero           VARCHAR(25) NOT NULL CHECK (genero = 'Masculino' OR genero = 'Femenino' OR genero = 'Unisex'),
	fk_fijador	INTEGER NOT NULL,
    fk_tipo_perfume	INTEGER NOT NULL,
    fk_Perfumista INTEGER NOT NULL,
    fk_productor INTEGER NOT NULL,
	CONSTRAINT PK_Perfume PRIMARY KEY (clave),
	CONSTRAINT FK_fk_fijador FOREIGN KEY (fk_fijador)
	REFERENCES Fijador (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_tipo_perfume FOREIGN KEY (fk_tipo_perfume)
	REFERENCES Tipo_Perfume (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_perfumista FOREIGN KEY (fk_perfumista)
	REFERENCES Perfumista (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_productor FOREIGN KEY (fk_productor)
	REFERENCES Productor (clave) ON DELETE CASCADE
);

CREATE TABLE Per_Pre(
	clave		SERIAL,
	costo	integer	NOT NULL,
	fk_perfume		INTEGER NOT NULL,
	fk_presentacion	INTEGER NOT NULL,
	CONSTRAINT PK_Per_Pre PRIMARY KEY (clave),
	CONSTRAINT FK_fk_perfume FOREIGN KEY (fk_perfume)
	REFERENCES Perfume (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_presentacion FOREIGN KEY (fk_presentacion)
	REFERENCES Presentacion (clave) ON DELETE CASCADE
);


CREATE TABLE Olor(
	clave		SERIAL,
	nombre	VARCHAR NOT NULL,
    fk_perfume INTEGER NOT NULL,
    fk_familia_olfativa INTEGER NOT NULL,
    CONSTRAINT PK_Fam_Per PRIMARY KEY (clave),
    CONSTRAINT FK_fk_perfume FOREIGN KEY (fk_perfume)
	REFERENCES Perfume (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_familia_olfativa FOREIGN KEY (fk_familia_olfativa)
	REFERENCES Familia_Olfativa (clave) ON DELETE CASCADE
);

CREATE TABLE Ace_Per(
	clave		SERIAL,
    fk_perfume INTEGER NOT NULL,
    fk_aceite_esencial INTEGER NOT NULL,
    CONSTRAINT PK_Ace_Per PRIMARY KEY (clave),
    CONSTRAINT FK_fk_perfume FOREIGN KEY (fk_perfume)
	REFERENCES Perfume (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_aceite_esencial FOREIGN KEY (fk_aceite_esencial)
	REFERENCES Aceite_Esencial (clave) ON DELETE CASCADE
);

CREATE TABLE Per_Fas(
	clave		SERIAL,
    fk_perfume INTEGER NOT NULL,
    fk_fase INTEGER NOT NULL,
    CONSTRAINT PK_Per_Fas PRIMARY KEY (clave),
    CONSTRAINT FK_fk_perfume FOREIGN KEY (fk_perfume)
	REFERENCES Perfume (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_fase FOREIGN KEY (fk_fase)
	REFERENCES Fase (clave) ON DELETE CASCADE
);

CREATE TABLE Ingrediente(
	clave		SERIAL,
	nombre	VARCHAR NOT NULL,
    costo INTEGER not NULL,
    fk_proveedor INTEGER NOT NULL,
    CONSTRAINT PK_Ingrediente PRIMARY KEY (clave),
    CONSTRAINT FK_fk_proveedor FOREIGN KEY (fk_proveedor)
	REFERENCES Proveedor (clave) ON DELETE CASCADE
);

CREATE TABLE Per_Ing(
	clave		SERIAL,
    fk_perfume INTEGER NOT NULL,
    fk_ingrediente INTEGER NOT NULL,
    CONSTRAINT PK_Per_Ing PRIMARY KEY (clave),
    CONSTRAINT FK_fk_perfume FOREIGN KEY (fk_perfume)
	REFERENCES Perfume (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_ingrediente FOREIGN KEY (fk_ingrediente)
	REFERENCES Ingrediente (clave) ON DELETE CASCADE
);

CREATE TABLE Formula(
	clave		SERIAL,
    variable NUMERIC NOT NULL,
    escala VARCHAR NOT NULL,
    peso NUMERIC not NULL,
    rango varchar NOT NULL,
    fk_proveedor INTEGER NOT NULL,
    fk_productor INTEGER NOT NULL,
    CONSTRAINT PK_Formula PRIMARY KEY (clave),
    CONSTRAINT FK_fk_proveedor FOREIGN KEY (fk_proveedor)
	REFERENCES Proveedor (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_productor FOREIGN KEY (fk_productor)
	REFERENCES Productor (clave) ON DELETE CASCADE
);

CREATE TABLE Contrato(
	clave		SERIAL,
	fecha_inicio date NOT NULL,
    fecha_fin date,
    descripcion varchar,
    exclusividad boolean,
    fk_proveedor INTEGER NOT NULL,
    fk_productor INTEGER NOT NULL,
    CONSTRAINT PK_Contrato PRIMARY KEY (clave),
    CONSTRAINT FK_fk_proveedor FOREIGN KEY (fk_proveedor)
	REFERENCES Proveedor (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_productor FOREIGN KEY (fk_productor)
	REFERENCES Productor (clave) ON DELETE CASCADE
);

CREATE TABLE Usuario(
    clave          SERIAL,
    nombre       VARCHAR NOT NULL,
    contrasena       VARCHAR NOT NULL,
    CONSTRAINT PK_Usuario PRIMARY KEY (clave)
);

CREATE TABLE Cliente(
	clave		SERIAL,
	nombre varchar NOT NULL,
    apellido varchar not NULL,
    telefono VARCHAR NOT NULL,
    fk_direccion INTEGER NOT NULL,
    fk_proveedor INTEGER NOT NULL,
    fk_usuario INTEGER NOT NULL,
    CONSTRAINT PK_Cliente PRIMARY KEY (clave),
    CONSTRAINT FK_fk_direccion FOREIGN KEY (fk_direccion)
	REFERENCES Direccion (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_proveedor FOREIGN KEY (fk_proveedor)
	REFERENCES Proveedor (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_usuario FOREIGN KEY (fk_usuario)
	REFERENCES Usuario (clave) ON DELETE CASCADE
);

CREATE TABLE Recomendador_Perfume(
    clave          SERIAL,
    nombre       VARCHAR NOT NULL,
    genero       VARCHAR NOT NULL,
    fk_cliente   INTEGER NOT NULL,
    CONSTRAINT PK_Recomendador_Perfume PRIMARY KEY (clave),
    CONSTRAINT FK_fk_cliente FOREIGN KEY (fk_cliente)
    REFERENCES Cliente (clave) ON DELETE CASCADE
);

CREATE TABLE Catalogo(
	clave		SERIAL,
	cantidad integer NOT NULL,
    fk_contrato INTEGER NOT NULL,
    fk_perfume INTEGER NOT NULL,
    fk_recomendador_perfume	INTEGER NOT NULL,
    CONSTRAINT PK_Catalogo PRIMARY KEY (clave),
    CONSTRAINT FK_fk_contrato FOREIGN KEY (fk_contrato)
	REFERENCES Contrato (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_perfume FOREIGN KEY (fk_perfume)
	REFERENCES Perfume (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_recomendador_perfume FOREIGN KEY (fk_recomendador_perfume)
	REFERENCES Recomendador_Perfume (clave) ON DELETE CASCADE
);

CREATE TABLE Compra(
	clave		SERIAL,
	fecha DATE NOT NULL,
    fk_proveedor INTEGER NOT NULL,
    CONSTRAINT PK_Compra PRIMARY KEY (clave),
    CONSTRAINT FK_fk_proveedor FOREIGN KEY (fk_proveedor)
	REFERENCES Proveedor (clave) ON DELETE CASCADE
);

CREATE TABLE Envio(
	clave		SERIAL,
    costo NUMERIC NOT NULL,
    recargo NUMERIC NOT NULL,
    fk_direccion INTEGER NOT NULL,
    CONSTRAINT PK_Envio PRIMARY KEY (clave),
    CONSTRAINT FK_fk_direccion FOREIGN KEY (fk_direccion)
	REFERENCES Direccion (clave) ON DELETE CASCADE
);

CREATE TABLE Tipo_Pago(
    numero               SERIAL,
    banco                VARCHAR(30) NOT NULL,
    tipo                 VARCHAR(20) NOT NULL CHECK (tipo = 'Transferencia' OR tipo = 'Tar_credito' OR tipo = 'Cheque' OR tipo = 'Tar_debito'),
    fecha                DATE,
    tipo_tar_cre         VARCHAR(30),
    fecha_vencimiento    DATE,
    numero_cuenta        VARCHAR(30),
    tipo_tar_deb         VARCHAR(30),
    CONSTRAINT PK_Tipo_Pago PRIMARY KEY (numero)
);

CREATE TABLE Venta(
    clave          SERIAL,
    fecha       DATE NOT NULL,
    total       NUMERIC NOT NULL,
    fk_cliente    INTEGER NOT NULL,
    CONSTRAINT PK_Venta PRIMARY KEY (clave),
    CONSTRAINT FK_fk_cliente FOREIGN KEY (fk_cliente)
    REFERENCES Cliente (clave) ON DELETE CASCADE
);

CREATE TABLE Pedido(
	clave		SERIAL,
	cantidad varchar NOT NULL,
    total NUMERIC NOT NULL,
    fk_compra INTEGER,
    fk_venta INTEGER,
    fk_envio INTEGER,
    fk_proveedor INTEGER,
    CONSTRAINT PK_Pedido PRIMARY KEY (clave),
    CONSTRAINT FK_fk_compra FOREIGN KEY (fk_compra)
	REFERENCES Compra (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_venta FOREIGN KEY (fk_venta)
	REFERENCES Venta (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_envio FOREIGN KEY (fk_envio)
	REFERENCES Envio (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_proveedor FOREIGN KEY (fk_proveedor)
	REFERENCES Proveedor (clave) ON DELETE CASCADE
);

CREATE TABLE Pago(
    clave          SERIAL,
    monto       NUMERIC(10,2) NOT NULL,
    fecha       DATE NOT NULL,
    fk_tipo_pago    INTEGER NOT NULL,
    fk_pedido    INTEGER NOT NULL,
    CONSTRAINT PK_Pago PRIMARY KEY (clave),
    CONSTRAINT FK_fk_tipo_pago FOREIGN KEY (fk_tipo_pago)
    REFERENCES Tipo_Pago (numero) ON DELETE CASCADE,
    CONSTRAINT FK_fk_pedido FOREIGN KEY (fk_pedido)
    REFERENCES Pedido (clave) ON DELETE CASCADE
);

CREATE TABLE Filtro(
    clave          SERIAL,
    intensidad       VARCHAR NOT NULL,
    uso              VARCHAR NOT NULL CHECK (uso = 'Trabajo' OR uso = 'Diario' OR uso = 'Ocasion Especial'),
    fk_recomendador_perfume   INTEGER NOT NULL,
    fk_perfume   INTEGER NOT NULL,
    CONSTRAINT PK_Filtro PRIMARY KEY (clave),
    CONSTRAINT FK_fk_recomendador_perfume FOREIGN KEY (fk_recomendador_perfume)
    REFERENCES Recomendador_Perfume (clave) ON DELETE CASCADE,
    CONSTRAINT FK_fk_perfume FOREIGN KEY (fk_perfume)
    REFERENCES Perfume (clave) ON DELETE CASCADE
);

CREATE TABLE Personalidad(
    clave          SERIAL,
    nombre         VARCHAR NOT NULL,
    fk_filtro   INTEGER NOT NULL,
    CONSTRAINT PK_Personalidad PRIMARY KEY (clave),
    CONSTRAINT FK_fk_filtro FOREIGN KEY (fk_filtro)
    REFERENCES Filtro (clave) ON DELETE CASCADE
);

CREATE TABLE Caracter(
    clave          SERIAL,
    nombre         VARCHAR NOT NULL,
    fk_filtro   INTEGER NOT NULL,
    CONSTRAINT PK_Caracter PRIMARY KEY (clave),
    CONSTRAINT FK_fk_filtro FOREIGN KEY (fk_filtro)
    REFERENCES Filtro (clave) ON DELETE CASCADE
);


