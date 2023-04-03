import { Usuarios } from "src/modules/usuarios/entities";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Clientes {

  @PrimaryGeneratedColumn('increment')
  id: number;  

  @Column({ // Apellido y Nombre | Razon social
    nullable: false,
    type: 'varchar',
    length: 100
   })
  descripcion: string;

  @Column({ 
    nullable: false,
    enum: ['CUIL', 'CUIT', 'DNI'] 
  })
  tipo_identificacion: string;

  @Column({ 
    nullable: false,
    type: 'varchar',
    length: 100
   })
  identificacion: string;

  @Column({ 
    type: 'varchar',
    default: '',
    length: 100
  })
  telefono: string;

  @Column({
    type: 'varchar',
    default: '',
    length: 100
  })
  direccion: string;

  @Column({ 
    type: 'varchar',
    default: '',
    length: 100
  })
  email: string;

  @Column({ default: true })
  activo: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Clientes (Many) -> Usuario creador (One)
  @ManyToOne(() => Usuarios, usuario => usuario.clientes)
  creatorUser: Usuarios;

  // Clientes (Many) -> Usuario actualizador (One)
  @ManyToOne(() => Usuarios, usuario => usuario.clientes)
  updatorUser: Usuarios;


}