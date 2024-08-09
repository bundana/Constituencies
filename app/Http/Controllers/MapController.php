<?php

namespace App\Http\Controllers;

use App\Imports\ConstituencyImport;
use App\Models\Constituency;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class MapController extends Controller
{
    public function import()
    {
        $fileUrl = public_path('Book1.csv');
        Excel::import(new ConstituencyImport, $fileUrl);
        $constituencies = Constituency::all();
        return Inertia::render('Welcome', []);
    }

    public function index(Request $request)
    {

        return Inertia::render('Index', [
            'constituencies' => Constituency::get(),
            'logo' => asset('ndc-logo.png'),
            'map' => asset('ghana-map.svg')
        ]);
    }

    public function showConstituency(Request $request)
    {
        $constituency = Constituency::findOrFail($request->id);
        return Inertia::render('ConstituencyInfo', [
            'constituency' => $constituency,
            'logo' => asset('ndc-logo.png'),
            'logoIcon' => asset('ndc-logo.png')
        ]);
    }

    public function constituencies()
    {

        return Inertia::render('Constituencies', [
            'constituencies' => Constituency::get(),
            'logo' => asset('ndc-logo.png')
        ]);
    }
    public function api()
    {
        return response()->json(Constituency::get());
    }
}
