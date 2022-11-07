import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class user1667748661179 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            isNullable: false,
          },
          {
            name: 'pseudo',
            type: 'varchar(50)',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'mail',
            type: 'varchar(200)',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'birthDate',
            type: 'datetime',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'role_id',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'active',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'datetime',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'datetime',
            isNullable: true,
          },
          {
            name: 'deleted_at',
            type: 'datetime',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        columnNames: ['role_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'roles',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('users');
    const foreignKeys = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('role_id') !== -1,
    );

    await queryRunner.dropForeignKey('users', foreignKeys);
    await queryRunner.dropColumn('users', 'role_id');
    await queryRunner.dropTable('users');
  }
}
