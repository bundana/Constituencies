<?php

namespace App\Imports;

use App\Models\Constituency;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ConstituencyImport implements ToCollection, WithHeadingRow
{
    use Importable;


    public function collection(Collection $rows)
    {
        $data = [];
        foreach ($rows as $row) {
            $data = collect([
                'region' => $row['region'],
                'constituency' => $row['constituency'],
                'swing' => $row['swing'],
                'mp' => $row['mp']
            ]);

            Constituency::updateOrCreate(['constituency' => $row['constituency']], $data->toArray());
        }
        cache()->put('constituencies', $data);
        return $data;
    }
}
