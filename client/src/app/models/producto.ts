export interface Producto {
    id?: number;
    nombre?: string;
    descripcion?: string;
    fecha_nacimiento?: Date;
    genero?:string;
    fk_fijador?: number;
    fk_tipo_perfume?: number;
    fk_perfumista?: number;
}