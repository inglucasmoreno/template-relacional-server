import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { InicializacionService } from './inicializacion.service';

@Controller('inicializacion')
export class InicializacionController {

    constructor(private inicializacionService: InicializacionService){}

    // Inicializacion de usuarios
    @Get()
    async initSistema(@Res() res){
        await this.inicializacionService.inicializacion();
        res.status(HttpStatus.OK).json({
            message: 'Inicializacion completado correctamente'
        })
    }


}
