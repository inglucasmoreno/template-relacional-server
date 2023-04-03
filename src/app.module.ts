import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './modules/auth/auth.module';
import { jwtConstants } from './modules/auth/constants';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { InicializacionModule } from './modules/inicializacion/inicializacion.module';
import { ClientesModule } from './modules/clientes/clientes.module';

@Module({
  imports: [

    // Directorio publico
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),

    // Variables de entorno
    ConfigModule.forRoot({ isGlobal: true }),

    // Autenticacion -> JsonWebToken
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '12h' }
    }),

    // Conexion a base de datos
    DatabaseModule,
    
    // Custom modules
    AuthModule,
    UsuariosModule,
    InicializacionModule,
    ClientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService){
    AppModule.port = +this.configService.get('PORT');
  }
}
