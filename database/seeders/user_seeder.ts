import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  public async run() {
    await db.table('users').insert([
      {
        full_name: 'Richard Rubio',
        email: 'richardrubio12@gmail.com',
        password: 'richard',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])

  }
}