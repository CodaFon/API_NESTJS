import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class attachement1667825757565 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'attachements',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            generationStrategy: 'uuid',
            isPrimary: true,
            isUnique: true,
            isNullable: false,
            isGenerated: true,
          },
          {
            name: 'content',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'message_id',
            type: 'varchar',
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
      'attachements',
      new TableForeignKey({
        columnNames: ['message_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'messages',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('attachements');
  }
}
