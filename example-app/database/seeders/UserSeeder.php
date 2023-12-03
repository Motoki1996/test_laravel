<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('users')->insert([
            [
                'name'              => 'admin',
                'email'             => 'admin@example.com',
                'email_verified_at' => now(),
                'password'          => \Hash::make('password1234'),
                'created_at'        => now(),
                'updated_at'        => now(),
            ],
            [
                'name'              => 'pikimaru',
                'email'             => 'pikimaru@example.com',
                'email_verified_at' => now(),
                'password'          => \Hash::make('password1234'),
                'created_at'        => now(),
                'updated_at'        => now(),
            ],
        ]);
    }
}
