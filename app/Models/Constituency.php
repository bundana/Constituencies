<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Constituency extends Model
{
    use SoftDeletes;

    protected $fillable  = [
        'region', 'constituency', 'swing', 'mp', 'other_data'
    ];
}

