import db from '@adonisjs/lucid/services/db'

export default class TipoSeeder {
  public async run() {
    await db.table('tipos').insert([
      {
        nome: 'Entrada',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Saída',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Investimento',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])

  }
}