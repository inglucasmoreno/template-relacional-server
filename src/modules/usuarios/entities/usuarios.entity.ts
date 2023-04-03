import { Clientes } from "src/modules/clientes/entities";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Usuarios {

  @PrimaryGeneratedColumn('increment')
  id: number;  

  @Column({ 
    nullable: false,
    type: 'varchar',
    length: 50
   })
  usuario: string;

  @Column({ 
    nullable: false,
    type: 'varchar',
    length: 50
  })
  dni: string;

  @Column({ 
    nullable: false,
    type: 'varchar',
    length: 50
   })
  apellido: string;

  @Column({ 
    nullable: false,
    type: 'varchar',
    length: 50
  })
  nombre: string;

  @Column({
    nullable: false,
    type: 'varchar',
  })
  password: string;

  @Column({ 
    nullable: true,
    type: 'varchar',
    length: 50 
  })
  email: string;

  @Column({ 
    enum: ['ADMIN_ROLE', 'USER_ROLE'],
    default: 'ADMIN_ROLE'
  })
  role: string;

  @Column({ default: true })
  activo: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Clientes, () => {})
  clientes: Clientes[]

}