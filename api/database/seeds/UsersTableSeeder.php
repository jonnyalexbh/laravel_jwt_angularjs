<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
  /**
  * Run the database seeds.
  *
  * @return void
  */
  public function run()
  {
    $users = [
      [
        'name' => 'Jonny Alexander',
        'email' => 'jonny@gmail.com',
        'password' => bcrypt('secret')
      ]
    ];

    foreach ($users as $row) {
      \App\User::create($row);
    }

  }
}
