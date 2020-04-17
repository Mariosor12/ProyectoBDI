export interface Producto {
    id?: number;
    nombre?: string;
    descripcion?: string;
    precio_unitario?:number;
    fk_ale?: number;
    fk_lager?: number;
}