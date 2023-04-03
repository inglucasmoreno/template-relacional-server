import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class ClientesDTO {
    
    @IsString()
    readonly descripcion: string;
    
    @IsString()
    readonly tipo_identificacion: string;

    @IsString()
    readonly identificacion: string;

    @IsString()
    @IsOptional()
    readonly telefono: string;

    @IsString()
    @IsOptional()
    readonly direccion: string;

    @IsString()
    @IsOptional()
    readonly email: string;
  
    @IsBoolean()
    @IsOptional()
    readonly activo: boolean;

    @IsNumber()
    readonly creatorUser: number;

    @IsNumber()
    readonly updatorUser: number;

}